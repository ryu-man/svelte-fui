import { onDestroy, onMount } from 'svelte';
import { readonly, writable } from 'svelte/store';

export function mount() {
	const store = writable(false);

	onMount(() => {
		store.set(true);
	});

	onDestroy(() => {
		store.set(false);
	});

	return readonly(store);
}
