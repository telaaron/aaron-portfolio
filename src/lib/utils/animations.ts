<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export function initScrollReveal() {
		if (!browser) return;

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
	}
</script>