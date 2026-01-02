<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { ensureGSAP } from '$lib/utils/animations';

	let cursorOuter: HTMLDivElement = $state(null!);
	let cursorInner: HTMLDivElement = $state(null!);
	let gsapInstance: any = null;
	
	let mouseX = 0;
	let mouseY = 0;
	let isHovering = $state(false);
	let isVisible = $state(false);
	let isTouchDevice = $state(true);
	let currentText = $state('');

	onMount(() => {
		if (!browser) return;

		// Check if it's a touch device
		isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		
		if (isTouchDevice) return;

		let cleanup: (() => void) | undefined;

		ensureGSAP().then(({ gsap }) => {
			gsapInstance = gsap;

			// Smooth cursor following with GSAP ticker
			const updateCursor = () => {
				if (!cursorOuter || !cursorInner) return;
				
				// Outer ring - smooth follow
				gsap.to(cursorOuter, {
					x: mouseX,
					y: mouseY,
					duration: 0.5,
					ease: 'power3.out'
				});
				
				// Inner dot - fast follow
				gsap.to(cursorInner, {
					x: mouseX,
					y: mouseY,
					duration: 0.15,
					ease: 'power2.out'
				});
			};

			gsap.ticker.add(updateCursor);

			const handleMouseMove = (e: MouseEvent) => {
				mouseX = e.clientX;
				mouseY = e.clientY;
				if (!isVisible) isVisible = true;
			};

			const handleMouseLeave = () => {
				isVisible = false;
				gsap.to([cursorOuter, cursorInner], {
					scale: 0,
					duration: 0.3,
					ease: 'power2.in'
				});
			};

			const handleMouseEnter = () => {
				isVisible = true;
				gsap.to([cursorOuter, cursorInner], {
					scale: 1,
					duration: 0.3,
					ease: 'back.out(1.5)'
				});
			};

			// Enhanced interactive elements
			const setupInteractiveElements = () => {
				const elements = document.querySelectorAll('a, button, .bento-card, .tilt-card, .stack-item, .timeline-card, [data-cursor]');
				elements.forEach((el) => {
					el.addEventListener('mouseenter', () => {
						isHovering = true;
						const cursorText = el.getAttribute('data-cursor');
						if (cursorText) currentText = cursorText;
						
						gsap.to(cursorOuter, {
							scale: 2,
							borderWidth: 1,
							duration: 0.4,
							ease: 'elastic.out(1, 0.5)'
						});
						gsap.to(cursorInner, {
							scale: 0,
							duration: 0.2
						});
					});
					el.addEventListener('mouseleave', () => {
						isHovering = false;
						currentText = '';
						
						gsap.to(cursorOuter, {
							scale: 1,
							borderWidth: 2,
							duration: 0.4,
							ease: 'elastic.out(1, 0.5)'
						});
						gsap.to(cursorInner, {
							scale: 1,
							duration: 0.3,
							ease: 'back.out(2)'
						});
					});
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

			cleanup = () => {
				gsap.ticker.remove(updateCursor);
				document.removeEventListener('mousemove', handleMouseMove);
				document.removeEventListener('mouseleave', handleMouseLeave);
				document.removeEventListener('mouseenter', handleMouseEnter);
				observer.disconnect();
			};
		});

		return () => cleanup?.();
	});
</script>

{#if !isTouchDevice}
	<div class="cursor-container fixed inset-0 pointer-events-none z-9999">
		<div
			bind:this={cursorOuter}
			class="cursor-outer"
			class:hovering={isHovering}
		>
			{#if currentText}
				<span class="cursor-text">{currentText}</span>
			{/if}
		</div>
		<div
			bind:this={cursorInner}
			class="cursor-inner"
		></div>
	</div>
{/if}

<style>
	.cursor-outer {
		position: fixed;
		top: 0;
		left: 0;
		width: 40px;
		height: 40px;
		border: 2px solid var(--color-accent, #0066ff);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
		display: flex;
		align-items: center;
		justify-content: center;
		will-change: transform;
	}
	
	.cursor-outer.hovering {
		background: rgba(255, 255, 255, 0.05);
	}
	
	.cursor-inner {
		position: fixed;
		top: 0;
		left: 0;
		width: 8px;
		height: 8px;
		background: var(--color-accent, #0066ff);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
		will-change: transform;
	}
	
	.cursor-text {
		font-size: 10px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: white;
		white-space: nowrap;
	}
</style>