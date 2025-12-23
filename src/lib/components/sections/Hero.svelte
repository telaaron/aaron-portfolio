<script lang="ts">
	import { onMount } from 'svelte';
	import { mode, setMode, type Mode } from '$lib/stores/mode';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let animationId: number;

	function handleModeChange(newMode: Mode) {
		setMode(newMode);
	}

	function animateGrid() {
		if (!ctx || !canvas) return;
		const gridSize = 50;
		let offset = 0;

		function draw() {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
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

			offset += 0.2;
			animationId = requestAnimationFrame(draw);
		}
		draw();
	}

	function animateParticles() {
		if (!ctx || !canvas) return;

		interface Particle {
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			opacity: number;
		}

		const particles: Particle[] = [];
		for (let i = 0; i < 80; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				size: Math.random() * 3 + 1,
				opacity: Math.random() * 0.5 + 0.3
			});
		}

		function draw() {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((p) => {
				ctx!.beginPath();
				ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx!.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
				ctx!.fill();

				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0) p.x = canvas.width;
				if (p.x > canvas.width) p.x = 0;
				if (p.y < 0) p.y = canvas.height;
				if (p.y > canvas.height) p.y = 0;
			});

			animationId = requestAnimationFrame(draw);
		}
		draw();
	}

	function updateBackground(currentMode: Mode) {
		if (!ctx || !canvas) return;
		cancelAnimationFrame(animationId);
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (currentMode === 'build') {
			animateGrid();
		} else {
			animateParticles();
		}
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		updateBackground($mode);

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			updateBackground($mode);
		};

		window.addEventListener('resize', handleResize);

		const unsubscribe = mode.subscribe((value) => {
			updateBackground(value);
		});

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationId);
			unsubscribe();
		};
	});
</script>

<section class="hero relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Canvas -->
	<canvas bind:this={canvas} class="absolute inset-0 z-0"></canvas>

	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-deep-black z-5"></div>

	<!-- Hero Content -->
	<div class="hero-content relative z-10 text-center px-4">
		<h1 class="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight glow-blue">
			AARON PFÜTZNER
		</h1>

		<!-- Mode Toggle -->
		<div class="mode-toggle flex items-center justify-center gap-4 mb-8">
			<button
				class="mode-btn px-6 py-3 rounded-lg font-mono text-sm md:text-base transition-all duration-300 border-2"
				class:active={$mode === 'build'}
				onclick={() => handleModeChange('build')}
			>
				BUILD
			</button>
			<div class="toggle-indicator w-8 md:w-12 h-0.5 bg-electric-blue transition-all duration-300"></div>
			<button
				class="mode-btn px-6 py-3 rounded-lg font-mono text-sm md:text-base transition-all duration-300 border-2"
				class:active={$mode === 'live'}
				onclick={() => handleModeChange('live')}
			>
				LIVE
			</button>
		</div>

		<!-- Dynamic Subtitle -->
		<p class="hero-subtitle text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 transition-all duration-500">
			{#if $mode === 'build'}
				Building the intelligence layer for AI travel
			{:else}
				Pushing limits through endurance and discipline
			{/if}
		</p>

		<!-- CTA -->
		<a
			href={$mode === 'build' ? '#projects' : '#endurance'}
			class="cta-button"
		>
			{#if $mode === 'build'}
				View Projects →
			{:else}
				Explore Journey →
			{/if}
		</a>

		<!-- Scroll Indicator -->
		<div class="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-gray-400">
				<path d="M12 5v14M19 12l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
	</div>
</section>

<style>
	.mode-btn {
		border-color: transparent;
		background: rgba(26, 26, 26, 0.8);
	}

	.mode-btn.active {
		background: rgba(0, 102, 255, 0.2);
		border-color: #0066ff;
	}

	.mode-btn:hover:not(.active) {
		background: rgba(42, 42, 42, 1);
		border-color: #3a3a3a;
	}

	.hero-title {
		text-shadow: 0 0 60px rgba(0, 102, 255, 0.4);
	}
</style>