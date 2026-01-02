<script lang="ts">
	import { getManifestorMethod } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';
	import { onMount } from 'svelte';
	import { 
		sectionTitleReveal,
		staggerRotateReveal,
		perspectiveEntrance,
		ensureGSAP,
		cleanupScrollTriggers 
	} from '$lib/utils/animations';

	let translations = $derived(t($language));
	let content = $derived(getManifestorMethod($language));
	
	// Element refs
	let sectionRef = $state<HTMLElement | null>(null);
	let titleRef = $state<HTMLElement | null>(null);
	let descRef = $state<HTMLElement | null>(null);
	let processRef = $state<HTMLElement | null>(null);
	let toolsRef = $state<HTMLElement | null>(null);
	let projectsRef = $state<HTMLElement | null>(null);
	
	onMount(() => {
		setTimeout(async () => {
			const { gsap, ScrollTrigger } = await ensureGSAP();
			if (!gsap) return;
			
			// Section label
			if (descRef) {
				const label = descRef.querySelector('.section-label');
				if (label) {
					gsap.fromTo(label,
						{ opacity: 0, y: 20 },
						{
							opacity: 1,
							y: 0,
							ease: 'none',
							scrollTrigger: {
								trigger: descRef,
								start: 'top 98%',
								end: 'top 75%',
								scrub: 1
							}
						}
					);
				}
			}
			
			if (titleRef) await sectionTitleReveal(titleRef);
			
			// Description texts with fade
			if (descRef) {
				const texts = descRef.querySelectorAll('.desc-text');
				gsap.fromTo(texts,
					{ opacity: 0, y: 30 },
					{
						opacity: 1,
						y: 0,
						stagger: 0.08,
						ease: 'none',
						scrollTrigger: {
							trigger: descRef,
							start: 'top 95%',
							end: 'top 65%',
							scrub: 1
						}
					}
				);
			}
			
			// Process flow with scale + blur entrance - EARLIER
			if (processRef) {
				const steps = processRef.querySelectorAll('.process-step');
				gsap.fromTo(steps,
					{ opacity: 0, scale: 0.85, filter: 'blur(4px)' },
					{
						opacity: 1,
						scale: 1,
						filter: 'blur(0px)',
						stagger: 0.05,
						ease: 'none',
						scrollTrigger: {
							trigger: processRef,
							start: 'top 100%',
							end: 'top 55%',
							scrub: 1
						}
					}
				);
			}
			
			// Tools with rotation stagger
			if (toolsRef) await staggerRotateReveal(toolsRef, '.tool-tag', { stagger: 0.03, rotation: 8 });
			
			// Projects with perspective entrance
			if (projectsRef) {
				const projects = projectsRef.querySelectorAll(':scope > *');
				projects.forEach(proj => perspectiveEntrance(proj as HTMLElement));
			}
		}, 100);

		return () => cleanupScrollTriggers();
	});
</script>

