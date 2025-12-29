<script lang="ts">
	interface Trip {
		id: string;
		name: string;
		year: number;
		location: string;
		image: string;
		stats: Record<string, string>;
		story: string;
		tags: string[];
		gallery?: Array<{ url: string; caption: string }>;
		story_long?: string[];
		highlights?: string[];
	}

	let { trip }: { trip: Trip } = $props();

	let currentImageIndex = $state(0);

	function nextImage() {
		if (trip.gallery) {
			currentImageIndex = (currentImageIndex + 1) % trip.gallery.length;
		}
	}

	function prevImage() {
		if (trip.gallery) {
			currentImageIndex = (currentImageIndex - 1 + trip.gallery.length) % trip.gallery.length;
		}
	}

	const currentImage = $derived(trip.gallery?.[currentImageIndex]);
	const hasGallery = $derived(trip.gallery && trip.gallery.length > 0);
	const hasStoryLong = $derived(trip.story_long && trip.story_long.length > 0);
	const hasHighlights = $derived(trip.highlights && trip.highlights.length > 0);
</script>

<div class="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
	{#if hasGallery}
		<!-- Gallery Section -->
		<div class="relative">
			<!-- Main Image -->
			<div class="aspect-video bg-gray-800 relative overflow-hidden">
				<img
					src={currentImage?.url || trip.image}
					alt={currentImage?.caption || trip.name}
					class="w-full h-full object-cover"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>

				<!-- Image Counter -->
				{#if trip.gallery && trip.gallery.length > 1}
					<div class="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur rounded-full text-white text-sm font-mono">
						{currentImageIndex + 1}/{trip.gallery.length}
					</div>
				{/if}

				<!-- Navigation Buttons -->
				<button
					onclick={prevImage}
					class="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all z-10"
					aria-label="Previous image"
				>
					←
				</button>
				<button
					onclick={nextImage}
					class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all z-10"
					aria-label="Next image"
				>
					→
				</button>

				<!-- Image Caption -->
				{#if currentImage?.caption}
					<div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-gray-900 to-transparent">
						<p class="text-white text-sm">{currentImage.caption}</p>
					</div>
				{/if}
			</div>

			<!-- Thumbnail Strip -->
			{#if trip.gallery && trip.gallery.length > 1}
				<div class="bg-gray-800/30 p-3 overflow-x-auto flex gap-2 border-t border-gray-700">
					{#each trip.gallery as image, idx}
						<button
							onclick={() => {
								currentImageIndex = idx;
							}}
							class="shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all {currentImageIndex === idx ? 'border-orange-400' : 'border-gray-700 hover:border-gray-600'}"
						>
							<img src={image.url} alt={`Thumbnail ${idx + 1}`} class="w-full h-full object-cover" />
						</button>
					{/each}
				</div>
			{/if}
		</div>
	{:else}
		<!-- Fallback Image -->
		<div class="aspect-video bg-gray-800 relative overflow-hidden">
			<img
				src={trip.image}
				alt={trip.name}
				class="w-full h-full object-cover"
				onerror={(e) => {
					const target = e.target as HTMLImageElement;
					target.style.display = 'none';
				}}
			/>
			<div class="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>
		</div>
	{/if}

	<!-- Content Section -->
	<div class="p-6 md:p-8">
		<!-- Header -->
		<div class="mb-6">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-2">{trip.name}</h2>
			<p class="text-orange-400 font-mono text-sm">{trip.location} • {trip.year}</p>
		</div>

		<!-- Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
			{#each Object.entries(trip.stats) as [key, value]}
				<div class="px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700">
					<p class="text-gray-500 text-xs uppercase tracking-widest">{key}</p>
					<p class="text-white font-medium text-sm mt-1">{value}</p>
				</div>
			{/each}
		</div>

		<!-- Story Long (if available) -->
		{#if hasStoryLong}
			<div class="mb-8">
				{#each trip.story_long as paragraph}
					<p class="text-gray-300 leading-relaxed mb-4">{paragraph}</p>
				{/each}
			</div>
		{:else}
			<!-- Fallback Story -->
			<p class="text-gray-300 leading-relaxed mb-8">{trip.story}</p>
		{/if}

		<!-- Highlights -->
		{#if hasHighlights}
			<div class="mb-8 p-4 bg-orange-900/10 border border-orange-800/30 rounded-xl">
				<h3 class="text-orange-300 font-semibold mb-3 text-sm uppercase tracking-widest">Highlights</h3>
				<ul class="space-y-2">
					{#each trip.highlights as highlight}
						<li class="text-gray-300 text-sm flex items-start gap-3">
							<span class="text-orange-400 mt-1">✓</span>
							<span>{highlight}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Tags -->
		<div class="flex flex-wrap gap-2">
			{#each trip.tags as tag}
				<span class="px-3 py-1 bg-orange-900/20 border border-orange-800/30 rounded-full text-orange-300 text-sm">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</div>
