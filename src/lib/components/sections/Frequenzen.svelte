<script lang="ts">
	import { frequenzen } from '$lib/utils/constants';

	let isVisible = $state(false);
	let activeEnsemble = $state<number | null>(null);

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

	// Instrument icons
	const instrumentIcons: Record<string, string> = {
		Bassposaune: '🎺',
		Posaune: '🎺',
		Klavier: '🎹'
	};
</script>

<section id="frequenzen" class="py-24 px-4 md:px-8 bg-gray-900/30 relative overflow-hidden">
	<!-- Musical wave decoration -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-deep-black to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700">
			<p class="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">Frequenzen</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{frequenzen.tagline}</h2>
		</div>

		<!-- Ensembles grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-200">
			{#each frequenzen.ensembles as ensemble, i}
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
				{#each frequenzen.highlights as highlight}
					<span class="px-4 py-2 bg-purple-900/20 border border-purple-800/30 rounded-full text-purple-300 text-sm">
						{highlight}
					</span>
				{/each}
			</div>
		</div>

		<!-- YouTube Videos -->
		{#if frequenzen.youtubeVideos.length > 0}
			<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-500">
				<p class="text-gray-500 text-sm uppercase tracking-widest mb-6 text-center">Aufnahmen</p>
				<div class="flex flex-wrap justify-center gap-4">
					{#each frequenzen.youtubeVideos as video}
						<a
							href={video.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-red-500/50 hover:bg-gray-900 transition-all"
						>
							<div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
									<path d="m10 15 5-3-5-3z"/>
								</svg>
							</div>
							<div>
								<p class="text-white font-medium">{video.title}</p>
								<p class="text-gray-500 text-sm">{video.year}</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Photo Gallery -->
		{#if frequenzen.gallery && frequenzen.gallery.length > 0}
			<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-600">
				<p class="text-gray-500 text-sm uppercase tracking-widest mb-6 text-center">Momente</p>
				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{#if frequenzen.videos && frequenzen.videos.length > 0}
						{#each frequenzen.videos as video, i}
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
					{#each frequenzen.gallery as image, i}
						<div class="aspect-square bg-gray-800 rounded-xl overflow-hidden group cursor-pointer">
							<img 
								src={image} 
								alt="Musik Moment {i + 1}"
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
