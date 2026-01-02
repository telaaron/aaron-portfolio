<script lang="ts">
	import { language } from '$lib/stores/language';
	import { 
		sectionTitleReveal, 
		perspectiveEntrance, 
		springCounter,
		imageZoomClipReveal,
		blurFadeSection,
		ensureGSAP,
		cleanupScrollTriggers 
	} from '$lib/utils/animations';
	import { onMount } from 'svelte';

	let sectionRef = $state<HTMLElement | null>(null);
	let headerRef = $state<HTMLElement | null>(null);
	let titleRef = $state<HTMLElement | null>(null);
	let verseRef = $state<HTMLElement | null>(null);
	let storyRef = $state<HTMLElement | null>(null);
	let portraitRef = $state<HTMLElement | null>(null);
	let cardsRef = $state<HTMLElement | null>(null);
	let statsRef = $state<HTMLElement | null>(null);
	
	// Stats refs for counter animation
	let stat1Ref = $state<HTMLElement | null>(null);
	let stat2Ref = $state<HTMLElement | null>(null);
	let stat3Ref = $state<HTMLElement | null>(null);
	let stat4Ref = $state<HTMLElement | null>(null);

	onMount(() => {
		// PREMIUM Level 2 - Next-level scroll animations
		setTimeout(async () => {
			const { gsap, ScrollTrigger } = await ensureGSAP();
			if (!gsap) return;
			
			// Section label
			if (headerRef) {
				const label = headerRef.querySelector('.section-label');
				if (label) {
					gsap.fromTo(label,
						{ opacity: 0, y: 20 },
						{
							opacity: 1,
							y: 0,
							ease: 'none',
							scrollTrigger: {
								trigger: headerRef,
								start: 'top 98%',
								end: 'top 75%',
								scrub: 1
							}
						}
					);
				}
			}
			
			// Title with blur reveal
			if (titleRef) await sectionTitleReveal(titleRef);
			
			// Verse with blur-fade section transition
			if (verseRef) await blurFadeSection(verseRef);
			
			// Story paragraphs with rotation stagger - EARLIER
			if (storyRef) {
				const paragraphs = storyRef.querySelectorAll('p');
				gsap.fromTo(paragraphs,
					{ opacity: 0, y: 40, rotation: 1.5 },
					{
						opacity: 1,
						y: 0,
						rotation: 0,
						stagger: 0.1,
						ease: 'none',
						scrollTrigger: {
							trigger: storyRef,
							start: 'top 100%',
							end: 'top 50%',
							scrub: 1
						}
					}
				);
			}
			
			// Portrait with zoom + clip-path combined
			if (portraitRef) await imageZoomClipReveal(portraitRef);
			
			// Cards with 3D perspective entrance
			if (cardsRef) {
				const cards = cardsRef.querySelectorAll('.card-item');
				cards.forEach((card, i) => {
					perspectiveEntrance(card as HTMLElement);
				});
			}
			
			// Spring counter animations
			if (stat1Ref) await springCounter(stat1Ref, 14, '+');
			if (stat2Ref) await springCounter(stat2Ref, 3, '');
			if (stat3Ref) await springCounter(stat3Ref, 2, '');
			if (stat4Ref) await springCounter(stat4Ref, 4, '');
		}, 100);

		return () => cleanupScrollTriggers();
	});

	const content = $derived({
		de: {
			sectionLabel: 'Über mich',
			tagline: 'Licht in der Finsternis',
			story: `Aufgewachsen in Potsdam und Teltow, habe ich früh gelernt, dass die besten Abenteuer draußen passieren – Buden bauen, Bäume erklettern, die Welt entdecken. Diese Neugier ist geblieben.

Mit 6 Jahren begann ich Klavier zu spielen, mit 8 kam die Posaune dazu. Musik wurde zu einer Sprache, die keine Worte braucht – ein Weg, Menschen Freude zu bereiten.

Parallel dazu fasziniert mich Technologie. Nicht als Selbstzweck, sondern als Werkzeug, um Ideen Realität werden zu lassen. Mit AI als Partner im Creation-Prozess entstehen Projekte, die vorher undenkbar waren.`,
			faithTitle: 'Glaube',
			faith: `In meiner Familie bin ich mit dem Glauben aufgewachsen – Sonntagsschule, Konfirmation, Gottesdienste. Aber die wirkliche Auseinandersetzung begann erst vor ein bis zwei Jahren.

Ich habe angefangen, aktiv zu hinterfragen: Wie glaubwürdig ist die Bibel? Warum starb Jesus am Kreuz? Was ist Sünde eigentlich? Aktuell lese ich die Bibel von Anfang bis Ende durch.

Johannes 1:5 – "Es leuchtet in der Finsternis, und die Finsternis hat es nicht auslöschen können" – gibt mir Hoffnung. Manchmal fühle ich mich selbst wie ein Licht für andere.`,
			missionTitle: 'Mission',
			mission: `Menschen zum Glauben zu bringen. Anderen ein Licht zu sein. Eine glückliche Familie aufzubauen, die als Vorbild dient.

Ich strebe danach, in meinem Handeln authentisch zu sein. Tech und Musik sind für mich keine getrennten Welten – beides sind Ausdrucksformen derselben Kreativität.`,
			verse: '"Es leuchtet in der Finsternis, und die Finsternis hat es nicht auslöschen können."',
			verseRef: 'Johannes 1:5'
		},
		en: {
			sectionLabel: 'About Me',
			tagline: 'Light in the Darkness',
			story: `Growing up in Potsdam and Teltow, I learned early that the best adventures happen outside – building forts, climbing trees, discovering the world. That curiosity has stayed with me.

At 6, I started playing piano; at 8, the trombone followed. Music became a language that needs no words – a way to bring joy to people.

At the same time, technology fascinates me. Not as an end in itself, but as a tool to turn ideas into reality. With AI as a partner in the creation process, projects emerge that were previously unthinkable.`,
			faithTitle: 'Faith',
			faith: `I grew up with faith in my family – Sunday school, confirmation, church services. But the real engagement only began one or two years ago.

I started actively questioning: How credible is the Bible? Why did Jesus die on the cross? What actually is sin? Currently, I'm reading the Bible from start to finish.

John 1:5 – "The light shines in the darkness, and the darkness has not overcome it" – gives me hope. Sometimes I feel like a light for others myself.`,
			missionTitle: 'Mission',
			mission: `To bring people to faith. To be a light for others. To build a happy family that serves as an example.

I strive to be authentic in my actions. Tech and music aren't separate worlds for me – both are expressions of the same creativity.`,
			verse: '"The light shines in the darkness, and the darkness has not overcome it."',
			verseRef: 'John 1:5'
		}
	});

	let currentContent = $derived(content[$language]);
