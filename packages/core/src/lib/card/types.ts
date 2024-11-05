import type { Snippet } from 'svelte';

export type CardRootProps = {
	class?: string;
	appearance?: 'filled' | 'subtle' | 'outline' | 'filled-alternative';
	orientation?: 'horizontal' | 'vertical';
	size?: 'sm' | 'md' | 'lg';
	interactive?: boolean;
	alternative?: boolean;
	selected?: boolean;
	children?: Snippet<[]>;
};

export type CardHeaderProps = {
	class?: string;
	children?: Snippet<[]>;
};

export type CardBodyProps = {
	class?: string;
	as?: 'div' | 'p';
	children?: Snippet<[]>;
};

export type CardFooterProps = {
	class?: string;
	children?: Snippet<[]>;
};

export type CardPreviewProps = {
	class?: string;
	src?: string;
	alt?: string;
	children?: Snippet<[]>;
};
