<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import MagneticCursor from '$lib/components/ui/MagneticCursor.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { ensureGSAP, refreshScrollTrigger } from '$lib/utils/animations';

	let { children } = $props();

	onMount(() => {
		if (!browser) return;

		// Initialize GSAP and smooth scroll
		(async () => {
			const { gsap, ScrollTrigger } = await ensureGSAP();
			
			// Load ScrollToPlugin for smooth navigation
			const { ScrollToPlugin } = await import('gsap/dist/ScrollToPlugin');
			gsap.registerPlugin(ScrollToPlugin);
			
			// Smooth scroll for anchor links with GSAP
			document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
				anchor.addEventListener('click', (e) => {
					e.preventDefault();
					const href = anchor.getAttribute('href');
					if (href && href !== '#') {
						const target = document.querySelector(href);
						if (target) {
							gsap.to(window, {
								duration: 1.2,
								scrollTo: { y: target, offsetY: 80 },
								ease: 'power3.inOut'
							});
						}
					}
				});
			});
			
			// Refresh ScrollTrigger after page load
			setTimeout(() => refreshScrollTrigger(), 500);
		})();

		// CSS-based smooth scroll fallback
		document.documentElement.style.scrollBehavior = 'smooth';

		// Initialize scroll reveal animations (CSS fallback)
		const revealElements = document.querySelectorAll('.reveal');

		const revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		revealElements.forEach((el) => revealObserver.observe(el));

		return () => {
			revealElements.forEach((el) => revealObserver.unobserve(el));
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<MagneticCursor />

<main class="min-h-screen bg-deep-black text-white overflow-x-hidden">
	{@render children()}
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
