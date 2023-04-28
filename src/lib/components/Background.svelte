<script lang="ts">
	import mountainsImage from '$lib/assets/mountains.jpg';
</script>

<div class="absolute z-0 w-full h-full overflow-hidden aspect-video">
	<div
		class="absolute z-10 top-0 left-0 h-28 w-full bg-gradient-to-b from-black/50 to-transparent"
	/>
	<img
		loading="lazy"
		alt="Cover"
		src={mountainsImage}
		class="absolute inset-0 w-full object-cover object-center pointer-events-none select-none opacity-60 mask-gradient"
	/>

	<div
		class="block absolute z-10 top-0 inset-x-0 aspect-video"
		style="background-image: linear-gradient(0deg, #171717 20%, rgba(17, 17, 17, 0.5) 100%);"
	/>
</div>
