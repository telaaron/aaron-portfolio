<script lang="ts">
	import HeroNew from '$lib/components/sections/HeroNew.svelte';
	import About from '$lib/components/sections/About.svelte';
	import ManifestorMethod from '$lib/components/sections/ManifestorMethod.svelte';
	import Frequenzen from '$lib/components/sections/Frequenzen.svelte';
	import Bewegung from '$lib/components/sections/Bewegung.svelte';
	import Expeditionen from '$lib/components/sections/Expeditionen.svelte';
	import Lifestyle from '$lib/components/sections/Lifestyle.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import FooterNew from '$lib/components/sections/FooterNew.svelte';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';

	let translations = $derived(t($language));
</script>

<svelte:head>
	<title>{translations.meta.title}</title>
	<meta name="description" content={translations.meta.description} />
	<meta property="og:title" content={translations.meta.title} />
	<meta property="og:description" content={translations.meta.description} />
	<meta property="og:image" content="/images/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aaron.pfuetzners.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={translations.meta.title} />
	<meta name="twitter:description" content={translations.meta.description} />
	<link rel="canonical" href="https://aaron.pfuetzners.com" />
</svelte:head>

<HeroNew />
<About />
<ManifestorMethod />
<Frequenzen />
<Bewegung />
<Expeditionen />
<Lifestyle />
<Contact />
<FooterNew />
