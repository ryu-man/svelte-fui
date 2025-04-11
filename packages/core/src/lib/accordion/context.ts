import { getContext, setContext } from 'svelte';
import type { FluentContext } from '../internal/context';

const ACCORDION_CONTEXT_KEY = '@fui/context/accordion';

type AccordionItem<T = any> = {
	value: string;
	data: T | undefined;
};

export type AccordionState<T = any> = {
	values: string[];
	collapsible: boolean;
	multiple: boolean;
	items: {
		all: Map<string, AccordionItem<T>>;
		active: AccordionItem<T>[];
	};
	dom: {
		root?: HTMLElement;
		header?: HTMLElement;
		body?: HTMLElement;
	};
};

export type AccordionContext<T = any> = FluentContext<AccordionState<T>> & {
	events: {
		onchange: (ev: CustomEvent, params: { context: AccordionContext<T> }) => void;
	};
	methods: {
		open: (values: string[]) => void;
		close: (values: string[]) => void;
		toggle: (values: string[]) => void;

		mount: (value: string, item: AccordionItem<T>) => void;
		unmount: (value: string) => void;
	};
};

export function getAccordionContext<T = any>(): AccordionContext<T> {
	return getContext(ACCORDION_CONTEXT_KEY);
}

export function setAccordionContext<T>(context: AccordionContext<T>): AccordionContext<T> {
	return setContext(ACCORDION_CONTEXT_KEY, context);
}

export const ACCORDION_ITEM_CONTEXT_KEY = '@fui/context/accordion/item';

export type AccordionItemState<T> = {
	value: string;
	data?: T;
	active: boolean;
	disabled: boolean;
};

export type AccordionItemContext<T> = FluentContext<AccordionItemState<T>> & {
	rootContext: () => AccordionContext<T>;
	methods: {
		open: () => void;
		close: () => void;
		toggle: () => void;
	};
};

export function getAccordionItemContext<T = any>(): AccordionItemContext<T> {
	return getContext(ACCORDION_ITEM_CONTEXT_KEY);
}

export function setAccordionItemContext<T = any>(
	context: AccordionItemContext<T>
): AccordionItemContext<T> {
	return setContext(ACCORDION_ITEM_CONTEXT_KEY, context);
}
