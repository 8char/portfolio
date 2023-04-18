export const siteName = 'Atlas/8char'
export const siteUrl = 'https://www.8char.me/'
export const siteTitle = 'Atlas/8char'
export const siteDescription =
	'My portfolio features my web development and design projects and offers tips on HTML, CSS, JavaScript, and more.'
export const siteImage = `${siteUrl}social.png`
export const postImage = 'https://social-share-images.vercel.app/'

export const github = 'https://github.com/8char'

export const api = 'https://api.github.com'
export const owner = '8char'
export const repo = 'portfolio'
export const path = 'posts'

export const categories = {
	javascript: 'JavaScript',
	css: 'CSS',
	general: 'General',
	design: 'Design',
	git: 'Git & GitHub',
	typescript: 'TypeScript',
	svelte: 'Svelte',
	sveltekit: 'SvelteKit',
}

// https://api.github.com/repos/user/repo/contents/data/posts.json
export const postsDataUrl = `${api}/repos/${owner}/${repo}/contents/data/posts.json`

// https://api.github.com/repos/user/repo/contents/posts
export const postsUrl = `${api}/repos/${owner}/${repo}/contents/${path}`

// https://github.com/user/repo/blob/main/posts
export const fileUrl = `https://github.com/${owner}/${repo}/blob/main/posts`

// https://raw.githubusercontent.com/user/repo/main/posts/post-slug/images/image.webp
export const imagesUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/posts`