<script lang="ts">
	import type { SvelteComponent } from './$types';
	import CSharpLogo from '$lib/components/svgs/CSharp.svelte';
	import LuaLogo from '$lib/components/svgs/Lua.svelte';
	import TypeScriptLogo from '$lib/components/svgs/TypeScript.svelte';
	import SvelteLogo from '$lib/components/svgs/Svelte.svelte';
	import NodeJS from '$lib/components/svgs/NodeJS.svelte';

	type SkillName = string;

	type Skill = {
		name: SkillName;
		icon: SvelteComponent;
	};

	const skills: Skill[] = [
		{ name: 'SvelteKit', icon: SvelteLogo },
		{ name: 'NodeJS', icon: NodeJS },
		{ name: 'TypeScript', icon: TypeScriptLogo },
		{ name: 'C#', icon: CSharpLogo },
		{ name: 'Lua', icon: LuaLogo }
	];
</script>

<div class="flex flex-wrap gap-6 mt-5">
	{#each skills as skill}
		<div class="text-gray-400 transition">
			<span class="sr-only">{skill.name}</span>

			<svelte:component
				this={skill.icon}
				classes="w-8 h-8 hover:text-primary-500 fill-current transition"
			/>
		</div>
	{/each}
</div>
