<script lang="ts">
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
</script>

<section id="projects" class="featured-projects py-24 px-4 md:px-8">
	<div class="max-w-7xl mx-auto">
		<h2 class="section-title mb-16 reveal">Featured Work</h2>

		<div class="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
			<!-- Card 1: MustSeen (Large 2x2) -->
			<TiltCard class="lg:col-span-2 lg:row-span-2">
				<a href="https://must-seen.com" target="_blank" rel="noopener noreferrer" class="block h-full">
					<div class="bento-card h-full min-h-100 lg:min-h-125 relative overflow-hidden rounded-4xl bg-gray-900 border border-gray-800 p-6 md:p-8 flex flex-col justify-between group isolate" style="transform-style: flat;">
					<div
						class="absolute -inset-6 bg-cover bg-top transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/mustseen-mockup-minimal.png')"
					></div>
					<div class="absolute inset-0 bg-linear-to-t from-[rgb(10,10,10)] via-[rgba(10,10,10,0.6)] to-transparent z-10"></div>
					<div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
					<div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
					<div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
					<div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
						<div class="relative z-20">
							<img src="/images/mustseen-logo.svg" alt="MustSeen Logo" class="h-16 w-16 mb-4" />
						</div>
						<div class="relative z-20">
							<h3 class="text-3xl md:text-4xl font-bold mb-3 text-white">MustSeen</h3>
							<p class="text-gray-300 text-lg mb-3">The Ground Truth Engine for AI Travel</p>
							<span class="text-electric-blue text-lg group-hover:underline">Visit →</span>
						</div>
					</div>
				</a>
			</TiltCard>

			<!-- Card 2: Marathon -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-gray-900 group isolate" style="transform-style: flat;">
					<div
						class="absolute -inset-4 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/marathon-finish.jpg')"
					></div>
					<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
					<div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
						<span class="badge mb-3">Endurance</span>
						<h3 class="text-2xl font-bold mb-2">Marathon 2024</h3>
						<p class="text-gray-300 font-mono">42.2km | 5:29:23</p>
					</div>
				</div>
			</TiltCard>

			<!-- Card 3: Jazz Piano -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-gray-900 group isolate" style="transform-style: flat;">
					<div
						class="absolute -inset-4 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/piano-hands.jpg')"
					></div>
					<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
					<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
						<h3 class="text-xl font-bold mb-1">Jazz Piano</h3>
						<p class="text-gray-300 text-sm">Performance & Teaching</p>
					</div>
				</div>
			</TiltCard>

			<!-- Card 4: Spiritual Companion -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-gray-900 group isolate" style="transform-style: flat;">
					<div
						class="absolute -inset-4 bg-cover bg-top transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/spiritual-companion-small.png')"
					></div>
					<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
					<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
						<h3 class="text-xl font-bold mb-1">Spiritual Companion</h3>
						<p class="text-gray-300 text-sm">AI for Faith</p>
					</div>
				</div>
			</TiltCard>

			<!-- Card 5: GR20 -->
			<TiltCard>
				<div class="bento-card h-full min-h-50 md:min-h-60 relative overflow-hidden rounded-2xl bg-gray-900 group isolate" style="transform-style: flat;">
					<div
						class="absolute -inset-4 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
						style="background-image: url('/images/gr20-summit.jpg')"
					></div>
					<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
					<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
						<span class="badge mb-2">Trek</span>
						<h3 class="text-xl font-bold mb-1">GR20 Corsica</h3>
						<p class="text-gray-300 text-sm font-mono">90km | Europe's toughest</p>
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