<section id="manifestor" bind:this={sectionRef} class="py-24 px-4 md:px-8 bg-deep-black relative overflow-hidden">
	<!-- Background accent -->
	<div class="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-electric-blue/5 to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header with GSAP reveal -->
		<div bind:this={descRef} class="mb-16">
			<p class="section-label opacity-0 text-orange-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.manifestorMethod.sectionLabel}</p>
			<h2 bind:this={titleRef} class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.manifestorMethod.tagline}</h2>
			<p class="desc-text opacity-0 text-gray-400 text-lg max-w-2xl">
				{translations.manifestorMethod.description}
			</p>
			<p class="desc-text opacity-0 text-orange-300 text-sm mt-4 font-mono italic">
				{translations.manifestorMethod.philosophy}
			</p>
		</div>

		<!-- Process visualization with staggered reveal -->
		<div bind:this={processRef} class="mb-16">
			<div class="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-base">
				<span class="process-step px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 opacity-0">Impuls</span>
				<span class="process-step text-orange-400 opacity-0">→</span>
				<span class="process-step px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 opacity-0">Konzept</span>
				<span class="process-step text-orange-400 opacity-0">→</span>
				<span class="process-step px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 opacity-0">Design</span>
				<span class="process-step text-orange-400 opacity-0">→</span>
				<span class="process-step px-4 py-2 bg-orange-900/20 border border-orange-600 rounded-lg text-orange-400 font-semibold opacity-0">AI baut</span>
				<span class="process-step text-orange-400 opacity-0">→</span>
				<span class="process-step px-4 py-2 bg-green-900/30 border border-green-600 rounded-lg text-green-400 opacity-0">Realität</span>
			</div>
		</div>

		<!-- Tools with stagger animation -->
		<div bind:this={toolsRef} class="mb-16">
			<p class="text-gray-500 text-sm uppercase tracking-widest mb-4 text-center">{translations.manifestorMethod.tools}</p>
			<div class="flex flex-wrap justify-center gap-3">
				{#each content.tools as tool}
					<span class="tool-tag px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full text-gray-400 text-sm font-mono opacity-0 hover:border-orange-400 hover:text-orange-400 transition-colors cursor-default">
						{tool}
					</span>
				{/each}
			</div>
		</div>

		<!-- Projects with 3D card reveal -->
		<div bind:this={projectsRef} class="grid md:grid-cols-2 gap-6 md:auto-rows-fr">
			{#each content.projects as project, i}
				<TiltCard>
					<div class="h-full bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 transition-colors group overflow-hidden flex flex-col md:min-h-175">
						<!-- Project Image -->
						{#if project.image}
							<div class="aspect-video bg-gray-800 overflow-hidden">
								<img 
									src={project.image} 
									alt={project.name}
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
						{/if}
						
						<div class="p-6 md:p-8 flex flex-col flex-1">
							<!-- Status badge -->
							<div class="flex items-center justify-between mb-4">
								<span class="text-xs font-mono uppercase tracking-widest text-orange-400">{translations.manifestorMethod.origin}</span>
								<span class="px-3 py-1 rounded-full text-xs font-medium {project.statusColor === 'blue' ? 'bg-orange-900/20 text-orange-400' : 'bg-green-900/30 text-green-400'}">
									{project.status}
								</span>
							</div>

							<!-- Logo + Title -->
							<div class="flex items-center gap-4 mb-4">
								{#if project.logo}
									<img 
										src={project.logo} 
										alt={project.name}
										class="w-14 h-14 object-contain shrink-0"
									/>
								{/if}
								<h3 class="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
									{project.name}
								</h3>
							</div>

							<!-- Description -->
							<p class="text-gray-400 mb-2">{project.description}</p>
							{#if project.longDescription}
								<p class="hidden md:block text-gray-500 text-sm mb-6">{project.longDescription}</p>
							{/if}
							{#if project.features}
								<div class="hidden md:block mb-6 flex-1">
									<p class="text-xs font-mono uppercase tracking-widest text-orange-300 mb-2">{translations.manifestorMethod.features}</p>
									<ul class="text-sm text-gray-400 space-y-1">
										{#each project.features.slice(0, 3) as feature}
											<li class="flex items-start gap-2">
												<span class="text-orange-400 mt-1">•</span>
												<span>{feature}</span>
											</li>
										{/each}
										{#if project.features.length > 3}
											<li class="text-gray-600 italic">+ {project.features.length - 3} more...</li>
										{/if}
									</ul>
								</div>
							{/if}

							<!-- Tech stack -->
							<div class="flex flex-wrap gap-2 mb-6">
								{#each project.tech as tech}
									<span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 font-mono">{tech}</span>
								{/each}
							</div>

							<!-- Link -->
							<a href={project.link} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-orange-400 hover:underline">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
								GitHub
							</a>
						</div>
					</div>
				</TiltCard>
			{/each}
		</div>
	</div>
</section>
