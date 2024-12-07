import type { Snippet } from 'svelte';

export type IconProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[]>;
};
