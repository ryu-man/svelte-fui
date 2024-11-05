import type { Snippet } from 'svelte';

export type LayoutRootProps = {
	class?: string;
	id: string;
	children?: Snippet<[]>;
};
