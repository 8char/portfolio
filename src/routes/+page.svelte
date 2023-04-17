<script lang="ts">
	import Skribbl from "$lib/components/svgs/Skribbl.svelte";
    import BackgroundImage from "$lib/assets/background.jpg"

    import SpotifyPresence from "$lib/components/SpotifyPresence.svelte";

    import CSharpLogo from "$lib/components/svgs/CSharp.svelte"
    import LuaLogo from '$lib/components/svgs/Lua.svelte';
    import TypeScriptLogo from '$lib/components/svgs/TypeScript.svelte';
    import SvelteLogo from "$lib/components/svgs/Svelte.svelte";
    import NodeJS from "$lib/components/svgs/NodeJS.svelte";

    type SkillName = string;

    type Skill = {
        name: SkillName;
        icon: any;
    };

    const skills: Skill[] = [
        { name: 'SvelteKit', icon: SvelteLogo },
        { name: 'NodeJS', icon: NodeJS },
        { name: 'TypeScript', icon: TypeScriptLogo },
        { name: 'C#', icon: CSharpLogo },
        { name: 'Lua', icon: LuaLogo },
    ];
</script>

<div class="hidden md:block fixed bottom-0 right-0 md:max-w-lg lg:max-w-2xl pointer-events-none">
    <svg
        class="hidden md:block absolute top-0 left-0 h-full w-full text-gray-900"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
    >
        <polygon points="0,0 0,100 100,0" />
    </svg>

    <img
        src={BackgroundImage}
        alt="Background"
    >
    </div>

    <div class="relative max-w-5xl mx-auto px-4 py-8 md:px-0">
    <div class="max-w-2xl py-16 sm:py-40">
        <h2 class="text-4xl w-min font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Atlas
            <Skribbl />
        </h2>

        <p class="mt-8 text-lg text-gray-300">
            My name is Matteo Krans Dusic aka Atlas. I'm currently studying Web Development, however I've been programming for well over 5 years. I'm a freelance developer who specializes in web development, so please don't be afraid to reach out!
        </p>

        <div class="flex space-x-6 mt-5">
            {#each skills as skill, i}
                <div class="text-gray-400 transition">
                    <span class="sr-only">{skill.name}</span>
    
                    <svelte:component
                        this={skill.icon}
                        classes="w-8 h-8 hover:text-primary-500 fill-current transition"
                    />
                </div>
            {/each}
        </div>

        <SpotifyPresence />
    </div>
</div>