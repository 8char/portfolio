<script lang="ts">
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));

	import Clipboard from '$lib/components/Clipboard.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Giscus from '@giscus/svelte';
	import { postImage, siteName, siteUrl } from '$lib/api/config';
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { formatDistanceToNow } from 'date-fns';
	export let data;
	export let form;
	let image = `${postImage}${encodeURIComponent(data.frontmatter.title)}.png`;
</script>

<svelte:head>
	<title>Atlas/8char • {data.frontmatter.title}</title>

	<meta content={data.frontmatter.description} name="description" />

	<meta content={data.frontmatter.title} property="og:title" />
	<meta content={image} property="og:image" />
	<meta content={siteUrl} property="og:url" />
	<meta content={data.frontmatter.description} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<meta content="summary_large_image" name="twitter:card" />
	<meta content={data.frontmatter.title} name="twitter:title" />
	<meta content={data.frontmatter.description} name="twitter:description" />
	<meta content={image} name="twitter:image" />
</svelte:head>

<Clipboard />

{#if ready}
	<article in:fade>
		<Overlay />

		<div class="prose text-white">
			{@html data.content}

			{#if data.user.session}
				<div class="flex flex-col gap-2">
					<form method="post" class="flex" use:enhance>
						<textarea
							name="content"
							value={form?.data?.content ?? ''}
							placeholder="Content of your comment..."
							class="rounded-xl ring-1 rounded-r-none hover:ring-secondary-500/50 bg-gray-800 h-24 flex-1 p-2"
						/>
						<input
							type="submit"
							value="Comment"
							class="ring-1 hover:ring-secondary-500/50 rounded-xl rounded-l-none bg-gray-900/40 hover:bg-secondary-900/40 backdrop-blur-xl p-1 transition duration-300 font-bold p-4"
						/>
					</form>
					{#if form?.errors?.content}
						<span class="text-red-500 mb-1">{form.errors.content}</span>
					{/if}
				</div>
			{/if}

			<Giscus
				id="comments"
				repo="8char/portfolio"
				repoId="R_kgDOJL6Ftw"
				category="Announcements"
				categoryId="DIC_kwDOJL6Ft84Ce4SV"
				term="idk lol"
				mapping="pathname"
				strict="0"
				inputPosition="top"
				theme="noborder_dark"
				lang="en"
				loading="lazy"
			/>
		</div>
	</article>
{/if}
