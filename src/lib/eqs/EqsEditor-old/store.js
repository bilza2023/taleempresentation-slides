

import { writable } from 'svelte/store';

export const currentTimeStore = writable(0);
export const itemsStore = writable([]);