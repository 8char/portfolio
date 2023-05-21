<script lang="ts">
	import '$lib/styles/styles.scss';
	import type { PageData } from './$types';

	import NavBar from '$lib/components/NavBar.svelte';
	import Background from '$lib/components/Background.svelte';
	import { headerClickCounter } from '$lib/stores/headerClickCounter';

	import { fly } from 'svelte/transition';

	export let data: PageData;
</script>

<svelte:head>
	<title>Atlas/8char</title>
	<meta
		name="description"
		content="Welcome to my portfolio website! My name is Matteo Krans Dusic, aka Atlas, and I'm a freelance web developer with over 5 years of programming experience. Browse my projects and see my skills in action. If you're in need of a web developer, don't hesitate to reach out!"
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<Background />
	<NavBar user={data.user} />
	<main class="relative mt-6">
		<slot />
	</main>
	{#if $headerClickCounter >= 5}
		<a href="/snake" class="fixed bottom-0 right-0" transition:fly={{ y: 200, duration: 2000 }}
			>&#128013;</a
		>
	{/if}
</div>
