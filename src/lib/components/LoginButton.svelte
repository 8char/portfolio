<script lang="ts">
	import { enhance } from '$app/forms';
	export let user: any;
	export let standalone: boolean;
</script>

{#if user}
	<form use:enhance method="post">
		<input
			class={`ring-1 rounded-xl px-3 p-1 text-gray-300 hover:text-white hover:bg-primary-500/10 transition${
				!standalone ? ' ml-auto' : ''
			}`}
			type="submit"
			value="Sign out"
		/>
	</form>
{:else}
	<a
		class={`ring-1 rounded-xl px-3 p-1 text-gray-300 hover:text-white hover:bg-primary-500/10 transition${
			!standalone ? ' ml-auto' : ''
		}`}
		href="/login"
	>
		Log In
	</a>
{/if}
