import { handleServerSession } from '@lucia-auth/sveltekit';

// eslint-disable-next-line import/prefer-default-export
export const load = handleServerSession();