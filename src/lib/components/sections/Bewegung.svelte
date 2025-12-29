<script lang="ts">
	import { bewegung } from '$lib/utils/constants';

	let isVisible = $state(false);
	let expandedActivity = $state<string | null>(null);

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

	function toggleActivity(id: string) {
		expandedActivity = expandedActivity === id ? null : id;
	}
</script>

<section id="bewegung" class="py-24 px-4 md:px-8 bg-deep-black relative overflow-hidden">
	<!-- Gradient accent -->
	<div class="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-cyan-500/5 to-transparent pointer-events-none"></div>

	<div class="container max-w-6xl mx-auto relative z-10">
		<!-- Section header -->
		<div class="mb-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700">
			<p class="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">Bewegung</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{bewegung.tagline}</h2>
			<p class="text-gray-400">Nach dem <span class="text-cyan-400 font-mono">{bewegung.philosophy}</span></p>
		</div>

		<!-- Activities grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-200">
			{#each bewegung.activities as activity, i}
				{@const isExpanded = expandedActivity === activity.id}
				{@const isCalisthenics = activity.id === 'calisthenics'}
				
				<button
					class="text-left p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 {isExpanded ? 'border-cyan-500 bg-cyan-900/10 md:col-span-2 lg:col-span-1' : ''} {isCalisthenics ? 'md:row-span-2' : ''}"
					onclick={() => isCalisthenics ? null : toggleActivity(activity.id)}
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

					<!-- Details (for Calisthenics, always show; for others, show on expand) -->
					{#if activity.details && (isCalisthenics || isExpanded)}
						<div class="space-y-2 pt-4 border-t border-gray-800">
							{#each activity.details as detail}
								<div class="flex items-center gap-2 text-sm">
									<span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
									<span class="text-gray-300">{detail}</span>
								</div>
							{/each}
						</div>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Weekly routine visualization -->
		<div class="mt-16 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-500">
			<p class="text-gray-500 text-sm uppercase tracking-widest mb-6 text-center">Wochenroutine</p>
			<div class="flex justify-center gap-2">
				{#each ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] as day, i}
					{@const activities = [
						['💪'],           // Mo
						['🧗'],           // Di
						['💪'],           // Mi
						['💪'],           // Do
						['💪', '🏃'],     // Fr
						['🧊'],           // Sa
						[''],             // So - Ruhetag
					]}
					<div class="flex flex-col items-center gap-2">
						<span class="text-gray-500 text-xs">{day}</span>
						<div class="w-12 h-16 bg-gray-900/50 border border-gray-800 rounded-lg flex flex-col items-center justify-center gap-1 {activities[i].length === 0 ? 'opacity-30' : ''}">
							{#each activities[i] as emoji}
								<span class="text-lg">{emoji}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
