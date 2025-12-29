<script lang="ts">
	import { manifestorMethod } from '$lib/utils/constants';
	import TiltCard from '$lib/components/ui/TiltCard.svelte';

	let isVisible = $state(false);

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

		const section = document.getElementById('manifestor');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});
</script>

<section id="manifestor" class="py-24 px-4 md:px-8 bg-deep-black relative overflow-hidden">
	<!-- Background accent -->
	<div class="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-electric-blue/5 to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700">
			<p class="text-orange-400 font-mono text-sm tracking-widest uppercase mb-2">The Manifestor Method</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{manifestorMethod.tagline}</h2>
			<p class="text-gray-400 text-lg max-w-2xl">
				{manifestorMethod.description}
			</p>
			<p class="text-orange-300 text-sm mt-4 font-mono italic">
				{manifestorMethod.philosophy}
			</p>
		</div>

		<!-- Process visualization -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-200">
			<div class="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-base">
				<span class="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">Impuls</span>
				<span class="text-orange-400">→</span>
				<span class="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">Konzept</span>
				<span class="text-orange-400">→</span>
				<span class="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">Design</span>
				<span class="text-orange-400">→</span>
				<span class="px-4 py-2 bg-orange-900/20 border border-orange-600 rounded-lg text-orange-400 font-semibold">AI baut</span>
				<span class="text-orange-400">→</span>
				<span class="px-4 py-2 bg-green-900/30 border border-green-600 rounded-lg text-green-400">Realität</span>
			</div>
		</div>

		<!-- Tools -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300">
			<p class="text-gray-500 text-sm uppercase tracking-widest mb-4 text-center">Werkzeuge</p>
			<div class="flex flex-wrap justify-center gap-3">
				{#each manifestorMethod.tools as tool}
					<span class="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full text-gray-400 text-sm font-mono">
						{tool}
					</span>
				{/each}
			</div>
		</div>

		<!-- Projects -->
		<div class="grid md:grid-cols-2 gap-6 md:auto-rows-fr {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-500">
			{#each manifestorMethod.projects as project, i}
				<TiltCard>
					<div class="h-full bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 transition-colors group overflow-hidden flex flex-col min-h-175">
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
								<span class="text-xs font-mono uppercase tracking-widest text-orange-400">{project.origin}</span>
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
								<p class="text-gray-500 text-sm mb-6">{project.longDescription}</p>
							{/if}
							{#if project.features}
								<div class="mb-6 flex-1">
									<p class="text-xs font-mono uppercase tracking-widest text-orange-300 mb-2">Features</p>
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

		<!-- Lifestyle Projects (smaller) -->
		{#if manifestorMethod.lifestyle.length > 0}
			<div class="mt-12 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-700">
				<p class="text-gray-500 text-sm uppercase tracking-widest mb-4">Lifestyle Tech</p>
				<div class="flex flex-wrap gap-4">
					{#each manifestorMethod.lifestyle as item}
						<div class="px-4 py-3 bg-gray-900/30 border border-gray-800 rounded-xl">
							<p class="text-white font-medium">{item.name}</p>
							<p class="text-gray-500 text-sm">{item.description}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
