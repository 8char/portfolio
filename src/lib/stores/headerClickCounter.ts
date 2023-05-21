import { writable } from 'svelte/store';

export const headerClickCounter = writable<number>(0);
