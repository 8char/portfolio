import { getPost } from '$lib/api/posts';
import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types';
import { error, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import { commentSchema } from '$lib/schema/comment';

export const load = (async ({ params, setHeaders, locals }) => {
    const user = locals.auth.validateUser();

	const { content, frontmatter } = await getPost(params.slug);

	const day = 60 * 60 * 24 * 1000;
	const published = frontmatter.published;
	const time = new Date().getTime() - new Date(published).getTime();
	const days = time / day;
	const maxage = days > 6 ? 60 * 60 * 24 * 6 : 60;

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${maxage}`
	});

    const comments = await prisma.comment.findMany({
        include: {
            auth_user: {
                select: {
                    username: true,
                },
            },
        },
        orderBy: {
            timestamp: 'desc',
        },
    })

	return {
		content,
		frontmatter,
        comments,
        user
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request, locals, params }) => {
        if (!params.slug) throw error(500, { message: "No slug was defined"})

        const user = await locals.auth.validateUser();

        if (!user.session) {
            throw error(403, {
                message: 'Not logged in!'
            })
        }

        const formData = Object.fromEntries(
            await request.formData()
        )
        
        try {
            commentSchema.parse(formData)

            try {
                await prisma.comment.create({
                    data: {
                        content: formData.content as string,
                        user_id: user.session.userId,
                        post_id: params.slug as string,
                    }
                });
            } catch (err) {
                throw error(500, "Unable to create comment")
            }
        } catch (err) {
            if (!(err instanceof z.ZodError)) return console.error(err);

            const { fieldErrors: errors } = err.flatten();
            return {
                data: formData,
                errors
            }
        }
    }
}
