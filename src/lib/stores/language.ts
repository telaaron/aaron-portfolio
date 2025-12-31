import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'de' | 'en';

// Get initial language from localStorage or default to German
const getInitialLanguage = (): Language => {
	if (browser) {
		const stored = localStorage.getItem('language');
		if (stored === 'de' || stored === 'en') return stored;
	}
	return 'de';
};

export const language = writable<Language>(getInitialLanguage());

// Subscribe to language changes and persist to localStorage
if (browser) {
	language.subscribe((value) => {
		localStorage.setItem('language', value);
	});
}

export function toggleLanguage() {
	language.update((current) => (current === 'de' ? 'en' : 'de'));
}

export function setLanguage(lang: Language) {
	language.set(lang);
}
