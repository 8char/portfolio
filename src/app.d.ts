import type { AuthRequest } from 'lucia-auth';

declare module 'isomorphic-timers-promises';

export type User = {
	userId: string;
	username: string;
} | null;

export type RateType = {
	limit: number;
	used: number;
	remaining: number;
	remainingMinutes: number;
	reset: string;
	resetTimeLocale: string;
};

export type FrontMatterType = {
	title: string;
	description: string;
	slug: string;
	published: string;
	category: string;
};

export type PostMarkdownType = {
	content: string;
	frontmatter: FrontMatterType;
	postMarkdown: string;
};

export type PostType = {
	views: number;
	title: string;
	description: string;
	slug: string;
	published: string;
	category: string;
	series?: string;
	draft?: string;
};

export type PostsType = {
	posts: PostType[];
	latestPost: PostType;
	popular: PostType[];
	latest: PostType[];
	series: PostType[];
	picks: PostType[];
};

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
		auth: AuthRequest;
	}
}
