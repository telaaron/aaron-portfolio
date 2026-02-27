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
				gsap.fromTo(
					label,
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
				gsap.fromTo(
					philText,
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
				gsap.fromTo(
					cards,
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

<section id="bewegung" class="relative overflow-hidden bg-deep-black px-4 py-24 md:px-8">
	<!-- Gradient accent -->
	<div
		class="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-linear-to-r from-cyan-500/5 to-transparent"
	></div>

	<div class="relative z-10 container mx-auto max-w-6xl">
		<!-- Section header with GSAP -->
		<div class="mb-16">
			<p
				class="section-label mb-2 font-mono text-sm tracking-widest text-cyan-400 uppercase opacity-0"
			>
				{translations.bewegung.sectionLabel}
			</p>
			<h2 bind:this={titleRef} class="mb-4 text-4xl font-bold text-white md:text-5xl">
				{translations.bewegung.tagline}
			</h2>
			<p class="philosophy-text text-gray-400 opacity-0">
				Nach dem <span class="font-mono text-cyan-400">{translations.bewegung.philosophy}</span>
			</p>
		</div>

		<!-- Activities grid with alternating slide-in -->
		<div bind:this={cardsRef} class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each content.activities as activity, i}
				<div
					class="activity-card group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 opacity-0 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50 hover:bg-gray-900"
				>
					<!-- Header -->
					<div class="mb-4 flex items-start justify-between">
						<span class="text-4xl transition-transform duration-300 group-hover:scale-110"
							>{activity.icon}</span
						>
						<span
							class="rounded bg-gray-800 px-2 py-1 font-mono text-xs text-gray-400 transition-colors group-hover:bg-cyan-900/30 group-hover:text-cyan-400"
						>
							{activity.frequency}
						</span>
					</div>

					<!-- Title & Description -->
					<h3 class="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
						{activity.name}
					</h3>
					<p class="mb-4 text-sm text-gray-400">{activity.description}</p>

					<!-- Image (if available) -->
					{#if activity.image}
						{#if activity.imageStyle === 'portrait-feature'}
							<div class="mb-4 overflow-hidden rounded-lg border border-cyan-900/40 bg-black/40">
								<div class="relative h-64">
									<img
										src={activity.image}
										alt=""
										aria-hidden="true"
										class="absolute inset-0 h-full w-full scale-115 object-cover object-center opacity-30 blur-xl"
									/>
									<div
										class="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30"
									></div>
									<div class="relative z-10 flex h-full items-center justify-center px-3">
										<img
											src={activity.image}
											alt={activity.name}
											class="h-full w-auto max-w-[78%] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
										/>
									</div>
								</div>
							</div>
						{:else}
							<div class="mb-4 overflow-hidden rounded-lg border border-gray-800/60 bg-gray-900/60">
								<div class="relative h-48">
									<img
										src={activity.image}
										alt=""
										aria-hidden="true"
										class="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-md"
									/>
									<div
										class="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/20"
									></div>
									<img
										src={activity.image}
										alt={activity.name}
										class="relative z-10 h-full w-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.02]"
									/>
								</div>
							</div>
						{/if}
					{/if}

					<!-- Details -->
					{#if activity.details}
						<div class="space-y-2 border-t border-gray-800 pt-4">
							{#each activity.details as detail}
								<div class="flex items-center gap-2 text-sm">
									<span
										class="h-1.5 w-1.5 rounded-full bg-cyan-400 transition-transform group-hover:scale-125"
									></span>
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
