import type { Snippet } from 'svelte';
import type { RadioGroupContext } from './context';

export type RadioGroupLayout = 'vertical' | 'horizontal' | 'stacked-horizontal';

export type RadioProps = {
	class?: string;
	id?: string;
	name?: string;
	value?: string;
	checked?: boolean;
};

export type RadioGroupProps = {
	class?: string;
	name?: string;
	value?: string;
	layout?: RadioGroupLayout;
	disabled?: boolean;
	required?: boolean;
	children?: Snippet<
		[
			{
				context: RadioGroupContext;
			}
		]
	>;
};
