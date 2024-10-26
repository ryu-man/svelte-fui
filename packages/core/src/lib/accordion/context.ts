import { getContext, setContext } from 'svelte';

const ACCORDION_CONTEXT_KEY = '@fui/context/accordion';

type AccordionItem<T = any> = {
	value: string;
	data: T | undefined;
};

export type AccordionContext<T = any> = {
	id: string;
	readonly state: {};
	readonly derived: {
		data: {
			value?: string;
			values: string[];
			collapsible: boolean;
			multiple: boolean;
			items: {
				all: Record<string, AccordionItem<T>>;
				active: AccordionItem<T>[];
			};
		};
	};
	events: {
		onchange: (ev: Event, ...args: any[]) => void;
	};
	methods: {
		open: (values: string[]) => void;
		close: (values: string[]) => void;
		toggle: (values: string[]) => void;

		setMultiple: (value: boolean) => void;
		setCollapsible: (value: boolean) => void;

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

export type AccordionItemContext<T> = {
	id: string;
	parent: () => AccordionContext<T>;
	readonly derived: {
		value: string;
		data?: T;
		active: boolean;
		disabled: boolean;
	};
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
