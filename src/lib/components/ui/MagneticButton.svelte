<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		class?: string;
		children: Snippet;
		onclick?: () => void;
	}

	let { href, class: className = '', children, onclick }: Props = $props();

	let button: HTMLElement | undefined = $state();
	let x = $state(0);
	let y = $state(0);

	function handleMouseMove(e: MouseEvent) {
		if (!button) return;

		const rect = button.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		x = (e.clientX - centerX) * 0.3;
		y = (e.clientY - centerY) * 0.3;
	}

	function handleMouseLeave() {
		x = 0;
		y = 0;
	}
</script>

{#if href}
	<a
		bind:this={button}
		{href}
		class="magnetic-button inline-block {className}"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
		style="transform: translate({x}px, {y}px)"
	>
		{@render children()}
	</a>
{:else}
	<button
		bind:this={button}
		class="magnetic-button {className}"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
		{onclick}
		style="transform: translate({x}px, {y}px)"
	>
		{@render children()}
	</button>
{/if}

<style>
	.magnetic-button {
		transition: transform 0.2s ease-out;
	}
</style>