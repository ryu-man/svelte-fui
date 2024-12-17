import type { Snippet } from 'svelte';

export type FieldState = 'none' | 'error' | 'warning' | 'success' | undefined;

export type FieldProps = {
	class?: string;
	orientation?: 'horizontal' | 'vertical';
	size?: 'sm' | 'md' | 'lg';
	state?: FieldState;
	labeless?: boolean;
	open?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	children?: Snippet<[]>;
};
