<script lang="ts">
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));

	import Skribbl from '$lib/components/svgs/Skribbl.svelte';
	import SpotifyPresence from '$lib/components/SpotifyPresence.svelte';
	import SkillsRow from '$lib/components/SkillsRow.svelte';
	import { headerClickCounter } from '$lib/stores/headerClickCounter';
	import { fade } from 'svelte/transition';
</script>

{#if ready}
	<div class="h-full max-w-5xl mx-auto px-4 py-4 md:px-0" in:fade>
		<div class="max-w-2xl py-16 md:py-8 sm:py-40 md:mx-auto">
			<h2
				class="text-4xl w-min font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl select-none"
				on:click={() => headerClickCounter.update((i) => i + 1)}
			>
				Atlas
				<Skribbl />
			</h2>

			<p class="mt-8 text-lg text-gray-300">
				My name is Matteo Krans Dusic aka Atlas. I'm currently studying advanced Web Development,
				and i take it very seriously! I have been programming websites, games & miscellaneous things
				for well over 5 years. I'm a freelance developer who specializes in web development, so
				please don't be afraid to reach out!
			</p>

			<SkillsRow />

			<SpotifyPresence />
		</div>
	</div>
{/if}
