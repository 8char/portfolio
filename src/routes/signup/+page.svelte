<script lang="ts">
	import { enhance } from '$app/forms';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	export let form: { message?: string };
	import FontAwesomeIcon from 'svelte-fa';
</script>

<div
	class="rounded-lg bg-gray-900/40 backdrop-blur-xl ring-1 hover:bg-gray-800/50 transition shadow-xl flex flex-col gap-2 items-center w-fit p-6 text-white mx-auto"
>
	<h2 class="text-2xl">Create an account</h2>
	<a href="/api/oauth?provider=github" class="bg-gray-900 p-2 w-full rounded-md flex items-center">
		<FontAwesomeIcon
			icon={faGithub}
			size="lg"
			class="mr-3 text-gray-400 group-hover:text-gray-300"
		/>
		<span class="mx-auto">Continue with Github</span>
	</a>
	<p class="center italic">━ or ━</p>
	<form method="post" class="flex flex-col gap-2" use:enhance>
		<label for="username">USERNAME</label>
		<input
			id="username"
			name="username"
			class="rounded-xl ring-1 hover:ring-secondary-500/50 bg-gray-800 p-1"
		/>
		<label for="password">PASSWORD</label>
		<input
			type="password"
			name="password"
			class="rounded-xl ring-1 hover:ring-secondary-500/50 bg-gray-800 p-1"
		/>
		<input
			type="submit"
			value="Continue"
			class="ring-1 hover:ring-secondary-500/50 rounded-xl bg-gray-900/40 hover:bg-secondary-900/40 backdrop-blur-xl p-1 transition duration-300 mt-2"
		/>
	</form>
	{#if form?.message}
		<p class="error">{form.message || ''}</p>
	{/if}
	<a href="/login" class="italic hover:underline">Use an existing account</a>
</div>
