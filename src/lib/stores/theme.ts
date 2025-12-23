import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

// Currently only dark mode is supported
export const theme = writable<Theme>('dark');

export function toggleTheme() {
	theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
}
