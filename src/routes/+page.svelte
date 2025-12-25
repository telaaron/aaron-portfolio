<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import PerformanceLine from '$lib/components/ui/PerformanceLine.svelte';
	import BentoGrid from '$lib/components/sections/BentoGrid.svelte';
	import Timeline from '$lib/components/sections/Timeline.svelte';
	import About from '$lib/components/sections/About.svelte';
	import TechStack from '$lib/components/sections/TechStack.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Sponsorship from '$lib/components/sections/Sponsorship.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Aaron Pfützner - Founder, Athlete, Musician</title>
	<meta
		name="description"
		content="Co-Founder & CTO at Aaron Technologies. Building the intelligence layer for AI travel. Marathon runner, GR20 hiker, Jazz pianist."
	/>
	<meta property="og:title" content="Aaron Pfützner - Founder, Athlete, Musician" />
	<meta
		property="og:description"
		content="Building Systems. Cultivating Discipline. Creating Sound."
	/>
	<meta property="og:image" content="/images/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aaron.pfuetzners.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Aaron Pfützner - Founder, Athlete, Musician" />
	<meta
		name="twitter:description"
		content="Building Systems. Cultivating Discipline. Creating Sound."
	/>
	<link rel="canonical" href="https://aaron.pfuetzners.com" />
</svelte:head>

<PerformanceLine />
<Hero />
<BentoGrid />
<Timeline />
<About />
<TechStack />
<Projects />
<Contact />
<!-- <Sponsorship /> -->
<Footer />
