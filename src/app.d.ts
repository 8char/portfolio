declare module 'isomorphic-timers-promises';
declare namespace FontAwesome {
	type IconDefinition = import('@fortawesome/free-brands-svg-icons').IconDefinition;
}

/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('$lib/server/lucia.js').Auth;
	type UserAttributes = {
		username: string;
	};
}

/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface Locals {
		auth: import('lucia-auth').AuthRequest;
	}
}
