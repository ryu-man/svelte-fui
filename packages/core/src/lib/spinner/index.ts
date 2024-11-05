import SpinnerLabel from './spinner-label.svelte';
import SpinnerRing from './spinner-ring.svelte';
import SpinnerRoot from './spinner-root.svelte';

export * from './types';

export const Spinner = {
	Root: SpinnerRoot,
	Ring: SpinnerRing,
	Label: SpinnerLabel
};
