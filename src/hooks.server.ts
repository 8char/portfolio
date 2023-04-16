import { handleHooks } from '@lucia-auth/sveltekit';
import { auth } from '$lib/server/lucia';

// eslint-disable-next-line import/prefer-default-export
export const handle = handleHooks(auth);
