import { type Actions, fail } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) return;
	return {
		user
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	// signout
	default: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}
};