</script>

<section id="about" bind:this={sectionRef} class="py-24 px-4 md:px-8 bg-deep-black relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
	<div class="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

	<div class="container max-w-4xl mx-auto relative z-10">
		<!-- Section header -->
		<div bind:this={headerRef} class="text-center mb-16">
			<p class="section-label opacity-0 text-orange-400 font-mono text-sm tracking-widest uppercase mb-2">{currentContent.sectionLabel}</p>
			<h2 bind:this={titleRef} class="text-4xl md:text-5xl font-bold text-white mb-6">{currentContent.tagline}</h2>
			
			<!-- Featured verse with mask reveal -->
			<blockquote bind:this={verseRef} class="text-xl md:text-2xl text-gray-300 font-light italic max-w-2xl mx-auto">
				{currentContent.verse}
				<footer class="text-orange-400/60 text-base mt-2 not-italic">{currentContent.verseRef}</footer>
			</blockquote>
		</div>

		<!-- Story with Portrait -->
		<div bind:this={storyRef} class="mb-16 grid md:grid-cols-3 gap-8 items-start">
			<!-- Story text -->
			<div class="md:col-span-2 prose prose-lg prose-invert max-w-none">
				{#each currentContent.story.split('\n\n') as paragraph}
					<p class="text-gray-300 leading-relaxed mb-6 opacity-0">{paragraph}</p>
				{/each}
			</div>
			
			<!-- Portrait with scale reveal -->
			<div class="md:col-span-1">
				<div bind:this={portraitRef} class="relative rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-colors duration-300">
					<img 
						src="/images/aaron-portrait.jpg" 
						alt="Aaron - Builder, Musician, Creator"
						class="w-full h-auto object-cover aspect-3/4"
					/>
					<div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-deep-black/40 pointer-events-none"></div>
				</div>
			</div>
		</div>

		<!-- Two columns: Faith & Mission -->
		<div bind:this={cardsRef} class="grid md:grid-cols-2 gap-8">
			<!-- Faith -->
			<div class="card-item bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-colors">
				<div class="flex items-center gap-3 mb-6">
					<div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-orange-400"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
					</div>
					<h3 class="text-xl font-bold text-white">{currentContent.faithTitle}</h3>
				</div>
				<div class="space-y-4">
					{#each currentContent.faith.split('\n\n') as paragraph}
						<p class="text-gray-400 text-sm leading-relaxed">{paragraph}</p>
					{/each}
				</div>
			</div>

			<!-- Mission -->
			<div class="card-item bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors">
				<div class="flex items-center gap-3 mb-6">
					<div class="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-amber-400"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9"/></svg>
					</div>
					<h3 class="text-xl font-bold text-white">{currentContent.missionTitle}</h3>
				</div>
				<div class="space-y-4">
					{#each currentContent.mission.split('\n\n') as paragraph}
						<p class="text-gray-400 text-sm leading-relaxed">{paragraph}</p>
					{/each}
				</div>
			</div>
		</div>

		<!-- Stats with counter animation -->
		<div bind:this={statsRef} class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
			<div class="stat-item text-center group hover:scale-105 transition-transform duration-300">
				<p bind:this={stat1Ref} class="text-3xl md:text-4xl font-bold text-orange-400">0</p>
				<p class="text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors">{$language === 'de' ? 'Jahre Musik' : 'Years of Music'}</p>
			</div>
			<div class="stat-item text-center group hover:scale-105 transition-transform duration-300">
				<p bind:this={stat2Ref} class="text-3xl md:text-4xl font-bold text-amber-400">0</p>
				<p class="text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors">{$language === 'de' ? 'Klavierschüler' : 'Piano Students'}</p>
			</div>
			<div class="stat-item text-center group hover:scale-105 transition-transform duration-300">
				<p bind:this={stat3Ref} class="text-3xl md:text-4xl font-bold text-orange-400">0</p>
				<p class="text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors">{$language === 'de' ? 'AI-Projekte' : 'AI Projects'}</p>
			</div>
			<div class="stat-item text-center group hover:scale-105 transition-transform duration-300">
				<p bind:this={stat4Ref} class="text-3xl md:text-4xl font-bold text-amber-400">0</p>
				<p class="text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors">{$language === 'de' ? 'Ensembles' : 'Ensembles'}</p>
			</div>
		</div>
	</div>
</section>
