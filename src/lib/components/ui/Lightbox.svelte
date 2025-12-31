<script lang="ts">
	import { ChevronLeft, ChevronRight, X } from 'lucide-svelte';

	let { 
		images = [], 
		currentIndex = $bindable(0), 
		isOpen = $bindable(false) 
	}: { 
		images: string[]; 
		currentIndex: number; 
		isOpen: boolean;
	} = $props();

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function close() {
		isOpen = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isOpen) return;
		
		switch (e.key) {
			case 'Escape':
				close();
				break;
			case 'ArrowLeft':
				prev();
				break;
			case 'ArrowRight':
				next();
				break;
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen && images.length > 0}
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div 
		class="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && close()}
		role="dialog"
		aria-modal="true"
		aria-label="Image gallery"
		tabindex="-1"
	>
		<!-- Close button -->
		<button
			onclick={close}
			class="absolute top-4 right-4 z-60 p-2 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
			aria-label="Close gallery"
		>
			<X size={28} />
		</button>

		<!-- Previous button -->
		{#if images.length > 1}
			<button
				onclick={prev}
				class="absolute left-4 z-60 p-3 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
				aria-label="Previous image"
			>
				<ChevronLeft size={32} />
			</button>
		{/if}

		<!-- Image container -->
		<div class="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
			<img
				src={images[currentIndex]}
				alt="Gallery image {currentIndex + 1} of {images.length}"
				class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-fade-in"
			/>
		</div>

		<!-- Next button -->
		{#if images.length > 1}
			<button
				onclick={next}
				class="absolute right-4 z-60 p-3 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
				aria-label="Next image"
			>
				<ChevronRight size={32} />
			</button>
		{/if}

		<!-- Image counter -->
		{#if images.length > 1}
			<div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-4 py-2 rounded-full">
				{currentIndex + 1} / {images.length}
			</div>
		{/if}

		<!-- Thumbnail strip -->
		{#if images.length > 1 && images.length <= 10}
			<div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
				{#each images as image, i}
					<button
						onclick={() => currentIndex = i}
						class="w-12 h-12 rounded-lg overflow-hidden border-2 transition-all {i === currentIndex ? 'border-electric-blue scale-110' : 'border-transparent opacity-50 hover:opacity-100'}"
					>
						<img src={image} alt="" class="w-full h-full object-cover" />
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.2s ease-out;
	}
</style>
