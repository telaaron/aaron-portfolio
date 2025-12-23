<script lang="ts">
	import { onMount } from 'svelte';
	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	const handleClose = () => {
		isVisible = false;
	};
</script>

<section class="sponsorship fixed bottom-4 right-4 z-50 max-w-sm">
	{#if isVisible}
		<div
			class="relative bg-gradient-to-br from-yellow-200 via-orange-300 to-orange-200 border-2 border-orange-500 rounded-lg p-5 shadow-lg transform transition-all duration-300 ease-out"
		>
			<!-- CLOSE button (functional) -->
			<button
				on:click={handleClose}
				class="absolute top-2 right-2 text-lg font-bold text-orange-600 hover:text-orange-800 hover:scale-125 transition-transform"
				aria-label="Close ad"
			>
				✕
			</button>

			<!-- Main content -->
			<div class="text-center pr-6">
				<p class="text-xs font-bold text-orange-600 tracking-widest uppercase mb-1">📢 Anzeige</p>
				<h2 class="text-xl font-bold text-orange-700 mb-2">
					E WEEGE HOCHBAU GMBH
				</h2>

				<div class="bg-orange-100 border border-orange-400 rounded p-2 mb-3">
					<p class="text-sm font-semibold text-orange-800 mb-1">
						🏗️ Ihr Baupartner in Lage
					</p>
					<p class="text-xs text-orange-700">Professionelle Hochbauten seit Jahren</p>
				</div>

				<div class="space-y-1 mb-3 text-xs text-orange-700">
					<p>✓ Innovative Baukonzepte</p>
					<p>✓ Zuverlässige Expertise</p>
					<p>✓ Qualität mit Leidenschaft</p>
				</div>

				<a
					href="https://www.eweege.de"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded text-xs mb-2 transition-colors"
				>
					Zur Website
				</a>

				<p class="text-xs text-orange-600">
					📍 Lage | 🌍 eweege.de
				</p>
			</div>
		</div>
	{/if}
</section>

<style>
</style>
