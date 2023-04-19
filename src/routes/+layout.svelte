<script>
	import '$lib/styles/styles.scss';

	import Logo from '$lib/assets/logo-fit.png';
    import mountainsImage from '$lib/assets/mountains.jpg';
</script>

<svelte:head>
	<title>Atlas/8char</title>
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<div class="absolute z-0 w-full h-full overflow-hidden aspect-video">
		<div
			class="absolute z-10 top-0 left-0 h-28 w-full bg-gradient-to-b from-black/50 to-transparent"
		/>
		<img
            loading="lazy"
            alt="Cover Photo"
			src={mountainsImage}
			class="absolute inset-0 w-full object-cover object-center pointer-events-none select-none opacity-60 mask-gradient"
		/>

		<div
			class="block absolute z-10 top-0 inset-x-0 aspect-video"
			style="background-image: linear-gradient(0deg, #171717 20%, rgba(17, 17, 17, 0.5) 100%);"
		/>
	</div>
    <div class="sticky top-2 z-50 text-center mx-2">
        <div
            class="max-w-5xl mx-auto px-4 flex items-center py-5 justify-between rounded-xl ring-1 ring-primary-500/50 backdrop-blur-xl bg-gray-900/30 shadow-xl gap-8 md:p-6"
        >
            <img src={Logo} alt="Atlas's Logo" class="h-6" />
            <div class="md:hidden">
                <button
                    type="button"
                    class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none"
                    aria-expanded="false"
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
    
                    <!-- <Dropdown>
                    <template #trigger="{ toggle }">
                        <button
                        class="text-gray-300 hover:text-white group inline-flex items-center text-sm font-medium py-2 focus:outline-none"
                        @click="toggle"
                        >
                        <span>Socials</span>
    
                        <svg
                            class="text-gray-400 ml-2 h-5 w-5 group-hover:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                            />
                        </svg>
                        </button>
                    </template>
    
                    <DropdownItem
                        href="https://github.com/8char"
                        target="_blank"
                        :icon="faGithub"
                    >
                        Github
                    </DropdownItem>
    
                    <DropdownItem
                        href="https://linkedin.com/in/matteo-krans-dusic-337ba31b6/"
                        target="_blank"
                        :icon="faLinkedIn"
                    >
                        Linked In
                    </DropdownItem>
                    </Dropdown> -->
                </nav>

                <button class="ring-1 rounded-xl px-3 p-1 text-gray-300 hover:text-white hover:bg-primary-500/10 transition ml-auto">
                    Log In
                </button>
            </div>
        </div>
        {#if false}
            <div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div class="rounded-lg bg-gray-800 p-5 space-y-5">
                    <div class="sm:pb-8">
                        <div class="flex items-center justify-end">
                            <button
                                type="button"
                                class="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-non"
                            >
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
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
                    </div>
                    <div>
                        <div class="grid grid-cols-2 gap-4">
                            <router-link to="/" class="text-base font-medium text-gray-100 hover:text-gray-300">
                                Home
                            </router-link>
                            <router-link
                                to="/projects"
                                class="text-base font-medium text-gray-100 hover:text-gray-300"
                            >
                                Projects
                            </router-link>
                        </div>
    
                        <div class="mt-3 space-x-5">
                            <a href="https://github.com/8char" target="_blank">
                                <font-awesome-icon
                                    size="lg"
                                    :icon="faGithub"
                                    class="text-gray-400 hover:text-gray-300"
                                />
                            </a>
    
                            <a href="https://linkedin.com/in/matteo-krans-dusic-337ba31b6/" target="_blank">
                                <font-awesome-icon
                                    size="lg"
                                    :icon="faLinkedIn"
                                    class="text-gray-400 hover:text-gray-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <div class="relative">
        <slot />
    </div>
</div>
