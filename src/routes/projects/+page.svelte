<script>
	import ProjectImage from '$lib/assets/projects/demo-post.jpg';
</script>

<div class="mx-2">
	<div class="md:max-w-5xl md:mx-auto py-8 space-y-10">
		<div
			class="flex flex-col rounded-md border-transparent border-2 hover:border-primary-300 transition duration-200 md:flex-row"
		>
			<div class="md:w-1/2">
				<img
					class="w-full h-full md:rounded-l-md max-md:rounded-t-md"
					src={ProjectImage}
					alt="Project"
				/>
			</div>

			<div class="md:w-1/2 bg-gray-800 p-5 md:rounded-r-md max-md:rounded-b-md">
				<div class="mb-4 space-x-2">
					<span
						class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white"
					>
						CATEGORY
					</span>
				</div>

				<a href="/projects/demo-post" class="block mt-2">
					<p class="text-xl font-bold text-white">The Project Name</p>
					<p class="mt-2 text-sm text-gray-300">
						Not really done with this yet, this only serves as a placeholder for now... Not really
						done with this yet, this only serves as a placeholder for now... Not really done with
						this yet, this only serves as a placeholder for now... Not really done with this yet,
						this only serves as a placeholder for now...
					</p>

					<p class="text-gray-500 text-xs mt-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>

						Today - Now
					</p>
				</a>
			</div>
		</div>
	</div>
</div>
