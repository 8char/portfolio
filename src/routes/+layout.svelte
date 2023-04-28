<script lang="ts">
	import '$lib/styles/styles.scss';
	import type { PageData } from './$types';

	import NavBar from '$lib/components/NavBar.svelte';
	import Background from '$lib/components/Background.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Atlas/8char</title>
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<Background />
	<NavBar user={data.user} />
	<div class="relative mt-6">
		<slot />
	</div>
</div>
