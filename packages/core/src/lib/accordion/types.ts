import type { Snippet } from 'svelte';
import type { AccordionContext, AccordionItemContext } from './context';
import type { ReferenceFunction } from '../types';

export type AccordionRootProps<T = any> = {
	class?: string;
	value?: string;
	values?: string[];
	data?: T[];
	multiple?: boolean;
	collapsible?: boolean;
	element?: HTMLElement;
	children?: Snippet<[]>;
	ref?: ReferenceFunction;
};

export type AccordionItemRootProps<T = any> = {
	class?: string;
	value?: string;
	data?: T;
	disabled?: boolean;
	element?: HTMLElement;
	children?: Snippet<
		[
			{
				context: { item: AccordionItemContext<T>; root: AccordionContext<T> };
			}
		]
	>;
	ref?: ReferenceFunction;
};

export type AccordionItemHeaderProps<T = any> = {
	class?: string;
	as?: 'button' | 'a';
	element?: HTMLElement;
	children?: Snippet<
		[
			{
				context: AccordionItemContext<T>;
			}
		]
	>;
	ref?: ReferenceFunction;
	onclick?: (ev: Event, options: { context: AccordionItemContext<T> }) => void;
};

export type AccordionItemBodyProps = {
	class?: string;
	element?: HTMLElement;

	children?: Snippet<[]>;
	ref?: ReferenceFunction;
};

export type AccordionItemIndicatorProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[{ active: boolean }]>;
	ref?: ReferenceFunction;
};
