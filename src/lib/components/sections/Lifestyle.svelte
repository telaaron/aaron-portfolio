<script lang="ts">
	import { getLifestyle } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import { Home, Video, Users, Bitcoin, Anchor } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { 
		sectionTitleReveal,
		staggerRotateReveal,
		cleanupScrollTriggers 
	} from '$lib/utils/animations';

	let translations = $derived(t($language));
	let content = $derived(getLifestyle($language));

	// Element refs
	let titleRef = $state<HTMLElement | null>(null);
	let hobbiesRef = $state<HTMLElement | null>(null);

	onMount(() => {
		setTimeout(async () => {
			// Section label
			const { gsap } = await import('gsap');
			const label = document.querySelector('#lifestyle .section-label');
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
			// Premium rotation stagger reveal
			if (hobbiesRef) await staggerRotateReveal(hobbiesRef, '.hobby-card', { stagger: 0.1, rotation: 5 });
		}, 100);

		return () => cleanupScrollTriggers();
	});

	const iconMap: Record<string, any> = {
		Home,
		Video,
		Users,
		Bitcoin,
		Anchor
	};
</script>

<section id="lifestyle" class="py-24 px-4 md:px-8 bg-deep-black relative overflow-hidden">
	<!-- Gradient accent -->
	<div class="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-500/5 to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header with GSAP -->
		<div class="mb-16">
			<p class="section-label opacity-0 text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.lifestyle.sectionLabel}</p>
			<h2 bind:this={titleRef} class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.lifestyle.tagline}</h2>
		</div>

		<!-- Hobbies grid with stagger -->
		<div bind:this={hobbiesRef} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each content.hobbies as hobby, i}
				{@const IconComponent = iconMap[hobby.icon]}
				<div
					class="hobby-card opacity-0 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group hover:scale-[1.02] hover:bg-gray-900"
				>
					<!-- Icon & Title -->
					<div class="flex items-center gap-4 mb-4">
						<div class="w-12 h-12 bg-blue-900/20 border border-blue-800/30 rounded-xl flex items-center justify-center group-hover:bg-blue-900/30 group-hover:scale-110 transition-all duration-300">
							<IconComponent class="w-6 h-6 text-blue-400" />
						</div>
						<h3 class="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{hobby.name}</h3>
					</div>

					<!-- Description -->
					<p class="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{hobby.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
