<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { ensureGSAP } from '$lib/utils/animations';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();

	let card: HTMLDivElement;
	let shine: HTMLDivElement;
	let gsapInstance: any = null;

	onMount(async () => {
		const { gsap } = await ensureGSAP();
		gsapInstance = gsap;
	});

	function handleMouseMove(e: MouseEvent) {
		if (!card || !gsapInstance) return;

		const rect = card.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;

		// More dramatic rotation
		const rotateY = (mouseX / (rect.width / 2)) * 15;
		const rotateX = -(mouseY / (rect.height / 2)) * 15;

		gsapInstance.to(card, {
			rotateX,
			rotateY,
			z: 50,
			duration: 0.4,
			ease: 'power2.out',
			transformPerspective: 1200
		});
		
		// Shine effect position
		if (shine) {
			const shineX = ((e.clientX - rect.left) / rect.width) * 100;
			const shineY = ((e.clientY - rect.top) / rect.height) * 100;
			gsapInstance.to(shine, {
				background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
				duration: 0.3
			});
		}
	}

	function handleMouseEnter() {
		if (!card || !gsapInstance) return;
		
		gsapInstance.to(card, {
			scale: 1.03,
			boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
			duration: 0.4,
			ease: 'back.out(1.5)'
		});
		
		if (shine) {
			gsapInstance.to(shine, { opacity: 1, duration: 0.3 });
		}
	}

	function handleMouseLeave() {
		if (!card || !gsapInstance) return;
		
		gsapInstance.to(card, {
			rotateX: 0,
			rotateY: 0,
			z: 0,
			scale: 1,
			boxShadow: '0 0 0 0 rgba(0,0,0,0)',
			duration: 0.6,
			ease: 'elastic.out(1, 0.5)'
		});
		
		if (shine) {
			gsapInstance.to(shine, { opacity: 0, duration: 0.3 });
		}
	}
</script>

<div
	bind:this={card}
	class="tilt-card {className}"
	onmousemove={handleMouseMove}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	role="presentation"
>
	<div bind:this={shine} class="shine-overlay"></div>
	{@render children()}
</div>

<style>
	.tilt-card {
		position: relative;
		transform-style: preserve-3d;
		will-change: transform;
	}
	
	.shine-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0;
		z-index: 10;
		border-radius: inherit;
	}
</style>