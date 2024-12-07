import type { Snippet } from 'svelte';

export type CardRootProps = {
	class?: string;
	appearance?: 'filled' | 'subtle' | 'outline' | 'filled-alternative';
	orientation?: 'horizontal' | 'vertical';
	size?: 'sm' | 'md' | 'lg';
	interactive?: boolean;
	alternative?: boolean;
	selected?: boolean;
	element?: HTMLElement;
	children?: Snippet<[]>;
};

export type CardHeaderProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[]>;
};

export type CardBodyProps = {
	class?: string;
	as?: 'div' | 'p';
	element?: HTMLElement;
	children?: Snippet<[]>;
};

export type CardFooterProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[]>;
};

export type CardPreviewProps = {
	class?: string;
	src?: string;
	alt?: string;
	element?: HTMLElement;
	children?: Snippet<[]>;
};
