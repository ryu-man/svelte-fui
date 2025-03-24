import type { Snippet } from 'svelte';
import type { LayerContext } from './context';

export type ContextLayer = {
	readonly id: string;
	readonly context: LayerContext
}

export type LayoutOuterProps = {
	class?: string;
	id: string;
	element?: HTMLElement
	children?: Snippet<[]>;
};

export type LayoutInnerProps = {
	class?: string;
	id: string;
	element?: HTMLElement
	children?: Snippet<[]>;
};
