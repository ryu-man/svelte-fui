import type { Snippet } from 'svelte';
import type { ReferenceFunction } from '../../types';

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
	ref?: ReferenceFunction;
};

export type CardHeaderProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[]>;
	ref?: ReferenceFunction;
};

export type CardBodyProps = {
	class?: string;
	as?: 'div' | 'p';
	element?: HTMLElement;
	children?: Snippet<[]>;
	ref?: ReferenceFunction;
};

export type CardFooterProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[]>;
	ref?: ReferenceFunction;
};

export type CardPreviewProps = {
	class?: string;
	src?: string;
	alt?: string;
	element?: HTMLElement;
	children?: Snippet<[]>;
	ref?: ReferenceFunction;
};
