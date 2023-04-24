<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import FontAwesomeIcon from 'svelte-fa';

	export let icon: IconDefinition;
	export let href: string;
</script>

<a
	class="text-gray-300 hover:text-gray-200 group flex items-center px-4 py-2 text-sm"
	role="menuitem"
	{href}
	target="_blank"
	tabindex="-1"
>
	<FontAwesomeIcon {icon} size="lg" class="mr-3 text-gray-400 group-hover:text-gray-300" />

	<slot />
</a>
