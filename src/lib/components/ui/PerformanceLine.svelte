<script lang="ts">
	import { onMount } from 'svelte';
	import { enduranceEvents } from '$lib/utils/constants';

	let showTooltip = $state<string | null>(null);
	let lineAnimated = $state(false);

	onMount(() => {
		// Trigger line animation after component mounts
		setTimeout(() => {
			lineAnimated = true;
		}, 100);
	});
</script>

<div class="performance-line-container fixed top-0 left-0 w-full z-50 bg-deep-black/90 backdrop-blur-sm py-3 border-b border-gray-800/50">
	<div class="relative w-full h-6 max-w-7xl mx-auto px-8">
		<!-- Base Line -->
		<div class="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-800 -translate-y-1/2"></div>

		<!-- Animated Progress Line -->
		<div
			class="absolute top-1/2 left-8 h-0.5 bg-electric-blue -translate-y-1/2 transition-all duration-3000 ease-out"
			style="width: {lineAnimated ? 'calc(100% - 4rem)' : '0%'}"
		></div>

		<!-- Checkpoints -->
		{#each enduranceEvents as event, i}
			{@const position = ((i + 1) / enduranceEvents.length) * 100}
			<button
				class="checkpoint absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-electric-blue hover:scale-150 transition-all duration-300 opacity-0 cursor-pointer z-10"
				style="left: calc({position}% - 1rem); animation: fadeInCheckpoint 0.5s ease forwards; animation-delay: {1 + i * 0.5}s"
				onmouseenter={() => (showTooltip = event.id)}
				onmouseleave={() => (showTooltip = null)}
			>
				<!-- Tooltip -->
				{#if showTooltip === event.id}
					<div
						class="tooltip absolute top-8 left-1/2 -translate-x-1/2 bg-gray-900 px-4 py-3 rounded-lg whitespace-nowrap text-sm shadow-xl border border-gray-700 z-20"
					>
						<p class="font-semibold text-white">{event.name} {event.year}</p>
						<p class="text-gray-400 text-xs mt-1">{event.stats[0]?.value} | {event.description}</p>
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	@keyframes fadeInCheckpoint {
		to {
			opacity: 1;
		}
	}

	.tooltip::before {
		content: '';
		position: absolute;
		top: -6px;
		left: 50%;
		transform: translateX(-50%);
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 6px solid #2a2a2a;
	}
</style>