import type { HTMLAttributes } from 'svelte/elements';

export type LabelSize = 'sm' | 'md' | 'lg';

export type LabelProps = HTMLAttributes<HTMLLabelElement> & {
	disabled?: boolean;
	required?: boolean;
	size?: LabelSize;
	class?: string;
	element?: HTMLElement
};