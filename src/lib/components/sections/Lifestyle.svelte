<script lang="ts">
	import { getLifestyle } from '$lib/utils/content';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import { Home, Video, Users, Bitcoin, Anchor } from 'lucide-svelte';

	let translations = $derived(t($language));
	let content = $derived(getLifestyle($language));

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

		const section = document.getElementById('lifestyle');
		if (section) observer.observe(section);

		return () => observer.disconnect();
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
		<!-- Section header -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700">
			<p class="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">{translations.lifestyle.sectionLabel}</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{translations.lifestyle.tagline}</h2>
		</div>

		<!-- Hobbies grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-200">
			{#each content.hobbies as hobby, i}
				{@const IconComponent = iconMap[hobby.icon]}
				<div
					class="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group"
					style="animation-delay: {i * 100}ms"
				>
					<!-- Icon & Title -->
					<div class="flex items-center gap-4 mb-4">
						<div class="w-12 h-12 bg-blue-900/20 border border-blue-800/30 rounded-xl flex items-center justify-center group-hover:bg-blue-900/30 transition-colors">
							<IconComponent class="w-6 h-6 text-blue-400" />
						</div>
						<h3 class="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{hobby.name}</h3>
					</div>

					<!-- Description -->
					<p class="text-gray-400 text-sm leading-relaxed">{hobby.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
