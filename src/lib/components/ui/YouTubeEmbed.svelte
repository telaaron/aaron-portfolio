<script lang="ts">
	let { 
		videoId,
		title = 'YouTube Video'
	}: { 
		videoId: string; 
		title?: string;
	} = $props();

	let showEmbed = $state(false);

	// Extract video ID from various YouTube URL formats
	function extractVideoId(url: string): string {
		// Already an ID
		if (!url.includes('/') && !url.includes('.')) return url;
		
		// youtu.be short URL
		const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
		if (shortMatch) return shortMatch[1];
		
		// youtube.com/watch?v= URL
		const watchMatch = url.match(/[?&]v=([^&]+)/);
		if (watchMatch) return watchMatch[1];
		
		// youtube.com/embed/ URL
		const embedMatch = url.match(/embed\/([^?&]+)/);
		if (embedMatch) return embedMatch[1];
		
		return url;
	}

	const actualVideoId = $derived(extractVideoId(videoId));
	const thumbnailUrl = $derived(`https://img.youtube.com/vi/${actualVideoId}/maxresdefault.jpg`);
</script>

<div class="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group">
	{#if showEmbed}
		<iframe
			src="https://www.youtube-nocookie.com/embed/{actualVideoId}?autoplay=1&rel=0"
			title={title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			class="w-full h-full"
		></iframe>
	{:else}
		<button
			onclick={() => showEmbed = true}
			class="w-full h-full relative cursor-pointer border-0 p-0"
			aria-label="Play {title}"
		>
			<!-- Thumbnail -->
			<img 
				src={thumbnailUrl}
				alt={title}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				loading="lazy"
			/>
			
			<!-- Dark overlay -->
			<div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
			
			<!-- Play button -->
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 transition-all shadow-lg shadow-red-600/30">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
						<path d="m10 8 6 4-6 4V8z"/>
					</svg>
				</div>
			</div>
			
			<!-- Title overlay at bottom -->
			<div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
				<p class="text-white font-medium text-left">{title}</p>
			</div>
		</button>
	{/if}
</div>
