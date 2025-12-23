<script lang="ts">
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
</script>

<section id="projects" class="featured-projects py-24 px-4 md:px-8">
	<div class="max-w-7xl mx-auto">
		<h2 class="section-title mb-16 reveal">Featured Work</h2>

		<div class="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
			<!-- Card 1: Marathon (Large 2x2) -->
			<TiltCard class="lg:col-span-2 lg:row-span-2">
				<div class="bento-card h-full min-h-100 lg:min-h-125 relative overflow-hidden rounded-2xl bg-gray-900 group">
					<div class="absolute inset-0 bg-linear-to-t from-deep-black via-deep-black/50 to-transparent z-10"></div>
					<div
						class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/marathon-finish.jpg')"
					></div>
					<div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
						<span class="badge mb-3">Endurance</span>
						<h3 class="text-2xl md:text-3xl font-bold mb-2">Marathon Berlin 2024</h3>
						<p class="text-gray-300 font-mono">42.2km | 3:45:23 | First Marathon</p>
					</div>
				</div>
			</TiltCard>

			<!-- Card 2: MustSeen -->
			<TiltCard>
				<a href="https://must-seen.com" target="_blank" rel="noopener noreferrer" class="block h-full">
					<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-linear-to-br from-electric-blue/20 to-gray-900 border border-gray-800 group p-6 flex flex-col justify-between">
						<div class="text-electric-blue text-4xl mb-4">🌍</div>
						<div>
							<h3 class="text-xl font-bold mb-2">MustSeen</h3>
							<p class="text-gray-300 text-sm mb-3">The Ground Truth Engine for AI Travel</p>
							<span class="text-electric-blue text-sm group-hover:underline">Visit →</span>
						</div>
					</div>
				</a>
			</TiltCard>

			<!-- Card 3: Jazz Piano -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-gray-900 group">
					<div class="absolute inset-0 bg-linear-to-t from-deep-black via-deep-black/70 to-transparent z-10"></div>
					<div
						class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/piano-hands.jpg')"
					></div>
					<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
						<h3 class="text-xl font-bold mb-1">Jazz Piano</h3>
						<p class="text-gray-300 text-sm">Performance & Teaching</p>
					</div>
				</div>
			</TiltCard>

			<!-- Card 4: Spiritual Companion -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-900/30 to-gray-900 border border-gray-800 p-6 flex flex-col justify-between">
					<div class="text-4xl mb-4">✨</div>
					<div>
						<h3 class="text-xl font-bold mb-2">Spiritual Companion</h3>
						<p class="text-gray-300 text-sm">Faith meets Technology</p>
						<span class="text-gray-500 text-xs mt-2 block">Coming Soon</span>
					</div>
				</div>
			</TiltCard>

			<!-- Card 5: GR20 -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-gray-900 group">
					<div class="absolute inset-0 bg-linear-to-t from-deep-black via-deep-black/70 to-transparent z-10"></div>
					<div
						class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/gr20-summit.jpg')"
					></div>
					<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
						<span class="badge mb-2">Trek</span>
						<h3 class="text-xl font-bold mb-1">GR20 Corsica</h3>
						<p class="text-gray-300 text-sm font-mono">180km | Europe's toughest</p>
					</div>
				</div>
			</TiltCard>

			<!-- Card 6: Tech Stack -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6">
					<h3 class="text-xl font-bold mb-4">Tech Stack</h3>
					<div class="grid grid-cols-4 gap-3">
						{#each ['🐍', '📘', '🔥', '🐳', '⚡', '▲', '🐙', '🎨'] as icon}
							<div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xl hover:bg-electric-blue/20 transition-colors">
								{icon}
							</div>
						{/each}
					</div>
				</div>
			</TiltCard>
		</div>
	</div>
</section>