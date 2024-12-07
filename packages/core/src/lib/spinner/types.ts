import type { Snippet } from 'svelte';

export type SpinnerRootProps = {
	class?: string;
	delay?: number;
	size?: 'xt' | 'tn' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hg';
	appearance?: 'primary' | 'inverted';
	vertical?: boolean;
	reverse?: boolean;

	children?: Snippet<[]>;
};

export type SpinnerRingProps = {
	class?: string;
};

export type SpinnerLabelProps = {
	class?: string;
	children?: Snippet<[]>;
};
