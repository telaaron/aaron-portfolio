<script lang="ts">
	import { enduranceEvents } from '$lib/utils/constants';

	let container: HTMLDivElement;
</script>

<section id="endurance" class="endurance-log py-24 bg-gray-900/50">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<h2 class="section-title mb-12 reveal">Endurance Log</h2>

		<div
			bind:this={container}
			class="timeline-container overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
		>
			<div class="timeline-track flex gap-6 md:gap-8" style="width: max-content;">
				{#each enduranceEvents as event}
					<div
						class="timeline-card min-w-80 max-w-80 md:min-w-100 md:max-w-100 bg-gray-800 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group"
					>
						<!-- Card Image -->
						<div class="card-image w-full h-48 md:h-64 overflow-hidden relative">
							<div
								class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
								style="background-image: url('{event.image}')"
							></div>
							<div class="absolute inset-0 bg-linear-to-t from-gray-800 to-transparent"></div>
						</div>

						<!-- Card Stats -->
						<div class="card-stats p-5 md:p-6">
							<h3 class="text-xl md:text-2xl font-bold mb-1">{event.name}</h3>
							<p class="text-gray-400 text-sm mb-4 font-mono">{event.date}</p>

							<div class="stats-grid grid grid-cols-2 gap-3 md:gap-4">
								{#each event.stats as stat}
									<div class="stat">
										<span class="label text-xs text-gray-400 uppercase tracking-wider block">
											{stat.label}
										</span>
										<span class="value text-lg md:text-xl font-bold font-mono text-white">
											{stat.value}
										</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Scroll Hint -->
		<div class="scroll-hint text-center mt-6 text-gray-500 text-sm font-mono md:hidden">
			← Swipe to explore →
		</div>
	</div>
</section>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>