import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	return {
		user: user ?? null
	};
}) satisfies PageServerLoad;
