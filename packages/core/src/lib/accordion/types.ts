import type { Snippet } from 'svelte';
import type { AccordionContext, AccordionItemContext } from './context';

export type AccordionRootProps<T = any> = {
	class?: string;
	value?: string;
	values?: string[];
	data?: T[];
	multiple?: boolean;
	collapsible?: boolean;
	children?: Snippet<[]>;
};

export type AccordionItemRootProps<T = any> = {
	class?: string;
	value?: string;
	data?: T;
	disabled?: boolean;
	children?: Snippet<
		[
			{
				context: { item: AccordionItemContext<T>; root: AccordionContext<T> };
			}
		]
	>;
};

export type AccordionItemHeaderProps<T = any> = {
	class?: string;
	as?: 'button' | 'a';
	children?: Snippet<
		[
			{
				context: { item: AccordionItemContext<T>; root: AccordionContext<T> };
			}
		]
	>;
	onclick?: (
		ev: Event,
		options: { context: { item: AccordionItemContext<T>; root: AccordionContext<T> } }
	) => void;
};

export type AccordionItemBodyProps = {
	class?: string;
	children?: Snippet<[]>;
};

export type AccordionItemIndicatorProps = {
	class?: string;
	children?: Snippet<[{ active: boolean }]>;
};
