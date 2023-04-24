import { getPost } from '$lib/api/posts'
import type { PageServerLoad } from './$types';

export const load = (async ({ params, setHeaders }) => {
	const { content, frontmatter } = await getPost(params.slug)

	const day = 60 * 60 * 24 * 1000
	const published = frontmatter.published
	const time = new Date().getTime() - new Date(published).getTime()
	const days = time / day
	const maxage = days > 6 ? 60 * 60 * 24 * 6 : 60

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${maxage}`,
	})

	return { content, frontmatter }
}) satisfies PageServerLoad;