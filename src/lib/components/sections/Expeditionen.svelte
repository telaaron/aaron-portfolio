<script lang="ts">
	import { getExpeditionen } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import TripDetail from './TripDetail.svelte';

	let translations = $derived(t($language));
	let content = $derived(getExpeditionen($language));

	let isVisible = $state(false);
	let selectedTrip = $state<string | null>(null);

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

		const section = document.getElementById('expeditionen');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});

	function selectTrip(id: string) {
		selectedTrip = selectedTrip === id ? null : id;
	}

	$effect(() => {
		// Auto-select first trip after visible
		if (isVisible && !selectedTrip) {
			setTimeout(() => {
				selectedTrip = content.trips[0]?.id ?? null;
			}, 800);
		}
	});

	const currentTrip = $derived(content.trips.find(t => t.id === selectedTrip));
</script>

<section id="expeditionen" class="py-24 px-4 md:px-8 bg-gray-900/20 relative overflow-hidden">
	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700">
			<p class="text-orange-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.expeditionen.sectionLabel}</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.expeditionen.tagline}</h2>
		</div>

		<div class="grid lg:grid-cols-3 gap-8">
			<!-- Trip list -->
			<div class="lg:col-span-1 {isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700 delay-200">
				<div class="space-y-3">
					{#each content.trips as trip, i}
						<button
							onclick={() => selectTrip(trip.id)}
							class="w-full text-left p-4 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-300 group {selectedTrip === trip.id ? 'border-orange-500 bg-orange-900/10' : 'hover:border-gray-700'}"
							style="animation-delay: {i * 100}ms"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-white font-medium group-hover:text-orange-300 transition-colors {selectedTrip === trip.id ? 'text-orange-300' : ''}">
										{trip.name}
									</p>
									<p class="text-gray-500 text-sm">{trip.location} • {trip.year}</p>
								</div>
								<span class="text-gray-600 group-hover:text-orange-400 transition-colors {selectedTrip === trip.id ? 'text-orange-400' : ''}">
									→
								</span>
							</div>
						</button>
					{/each}
				</div>

				<!-- Planned trips -->
				<div class="mt-8 pt-8 border-t border-gray-800">
					<p class="text-gray-500 text-xs uppercase tracking-widest mb-4">{translations.expeditionen.planned}</p>
					<div class="space-y-2">
						{#each content.planned as plan}
							<p class="text-gray-400 text-sm flex items-center gap-2">
								<span class="text-orange-400">○</span>
								{plan}
							</p>
						{/each}
					</div>
				</div>
			</div>

			<!-- Trip detail -->
			<div class="lg:col-span-2 {isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700 delay-400">
				{#if currentTrip}
					<TripDetail trip={currentTrip} />
				{:else}
					<div class="h-full flex items-center justify-center bg-gray-900/30 border border-gray-800 rounded-2xl min-h-96">
						<p class="text-gray-500">{translations.expeditionen.selectTrip}</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
