<script lang="ts">
	import { meta, footerVerse, quickLinks } from '$lib/utils/constants';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import { ArrowUp } from 'lucide-svelte';

	let translations = $derived(t($language));
	let showScrollTop = $state(false);

	const currentYear = new Date().getFullYear();

	$effect(() => {
		function handleScroll() {
			showScrollTop = window.scrollY > 500;
		}
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	// Icons
	const icons: Record<string, string> = {
		instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
		youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`,
		github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
		mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
	};
</script>

<!-- Scroll to Top Button -->
{#if showScrollTop}
	<button
		onclick={scrollToTop}
		class="fixed bottom-8 right-8 z-50 p-3 bg-orange-500 text-white rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-400 hover:scale-110 transition-all duration-300 animate-fade-in"
		aria-label="Scroll to top"
	>
		<ArrowUp size={24} />
	</button>
{/if}

<footer class="py-16 px-4 md:px-8 bg-deep-black border-t border-gray-900">
	<div class="container max-w-6xl mx-auto">
		<!-- Bible verse - subtle -->
		<div class="text-center mb-12 opacity-60 hover:opacity-100 transition-opacity">
			<p class="text-gray-500 italic text-sm max-w-2xl mx-auto">
				„{footerVerse.text}"
			</p>
			<p class="text-gray-600 text-xs mt-2">{footerVerse.reference}</p>
		</div>

		<!-- Quick links -->
		<div class="flex justify-center gap-4 mb-8">
			{#each quickLinks as link}
				<a
					href={link.url}
					target={link.icon === 'mail' ? undefined : '_blank'}
					rel={link.icon === 'mail' ? undefined : 'noopener noreferrer'}
					class="w-10 h-10 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-electric-blue hover:border-electric-blue transition-all"
				>
					{@html icons[link.icon]}
				</a>
			{/each}
		</div>

		<!-- Name and copyright -->
		<div class="text-center">
			<p class="text-white font-medium mb-2">{meta.name}</p>
			<p class="text-gray-600 text-sm">
				{meta.location} • © {currentYear} • {translations.footer.rights}
			</p>
		</div>

		<!-- Built with -->
		<div class="text-center mt-8">
			<p class="text-gray-700 text-xs">
				{$language === 'de' ? 'Gebaut mit' : 'Built with'} SvelteKit, Tailwind CSS & Claude
			</p>
		</div>
	</div>
</footer>
