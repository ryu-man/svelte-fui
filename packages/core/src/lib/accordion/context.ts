import { buildContext } from '@svelte-fui/core/utils/context';
import { getContext, setContext } from 'svelte';
import { type Readable, type Writable, writable } from 'svelte/store';

const ACCORDION_CONTEXT_KEY = 'fui_accordion_context_key';

type AccordionItem = {
	value: string;
	data: unknown | undefined;
	selected?: boolean;
};

export type AccordionContext = {
	selectedValue$: Writable<string | number | string[] | number[] | undefined>;
	selectedData$: Writable<unknown>;
	collapsible$: Readable<boolean>;
	multiple$: Readable<boolean>;
	items$: Writable<Record<string, AccordionItem>>;
};

const builders: Record<keyof AccordionContext, () => any> = {
	selectedValue$: () => writable(''),
	selectedData$: () => writable(),
	collapsible$: () => writable(false),
	multiple$: () => writable(false),
	items$: () => writable({})
};

export function getAccordionContext() {
	return getContext(ACCORDION_CONTEXT_KEY) as AccordionContext;
}

export function setAccordionContext(context: Partial<AccordionContext> = {}): AccordionContext {
	return setContext(ACCORDION_CONTEXT_KEY, buildContext(context, builders));
}

export const ACCORDIO_ITEM_CONTEXT_KEY = 'fui_accordion_item_context_key';

export type AccordionItemContext = {
	active$: Readable<boolean>;
};

const accordionItemBuilders: Record<keyof AccordionItemContext, () => any> = {
	active$: () => writable(false)
};

export function getAccordionItemContext() {
	return getContext(ACCORDIO_ITEM_CONTEXT_KEY) as AccordionItemContext;
}

export function setAccordionItemContext(context: Partial<AccordionItemContext> = {}): AccordionItemContext {
	return setContext(ACCORDIO_ITEM_CONTEXT_KEY, buildContext(context, accordionItemBuilders));
}
