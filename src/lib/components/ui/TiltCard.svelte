<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = '', children }: Props = $props();

	let card: HTMLDivElement;
	let isHovering = $state(false);
	let rotateX = $state(0);
	let rotateY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		if (!card) return;

		const rect = card.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;

		rotateY = (mouseX / (rect.width / 2)) * 8;
		rotateX = -(mouseY / (rect.height / 2)) * 8;
	}

	function handleMouseEnter() {
		isHovering = true;
	}

	function handleMouseLeave() {
		isHovering = false;
		rotateX = 0;
		rotateY = 0;
	}
</script>

<div
	bind:this={card}
	class="tilt-card {className}"
	onmousemove={handleMouseMove}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg) {isHovering ? 'translateZ(10px)' : 'translateZ(0)'}; transition: transform 0.15s ease-out;"
	role="presentation"
>
	{@render children()}
</div>

<style>
	.tilt-card {
		transform-style: preserve-3d;
		will-change: transform;
	}
</style>