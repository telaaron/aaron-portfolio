<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { ensureGSAP } from '$lib/utils/animations';

	interface Props {
		href?: string;
		class?: string;
		children: Snippet;
		onclick?: () => void;
	}

	let { href, class: className = '', children, onclick }: Props = $props();

	let button: HTMLElement | undefined = $state();
	let gsapInstance: any = null;

	onMount(async () => {
		const { gsap } = await ensureGSAP();
		gsapInstance = gsap;
	});

	function handleMouseMove(e: MouseEvent) {
		if (!button || !gsapInstance) return;

		const rect = button.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const x = (e.clientX - centerX) * 0.35;
		const y = (e.clientY - centerY) * 0.35;

		gsapInstance.to(button, {
			x,
			y,
			duration: 0.3,
			ease: 'power2.out'
		});
	}

	function handleMouseLeave() {
		if (!button || !gsapInstance) return;
		
		gsapInstance.to(button, {
			x: 0,
			y: 0,
			duration: 0.5,
			ease: 'elastic.out(1, 0.5)'
		});
	}
</script>

{#if href}
	<a
		bind:this={button}
		{href}
		class="magnetic-button inline-block {className}"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
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
	>
		{@render children()}
	</button>
{/if}

<style>
	.magnetic-button {
		will-change: transform;
	}
</style>