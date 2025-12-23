import { writable } from 'svelte/store';

export type Mode = 'build' | 'live';

export const mode = writable<Mode>('build');

export function toggleMode() {
	mode.update((current) => (current === 'build' ? 'live' : 'build'));
}

export function setMode(newMode: Mode) {
	mode.set(newMode);
}
