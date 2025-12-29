<script lang="ts">
	import HeroNew from '$lib/components/sections/HeroNew.svelte';
	import ManifestorMethod from '$lib/components/sections/ManifestorMethod.svelte';
	import Frequenzen from '$lib/components/sections/Frequenzen.svelte';
	import Bewegung from '$lib/components/sections/Bewegung.svelte';
	import Expeditionen from '$lib/components/sections/Expeditionen.svelte';
	import FooterNew from '$lib/components/sections/FooterNew.svelte';
</script>

<svelte:head>
	<title>Aaron Pfützner - Ideen → Realität</title>
	<meta
		name="description"
		content="Ich übersetze. AI baut. Manifestor, Musiker, Athlet. The Manifestor Method - Software-Entwicklung mit AI, Sport mit Disziplin, Musik mit Leidenschaft."
	/>
	<meta property="og:title" content="Aaron Pfützner - Ideen → Realität" />
	<meta
		property="og:description"
		content="Ich übersetze. AI baut. The Manifestor Method."
	/>
	<meta property="og:image" content="/images/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aaron.pfuetzners.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Aaron Pfützner - Ideen → Realität" />
	<meta
		name="twitter:description"
		content="Ich übersetze. AI baut. The Manifestor Method."
	/>
	<link rel="canonical" href="https://aaron.pfuetzners.com" />
</svelte:head>

<HeroNew />
<ManifestorMethod />
<Frequenzen />
<Bewegung />
<!-- <Expeditionen /> --> <!-- noch baustelle -->
<FooterNew />
