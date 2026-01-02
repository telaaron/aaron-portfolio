<script lang="ts">
	import { getExpeditionen } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import TripDetail from './TripDetail.svelte';
	import { onMount } from 'svelte';
	import { 
		sectionTitleReveal,
		ensureGSAP,
		cleanupScrollTriggers 
	} from '$lib/utils/animations';

	let translations = $derived(t($language));
	let content = $derived(getExpeditionen($language));

	let selectedTrip = $state<string | null>(null);
	
	// Element refs
	let titleRef = $state<HTMLElement | null>(null);
	let tripListRef = $state<HTMLElement | null>(null);
	let tripDetailRef = $state<HTMLElement | null>(null);

	onMount(() => {
		setTimeout(async () => {
			const { gsap, ScrollTrigger } = await ensureGSAP();
			if (!gsap) return;
			
			// Section label
			const label = document.querySelector('#expeditionen .section-label');
			if (label) {
				gsap.fromTo(label,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						ease: 'none',
						scrollTrigger: {
							trigger: label,
							start: 'top 98%',
							end: 'top 75%',
							scrub: 1
						}
					}
				);
			}
			
			if (titleRef) await sectionTitleReveal(titleRef);
			
			// Premium staggered slide with blur - EARLIER trigger
			if (tripListRef) {
				const buttons = tripListRef.querySelectorAll('.trip-btn');
				gsap.fromTo(buttons,
					{ opacity: 0, x: -60, filter: 'blur(6px)', rotation: -2 },
					{
						opacity: 1,
						x: 0,
						filter: 'blur(0px)',
						rotation: 0,
						stagger: 0.08,
						ease: 'none',
						scrollTrigger: {
							trigger: tripListRef,
							start: 'top 100%',
							end: 'top 55%',
							scrub: 1
						}
					}
				);
			}
		}, 100);

		// Auto-select first trip after animations
		setTimeout(() => {
			selectedTrip = content.trips[0]?.id ?? null;
		}, 800);

		return () => cleanupScrollTriggers();
	});

	function selectTrip(id: string) {
		selectedTrip = selectedTrip === id ? null : id;
	}

	const currentTrip = $derived(content.trips.find(t => t.id === selectedTrip));
</script>

<section id="expeditionen" class="py-24 px-4 md:px-8 bg-gray-900/20 relative overflow-hidden">
	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header with GSAP -->
		<div class="mb-16">
			<p class="section-label opacity-0 text-orange-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.expeditionen.sectionLabel}</p>
			<h2 bind:this={titleRef} class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.expeditionen.tagline}</h2>
		</div>

		<div class="grid lg:grid-cols-3 gap-8">
			<!-- Trip list with slide-in from left -->
			<div bind:this={tripListRef} class="lg:col-span-1">
				<div class="space-y-3">
					{#each content.trips as trip, i}
						<button
							onclick={() => selectTrip(trip.id)}
							class="trip-btn opacity-0 w-full text-left p-4 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-300 group hover:scale-[1.02] {selectedTrip === trip.id ? 'border-orange-500 bg-orange-900/10' : 'hover:border-gray-700'}"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-white font-medium group-hover:text-orange-300 transition-colors {selectedTrip === trip.id ? 'text-orange-300' : ''}">
										{trip.name}
									</p>
									<p class="text-gray-500 text-sm">{trip.location} • {trip.year}</p>
								</div>
								<span class="text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all {selectedTrip === trip.id ? 'text-orange-400' : ''}">
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
							{#if typeof plan === 'string'}
								<p class="text-gray-400 text-sm flex items-center gap-2">
									<span class="text-orange-400">○</span>
									{plan}
								</p>
							{:else}
								<div class="p-3 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-orange-500/30 transition-colors">
									<div class="flex items-center justify-between">
										<div>
											<p class="text-gray-300 font-medium text-sm">{plan.name}</p>
											<p class="text-gray-500 text-xs">{plan.location} • {plan.year}</p>
										</div>
										<span class="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">{plan.status}</span>
									</div>
									<p class="text-gray-400 text-xs mt-2">{plan.teaser}</p>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>

			<!-- Trip detail with mask reveal -->
			<div bind:this={tripDetailRef} class="lg:col-span-2">
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
