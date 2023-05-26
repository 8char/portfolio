<script lang="ts">
	import type { User } from './$types';

	import Logo from '$lib/assets/logo-fit.png';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import DropdownItem from '$lib/components/DropdownItem.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import FontAwesomeIcon from 'svelte-fa';

	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	export let user: User;
	const navMenuOpen = writable<boolean>(false);
</script>

<nav class="sticky top-2 z-50 text-center mx-2">
	<div
		class="max-w-5xl mx-auto px-4 flex items-center py-5 justify-between rounded-xl ring-1 ring-primary-500/50 backdrop-blur-xl bg-gray-900/30 shadow-xl gap-8 md:p-6"
	>
		<a href="/">
			<img src={Logo} alt="Atlas's Logo" class="h-6" width="20" height="24" />
		</a>
		<div class="md:hidden">
			<button
				type="button"
				class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none"
				aria-expanded={$navMenuOpen}
				on:click={() => navMenuOpen.update((open) => true)}
			>
				<span class="sr-only">Open menu</span>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
		<div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
			<nav class="flex space-x-10 justify-between">
				<a
					href="/"
					class="text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition"
				>
					Home
				</a>

				<a
					href="/projects"
					class="text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium transition"
				>
					Projects
				</a>

				<Dropdown>
					<DropdownItem href="https://github.com/8char" icon={faGithub}>Github</DropdownItem>

					<DropdownItem
						href="https://linkedin.com/in/matteo-krans-dusic-337ba31b6/"
						icon={faLinkedin}
					>
						Linked In
					</DropdownItem>
				</Dropdown>
			</nav>

			<LoginButton {user} standalone={false} />
		</div>
	</div>

	{#if $navMenuOpen}
		<div
			class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
			transition:fade={{ duration: 200 }}
		>
			<div class="rounded-lg bg-gray-800 p-5 space-y-5">
				<div class="flex items-center justify-between">
					<LoginButton {user} standalone={true} />
					<button
						type="button"
						class="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-non"
						on:click={() => navMenuOpen.update((open) => false)}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div>
					<div class="grid grid-cols-2 grid-rows-2 gap-4 items-center content-center">
						<a href="/" class="text-base font-medium text-gray-100 hover:text-gray-300"> Home </a>
						<a href="/projects" class="text-base font-medium text-gray-100 hover:text-gray-300">
							Projects
						</a>
						<a
							href="https://github.com/8char"
							class="text-base font-medium text-gray-100 hover:text-gray-300 flex gap-2 mx-auto"
							target="_blank"
						>
							<FontAwesomeIcon
								size="lg"
								icon={faGithub}
								class="text-gray-400 hover:text-gray-300"
							/>
							GitHub
						</a>

						<a
							href="https://linkedin.com/in/matteo-krans-dusic-337ba31b6/"
							class="text-base font-medium text-gray-100 hover:text-gray-300 flex gap-2 mx-auto"
							target="_blank"
						>
							<FontAwesomeIcon
								size="lg"
								icon={faLinkedin}
								class="text-gray-400 hover:text-gray-300"
							/>
							Linked In
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</nav>
