// import { type Actions, fail } from '@sveltejs/kit';
// import { auth } from '$lib/server/lucia';

// export const actions: Actions = {
// 	// signout
// 	default: async ({ locals }) => {
// 		const session = await locals.auth.validate();
// 		if (!session) return fail(401);
// 		await auth.invalidateSession(session.sessionId);
// 		locals.auth.setSession(null);
// 	}
// };
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	return {
		user: user
	};
}) satisfies LayoutServerLoad;
