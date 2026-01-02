<script lang="ts">
	import { onMount } from 'svelte';
	import { quickLinks, meta } from '$lib/utils/content';
	import { language, toggleLanguage } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import MagneticButton from '$lib/components/ui/MagneticButton.svelte';
	import { 
		heroCharacterReveal, 
		textWaveReveal,
		floatingElement, 
		mouseGradientSpotlight,
		ensureGSAP 
	} from '$lib/utils/animations';

	// Icon components for social links
	const icons: Record<string, string> = {
		instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
		youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`,
		github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
		mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
	};

	let canvas: HTMLCanvasElement | undefined;
	let ctx: CanvasRenderingContext2D | null = null;
	let animationId: number;
	
	// Element refs for GSAP
	let firstNameRef: HTMLElement | null = $state(null);
	let lastNameRef: HTMLElement | null = $state(null);
	let subtitleRef: HTMLElement | null = $state(null);
	let linksContainerRef: HTMLElement | null = $state(null);
	let ctaContainerRef: HTMLElement | null = $state(null);
	let scrollIndicatorRef: HTMLElement | null = $state(null);
	let heroContainerRef: HTMLElement | null = $state(null);
	
	// Cleanup function for mouse gradient
	let cleanupGradient: (() => void) | undefined;
	
	let translations = $derived(t($language));

	function animateGrid() {
		if (!ctx || !canvas) return;
		const gridSize = 50;
		let offset = 0;

		interface Spark {
			x: number;
			y: number;
			life: number;
			maxLife: number;
			isVertical: boolean;
		}

		const sparks: Spark[] = [];

		function createRandomSpark() {
			const isVertical = Math.random() > 0.5;
			if (isVertical) {
				sparks.push({
					x: Math.floor(Math.random() * (canvas!.width / gridSize)) * gridSize,
					y: Math.random() * canvas!.height,
					life: 0,
					maxLife: 40 + Math.random() * 30,
					isVertical: true
				});
			} else {
				sparks.push({
					x: Math.random() * canvas!.width,
					y: Math.floor(Math.random() * (canvas!.height / gridSize)) * gridSize,
					life: 0,
					maxLife: 40 + Math.random() * 30,
					isVertical: false
				});
			}
		}

		function draw() {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			// Draw grid
			ctx.strokeStyle = 'rgba(0, 102, 255, 0.15)';
			ctx.lineWidth = 1;

			// Vertical lines with animation
			for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}

			// Horizontal lines
			for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}

			// Spawn new sparks randomly
			if (Math.random() < 0.08) {
				createRandomSpark();
			}

			// Draw and update sparks
			sparks.forEach((spark, idx) => {
				spark.life++;
				const progress = spark.life / spark.maxLife;
				const opacity = Math.max(0, 1 - progress) * 0.8;

				// Create gradient from orange to amber
				const gradient = ctx!.createLinearGradient(0, 0, 10, 10);
				gradient.addColorStop(0, `rgba(248, 113, 113, ${opacity})`); // orange-400
				gradient.addColorStop(0.5, `rgba(251, 146, 60, ${opacity})`); // orange-500
				gradient.addColorStop(1, `rgba(251, 191, 36, ${opacity})`); // amber-400

				// Draw spark glow
				ctx!.fillStyle = gradient;
				ctx!.shadowColor = `rgba(248, 113, 113, ${opacity * 0.5})`;
				ctx!.shadowBlur = 15 + progress * 10;
				
				const size = 2 + (1 - progress) * 3;
				ctx!.fillRect(spark.x - size / 2, spark.y - size / 2, size, size);
				ctx!.shadowBlur = 0;

				// Remove dead sparks
				if (progress >= 1) {
					sparks.splice(idx, 1);
				}
			});

			offset += 0.2;
			animationId = requestAnimationFrame(draw);
		}
		draw();
	}

	onMount(() => {
		if (!canvas) return;
		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		animateGrid();

		const handleResize = () => {
			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
		};

		window.addEventListener('resize', handleResize);
		
		// PREMIUM Hero Animations - Level 2
		setTimeout(async () => {
			const { gsap } = await ensureGSAP();
			if (!gsap) return;
			
			// 3D Character reveal for first name (Linear-style)
			if (firstNameRef) await heroCharacterReveal(firstNameRef, 0.2);
			
			// Wave text reveal for last name
			if (lastNameRef) await textWaveReveal(lastNameRef, 0.6);
			
			// Subtitle with blur-in
			if (subtitleRef) {
				gsap.fromTo(subtitleRef,
					{ opacity: 0, y: 30, filter: 'blur(10px)' },
					{ opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 1, ease: 'power3.out' }
				);
			}
			
			// Stagger social links with rotation
			if (linksContainerRef) {
				const links = linksContainerRef.querySelectorAll('.social-link');
				gsap.fromTo(links, 
					{ opacity: 0, y: 40, rotation: -5, scale: 0.9 },
					{ opacity: 1, y: 0, rotation: 0, scale: 1, duration: 0.8, stagger: 0.08, delay: 1.2, ease: 'back.out(1.5)' }
				);
			}
			
			// CTA buttons with spring effect
			if (ctaContainerRef) {
				const buttons = ctaContainerRef.querySelectorAll('.cta-btn');
				gsap.fromTo(buttons,
					{ opacity: 0, y: 30, scale: 0.95 },
					{ opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, delay: 1.4, ease: 'elastic.out(1, 0.5)' }
				);
			}
			
			// Floating scroll indicator
			if (scrollIndicatorRef) await floatingElement(scrollIndicatorRef, 8);
		}, 100);
		
		// Mouse-following gradient spotlight
		setTimeout(() => {
			if (heroContainerRef) {
				cleanupGradient = mouseGradientSpotlight(heroContainerRef);
			}
		}, 500);

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationId);
			if (cleanupGradient) cleanupGradient();
		};
	});
</script>

<section bind:this={heroContainerRef} class="hero min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 pt-32 md:pt-0">
	<!-- Animated Grid Canvas -->
	<canvas bind:this={canvas} class="absolute inset-0 z-0"></canvas>

	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-deep-black z-5"></div>

	<!-- Language Toggle -->
	<button
		onclick={() => toggleLanguage()}
		class="absolute top-8 right-8 z-20 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full hover:border-orange-400 hover:bg-gray-900 transition-all duration-300 text-white font-mono text-sm"
	>
		{$language === 'de' ? '🇬🇧 EN' : '🇩🇪 DE'}
	</button>

	<!-- Main content -->
	<div class="relative z-10 text-center max-w-4xl mx-auto -mt-32 md:mt-0">
		<!-- Name with GSAP text reveal -->
		<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 perspective-1000">
			<span bind:this={firstNameRef} class="text-white inline-block">Aaron</span>
			<span> </span>
			<span bind:this={lastNameRef} class="bg-linear-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent inline-block">Pfützner</span>
		</h1>

		<!-- Value Proposition with blur reveal -->
		<p bind:this={subtitleRef} class="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto opacity-0">
			{$language === 'de' 
				? 'Builder. Musiker. Visionär.' 
				: 'Builder. Musician. Visionary.'}
		</p>

		<!-- Quick Links with stagger animation -->
		<div bind:this={linksContainerRef} class="flex flex-wrap justify-center gap-4 mb-8">
			{#each quickLinks as link}
				<MagneticButton href={link.url} class="group social-link opacity-0">
					<div class="flex items-center gap-3 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full hover:border-electric-blue hover:bg-gray-900 transition-all duration-300">
						<span class="text-gray-400 group-hover:text-electric-blue transition-colors">
							{@html icons[link.icon]}
						</span>
						<span class="text-gray-300 group-hover:text-white transition-colors font-medium">
							{link.name}
						</span>
					</div>
				</MagneticButton>
			{/each}
		</div>

		<!-- CTA Buttons with stagger animation -->
		<div bind:this={ctaContainerRef} class="flex flex-wrap justify-center gap-4 mb-16">
			<a 
				href="#manifestor-method" 
				class="cta-btn opacity-0 px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-400 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
			>
				{translations.hero.viewProjects || 'Projekte ansehen'}
			</a>
			<a 
				href="#kontakt" 
				class="cta-btn opacity-0 px-8 py-4 bg-gray-900/50 border border-gray-700 text-white font-semibold rounded-full hover:border-orange-400 hover:bg-gray-900 transition-all duration-300 hover:scale-105"
			>
				{translations.hero.contact || 'Kontakt'}
			</a>
		</div>
	</div>

	<!-- Scroll Indicator with floating animation -->
	<div bind:this={scrollIndicatorRef} class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
		<a href="#manifestor-method" class="flex flex-col items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors">
			<span class="text-xs uppercase tracking-widest">{translations.hero.scroll || 'Scroll'}</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M12 5v14"/>
				<path d="m19 12-7 7-7-7"/>
			</svg>
		</a>
	</div>
</section>

<style>
</style>
