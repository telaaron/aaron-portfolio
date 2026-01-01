<script lang="ts">
	import { getBewegung } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';

	let translations = $derived(t($language));
	let content = $derived(getBewegung($language));

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

		const section = document.getElementById('bewegung');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});
</script>

<section id="bewegung" class="py-24 px-4 md:px-8 bg-deep-black relative overflow-hidden">
	<!-- Gradient accent -->
	<div class="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-cyan-500/5 to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700">
			<p class="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.bewegung.sectionLabel}</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.bewegung.tagline}</h2>
			<p class="text-gray-400">Nach dem <span class="text-cyan-400 font-mono">{translations.bewegung.philosophy}</span></p>
		</div>

		<!-- Activities grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-200">
			{#each content.activities as activity, i}
				<div
					class="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl"
					style="animation-delay: {i * 100}ms"
				>
					<!-- Header -->
					<div class="flex items-start justify-between mb-4">
						<span class="text-4xl">{activity.icon}</span>
						<span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 font-mono">
							{activity.frequency}
						</span>
					</div>

					<!-- Title & Description -->
					<h3 class="text-xl font-bold text-white mb-2">{activity.name}</h3>
					<p class="text-gray-400 text-sm mb-4">{activity.description}</p>

					<!-- Image (if available) -->
					{#if activity.image}
						<div class="mb-4 rounded-lg overflow-hidden">
							<img src={activity.image} alt={activity.name} class="w-full h-48 object-cover" />
						</div>
					{/if}

					<!-- Details -->
					{#if activity.details}
						<div class="space-y-2 pt-4 border-t border-gray-800">
							{#each activity.details as detail}
								<div class="flex items-center gap-2 text-sm">
									<span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
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
