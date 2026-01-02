<script lang="ts">
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translations';
	import { Send, CheckCircle, AlertCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { 
		sectionTitleReveal,
		blurFadeSection,
		ensureGSAP,
		cleanupScrollTriggers 
	} from '$lib/utils/animations';

	let translations = $derived(t($language));

	let formState = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');
	
	// Element refs
	let titleRef = $state<HTMLElement | null>(null);
	let formRef = $state<HTMLElement | null>(null);

	let formData = $state({
		name: '',
		email: '',
		category: '',
		message: ''
	});

	const categories = $derived([
		{ value: 'business', label: $language === 'de' ? 'Business Anfrage' : 'Business Inquiry' },
		{ value: 'klavierunterricht', label: $language === 'de' ? 'Klavierunterricht' : 'Piano Lessons' },
		{ value: 'collaboration', label: $language === 'de' ? 'Kollaboration' : 'Collaboration' },
		{ value: 'other', label: $language === 'de' ? 'Sonstiges' : 'Other' }
	]);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formState = 'submitting';

		try {
			const response = await fetch('https://formspree.io/f/xovdkjlr', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					category: formData.category,
					message: formData.message
				})
			});

			if (response.ok) {
				formState = 'success';
				formData = { name: '', email: '', category: '', message: '' };
			} else {
				throw new Error('Form submission failed');
			}
		} catch {
			formState = 'error';
			errorMessage = $language === 'de' 
				? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.' 
				: 'Something went wrong. Please try again.';
		}
	}

	function resetForm() {
		formState = 'idle';
		errorMessage = '';
	}

	onMount(() => {
		setTimeout(async () => {
			const { gsap } = await ensureGSAP();
			if (!gsap) return;
			
			// Section label
			const label = document.querySelector('#kontakt .section-label');
			if (label) {
				gsap.fromTo(label,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						ease: 'none',
						scrollTrigger: {
							trigger: label,
							start: 'top 98%',
							end: 'top 75%',
							scrub: 1
						}
					}
				);
			}
			
			if (titleRef) await sectionTitleReveal(titleRef);
			
			// Description text
			const descText = document.querySelector('#kontakt .desc-text');
			if (descText) {
				gsap.fromTo(descText,
					{ opacity: 0, y: 25 },
					{
						opacity: 1,
						y: 0,
						ease: 'none',
						scrollTrigger: {
							trigger: descText,
							start: 'top 95%',
							end: 'top 70%',
							scrub: 1
						}
					}
				);
			}
			
			// Premium blur-fade section reveal
			if (formRef) await blurFadeSection(formRef);
		}, 100);

		return () => cleanupScrollTriggers();
	});
</script>

<section id="kontakt" class="py-24 px-4 md:px-8 bg-gray-900/30 relative overflow-hidden">
	<div class="container max-w-4xl mx-auto relative z-10">
		<!-- Section header with GSAP -->
		<div class="text-center mb-16">
			<p class="section-label opacity-0 text-orange-400 font-mono text-sm tracking-widest uppercase mb-2">
				{$language === 'de' ? 'Kontakt' : 'Contact'}
			</p>
			<h2 bind:this={titleRef} class="text-4xl md:text-5xl font-bold text-white mb-4">
				{$language === 'de' ? 'Lass uns reden' : "Let's Talk"}
			</h2>
			<p class="desc-text opacity-0 text-gray-400 max-w-xl mx-auto">
				{$language === 'de' 
					? 'Interesse an einer Zusammenarbeit, Klavierunterricht oder einfach nur ein Gespräch? Schreib mir!' 
					: 'Interested in collaboration, piano lessons, or just a chat? Get in touch!'}
			</p>
		</div>

		<!-- Form with mask reveal -->
		<div bind:this={formRef}>
			{#if formState === 'success'}
				<div class="text-center py-16 bg-gray-900/50 border border-green-500/30 rounded-2xl">
					<CheckCircle size={64} class="text-green-500 mx-auto mb-6" />
					<h3 class="text-2xl font-bold text-white mb-2">
						{$language === 'de' ? 'Nachricht gesendet!' : 'Message Sent!'}
					</h3>
					<p class="text-gray-400 mb-6">
						{$language === 'de' 
							? 'Danke für deine Nachricht. Ich melde mich bald!' 
							: 'Thanks for your message. I\'ll get back to you soon!'}
					</p>
					<button
						onclick={resetForm}
						class="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
					>
						{$language === 'de' ? 'Weitere Nachricht senden' : 'Send Another Message'}
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-6 bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
					{#if formState === 'error'}
						<div class="flex items-center gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-red-400">
							<AlertCircle size={20} />
							<span>{errorMessage}</span>
						</div>
					{/if}

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<!-- Name -->
						<div>
							<label for="name" class="block text-sm font-medium text-gray-300 mb-2">
								{$language === 'de' ? 'Name' : 'Name'} *
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
								placeholder={$language === 'de' ? 'Dein Name' : 'Your name'}
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="block text-sm font-medium text-gray-300 mb-2">
								E-Mail *
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
								placeholder={$language === 'de' ? 'deine@email.de' : 'your@email.com'}
							/>
						</div>
					</div>

					<!-- Category -->
					<div>
						<label for="category" class="block text-sm font-medium text-gray-300 mb-2">
							{$language === 'de' ? 'Betreff' : 'Subject'} *
						</label>
						<select
							id="category"
							bind:value={formData.category}
							required
							class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
						>
							<option value="" disabled>{$language === 'de' ? 'Wähle eine Kategorie' : 'Choose a category'}</option>
							{#each categories as cat}
								<option value={cat.value}>{cat.label}</option>
							{/each}
						</select>
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="block text-sm font-medium text-gray-300 mb-2">
							{$language === 'de' ? 'Nachricht' : 'Message'} *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors resize-none"
							placeholder={$language === 'de' ? 'Deine Nachricht...' : 'Your message...'}
						></textarea>
					</div>

					<!-- Submit Button -->
					<div class="flex justify-end">
						<button
							type="submit"
							disabled={formState === 'submitting'}
							class="flex items-center gap-3 px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-400 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if formState === 'submitting'}
								<div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
								{$language === 'de' ? 'Senden...' : 'Sending...'}
							{:else}
								<Send size={20} />
								{$language === 'de' ? 'Nachricht senden' : 'Send Message'}
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>

		<!-- Alternative contact -->
		<div class="text-center mt-12 text-gray-500 text-sm">
			<p>
				{$language === 'de' ? 'Oder schreib mir direkt an' : 'Or email me directly at'}{' '}
				<a href="mailto:aaron@pfuetzners.com" class="text-orange-400 hover:text-orange-300 transition-colors hover:underline">
					aaron@pfuetzners.com
				</a>
			</p>
		</div>
	</div>
</section>
