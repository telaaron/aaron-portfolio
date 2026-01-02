<script lang="ts">
	import { getBewegung } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import { onMount } from 'svelte';
	import { 
		sectionTitleReveal,
		perspectiveEntrance,
		ensureGSAP,
		cleanupScrollTriggers 
	} from '$lib/utils/animations';

	let translations = $derived(t($language));
	let content = $derived(getBewegung($language));

	// Element refs
	let titleRef = $state<HTMLElement | null>(null);
	let cardsRef = $state<HTMLElement | null>(null);

	onMount(() => {
		setTimeout(async () => {
			const { gsap, ScrollTrigger } = await ensureGSAP();
			if (!gsap) return;
			
			// Section label
			const label = document.querySelector('#bewegung .section-label');
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
			
			// Philosophy text
			const philText = document.querySelector('#bewegung .philosophy-text');
			if (philText) {
				gsap.fromTo(philText,
					{ opacity: 0, y: 25 },
					{
						opacity: 1,
						y: 0,
						ease: 'none',
						scrollTrigger: {
							trigger: philText,
							start: 'top 95%',
							end: 'top 70%',
							scrub: 1
						}
					}
				);
			}
			
			// Premium 3D perspective entrance for each card - EARLIER
			if (cardsRef) {
				const cards = cardsRef.querySelectorAll('.activity-card');
				gsap.fromTo(cards,
					{ opacity: 0, y: 80, rotateX: 15, transformPerspective: 1000, filter: 'blur(4px)' },
					{
						opacity: 1,
						y: 0,
						rotateX: 0,
						filter: 'blur(0px)',
						stagger: 0.08,
						ease: 'none',
						scrollTrigger: {
							trigger: cardsRef,
							start: 'top 100%',
							end: 'top 40%',
							scrub: 1
						}
					}
				);
			}
		}, 100);

		return () => cleanupScrollTriggers();
	});
</script>

<section id="bewegung" class="py-24 px-4 md:px-8 bg-deep-black relative overflow-hidden">
	<!-- Gradient accent -->
	<div class="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-cyan-500/5 to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header with GSAP -->
		<div class="mb-16">
			<p class="section-label opacity-0 text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.bewegung.sectionLabel}</p>
			<h2 bind:this={titleRef} class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.bewegung.tagline}</h2>
			<p class="philosophy-text opacity-0 text-gray-400">Nach dem <span class="text-cyan-400 font-mono">{translations.bewegung.philosophy}</span></p>
		</div>

		<!-- Activities grid with alternating slide-in -->
		<div bind:this={cardsRef} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each content.activities as activity, i}
				<div
					class="activity-card opacity-0 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-cyan-500/50 hover:bg-gray-900 transition-all duration-300 group hover:scale-[1.02]"
				>
					<!-- Header -->
					<div class="flex items-start justify-between mb-4">
						<span class="text-4xl group-hover:scale-110 transition-transform duration-300">{activity.icon}</span>
						<span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 font-mono group-hover:bg-cyan-900/30 group-hover:text-cyan-400 transition-colors">
							{activity.frequency}
						</span>
					</div>

					<!-- Title & Description -->
					<h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{activity.name}</h3>
					<p class="text-gray-400 text-sm mb-4">{activity.description}</p>

					<!-- Image (if available) -->
					{#if activity.image}
						<div class="mb-4 rounded-lg overflow-hidden">
							<img src={activity.image} alt={activity.name} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
						</div>
					{/if}

					<!-- Details -->
					{#if activity.details}
						<div class="space-y-2 pt-4 border-t border-gray-800">
							{#each activity.details as detail}
								<div class="flex items-center gap-2 text-sm">
									<span class="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></span>
									<span class="text-gray-300">{detail}</span>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
