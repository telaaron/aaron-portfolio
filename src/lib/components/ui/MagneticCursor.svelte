<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let x = $state(0);
	let y = $state(0);
	let isActive = $state(false);
	let isVisible = $state(false);
	let isTouchDevice = $state(true);

	onMount(() => {
		if (!browser) return;

		// Check if it's a touch device
		isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		
		if (isTouchDevice) return;

		const handleMouseMove = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;
			isVisible = true;
		};

		const handleMouseLeave = () => {
			isVisible = false;
		};

		const handleMouseEnter = () => {
			isVisible = true;
		};

		// Add listeners for interactive elements
		const setupInteractiveElements = () => {
			const elements = document.querySelectorAll('a, button, .bento-card, .tilt-card, .stack-item, .timeline-card');
			elements.forEach((el) => {
				el.addEventListener('mouseenter', () => (isActive = true));
				el.addEventListener('mouseleave', () => (isActive = false));
			});
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseleave', handleMouseLeave);
		document.addEventListener('mouseenter', handleMouseEnter);

		// Setup with a slight delay to ensure DOM is ready
		setTimeout(setupInteractiveElements, 100);

		// Re-setup on navigation
		const observer = new MutationObserver(() => {
			setupInteractiveElements();
		});
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseleave', handleMouseLeave);
			document.removeEventListener('mouseenter', handleMouseEnter);
			observer.disconnect();
		};
	});
</script>

{#if !isTouchDevice}
	<div
		class="magnetic-cursor fixed pointer-events-none z-9999 mix-blend-difference transition-all duration-150 ease-out"
		class:active={isActive}
		class:visible={isVisible}
		style="transform: translate({x}px, {y}px) translate(-50%, -50%)"
	>
		<div class="cursor-ring"></div>
		<div class="cursor-dot"></div>
	</div>
{/if}

<style>
	.magnetic-cursor {
		opacity: 0;
	}

	.magnetic-cursor.visible {
		opacity: 1;
	}

	.cursor-ring {
		width: 40px;
		height: 40px;
		border: 2px solid #0066ff;
		border-radius: 50%;
		transition: width 0.3s, height 0.3s, background-color 0.3s;
	}

	.cursor-dot {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 6px;
		height: 6px;
		background: #0066ff;
		border-radius: 50%;
		transition: width 0.3s, height 0.3s;
	}

	.magnetic-cursor.active .cursor-ring {
		width: 60px;
		height: 60px;
		background: rgba(0, 102, 255, 0.1);
	}

	.magnetic-cursor.active .cursor-dot {
		width: 8px;
		height: 8px;
	}
</style>