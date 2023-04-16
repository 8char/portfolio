<script>
	import Skribbl from "$lib/components/Skribbl.svelte";
    import BackgroundImage from "$lib/assets/background.png"
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
        <!-- <Skribbl class="mx-auto mt-2 text-primary-300 w-42 h-6" /> -->
        </h2>

        <p class="mt-8 text-lg text-gray-300">
        My name is Matteo Krans Dusic aka Atlas. I'm currently studying Computer Science, however I've been programming for well over 4 years. I'm a freelance developer which specializes in web development, so please don't be afraid to reach out!
        </p>

        <div class="flex space-x-6 mt-5">
            <div class="text-gray-400 transition">
            <span class="sr-only">Hello</span>

            <component
                :is="skill.icon"
                :title="skill.name"
                class="w-8 h-8 hover:text-primary-500 fill-current transition"
            />
            </div>
        </div>

        <!-- <SpotifyPresence /> -->
    </div>
</div>