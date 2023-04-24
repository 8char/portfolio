<script lang="ts">
    import { dropdown } from "$lib/stores/dropdownStore";
    import { blurOnEscape } from "$lib/directives/blurOnEscape";
</script>
    
<div class="relative z-10">
    <button
        class="text-gray-300 hover:text-white group inline-flex items-center text-sm font-medium py-2 focus:outline-none"
        on:click={() => dropdown.set(!$dropdown)}
        on:blur={() => dropdown.set(false)}
        use:blurOnEscape
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

    {#if $dropdown}
         <div
             class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800"
             role="menu"
             tabindex="-1"
         >
             <div
                class="py-1"
                role="none"
             >
                <slot />
             </div>
         </div>
    {/if}

</div>