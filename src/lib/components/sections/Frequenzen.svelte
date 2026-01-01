<script lang="ts">
	import { getFrequenzen } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import Lightbox from '$lib/components/ui/Lightbox.svelte';
	import YouTubeEmbed from '$lib/components/ui/YouTubeEmbed.svelte';

	let isVisible = $state(false);
	let activeEnsemble = $state<number | null>(null);
	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);
	let galleryExpanded = $state(false);
	let translations = $derived(t($language));
	let content = $derived(getFrequenzen($language));

	// Show only first 4 media items (videos + images) initially
	const initialMediaCount = 4;
	const videoCount = $derived(content.videos?.length || 0);
	const visibleGalleryCount = $derived(Math.max(0, initialMediaCount - videoCount));
	const visibleGallery = $derived(
		galleryExpanded 
			? content.gallery 
			: content.gallery?.slice(0, visibleGalleryCount) || []
	);

	function openLightbox(index: number) {
		lightboxIndex = index;
		lightboxOpen = true;
	}

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		const section = document.getElementById('frequenzen');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});

	// Instrument icons - works for both DE and EN
	const instrumentIcons: Record<string, string> = {
		Bassposaune: '🎺',
		'Bass Trombone': '🎺',
		Posaune: '🎺',
		Trombone: '🎺',
		Klavier: '🎹',
		Piano: '🎹'
	};
</script>

<section id="frequenzen" class="py-24 px-4 md:px-8 bg-gray-900/30 relative overflow-hidden">
	<!-- Musical wave decoration -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-deep-black to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700">
			<p class="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.frequenzen.sectionLabel}</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.frequenzen.tagline}</h2>
		</div>

		<!-- Ensembles grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-200">
			{#each content.ensembles as ensemble, i}
				<button
					class="p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-left hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 group {activeEnsemble === i ? 'border-purple-500 bg-purple-900/10' : ''}"
					onmouseenter={() => activeEnsemble = i}
					onmouseleave={() => activeEnsemble = null}
				>
					<span class="text-2xl mb-2 block">{instrumentIcons[ensemble.instrument] || '🎵'}</span>
					<p class="text-white font-medium text-sm md:text-base mb-1 group-hover:text-purple-300 transition-colors">{ensemble.name}</p>
					<p class="text-gray-500 text-xs md:text-sm">{ensemble.instrument}</p>
					<p class="text-purple-400/60 text-xs mt-2">{ensemble.type}</p>
				</button>
			{/each}
		</div>

		<!-- Highlights -->
		<div class="mb-12 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-400">
			<div class="flex flex-wrap gap-3 justify-center">
				{#each content.highlights as highlight}
					<span class="px-4 py-2 bg-purple-900/20 border border-purple-800/30 rounded-full text-purple-300 text-sm">
						{highlight}
					</span>
				{/each}
			</div>
		</div>

		<!-- YouTube Videos -->
		{#if content.youtubeVideos.length > 0}
			<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-500">
				<p class="text-gray-500 text-sm uppercase tracking-widest mb-6 text-center">{translations.frequenzen.recordings}</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
					{#each content.youtubeVideos as video}
						<YouTubeEmbed 
							videoId={video.url} 
							title="{video.title} ({video.year})" 
						/>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Photo Gallery -->
		{#if content.gallery && content.gallery.length > 0}
			<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-600">
				<p class="text-gray-500 text-sm uppercase tracking-widest mb-6 text-center">{translations.frequenzen.moments}</p>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{#if content.videos && content.videos.length > 0}
						{#each content.videos as video, i}
							<div class="aspect-square bg-gray-800 rounded-xl overflow-hidden group">
								<video 
									src={video} 
									controls
									class="w-full h-full object-cover"
								>
									<track kind="captions" />
								</video>
							</div>
						{/each}
					{/if}
					{#each visibleGallery as image, i}
						<button 
							class="aspect-square bg-gray-800 rounded-xl overflow-hidden group cursor-pointer border-0 p-0"
							onclick={() => openLightbox(i)}
						>
							<img 
								src={image} 
								alt="Galerie-Moment"
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
						</button>
					{/each}
				</div>
				
				<!-- Expand/Collapse Button -->
				{#if content.gallery.length > visibleGalleryCount}
					<div class="text-center mt-6">
						<button
							onclick={() => galleryExpanded = !galleryExpanded}
							class="px-6 py-3 bg-purple-900/20 border border-purple-800/30 rounded-full text-purple-300 text-sm hover:bg-purple-900/30 hover:border-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto"
						>
							{#if galleryExpanded}
								<span>{$language === 'de' ? 'Weniger anzeigen' : 'Show less'}</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="m18 15-6-6-6 6"/>
								</svg>
							{:else}
								<span>{$language === 'de' ? `+${content.gallery.length - visibleGalleryCount} weitere Momente` : `+${content.gallery.length - visibleGalleryCount} more moments`}</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="m6 9 6 6 6-6"/>
								</svg>
							{/if}
						</button>
					</div>
				{/if}
			</div>
		{/if}
	</div>

	<!-- Lightbox -->
	<Lightbox 
		images={content.gallery || []} 
		bind:currentIndex={lightboxIndex} 
		bind:isOpen={lightboxOpen} 
	/>
</section>
