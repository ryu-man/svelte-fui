import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';
import type { Layout } from './types';

const key = 'fui_radio_group_context';

export type RadioGroupContext = {
	disabled$: Writable<boolean>;
	required$: Writable<boolean>;
	value$: Writable<unknown>;
	name$: Writable<string | undefined>;
	layout$: Writable<Layout>;
};

const builders: Record<keyof RadioGroupContext, () => any> = {
	disabled$: () => writable(false),
	required$: () => writable(false),
	name$: () => writable(undefined),
	value$: () => writable(undefined),
	layout$: () => writable('vertical')
};

function getDefaultContext(context: Partial<RadioGroupContext> = {}) {
	const keys: Set<keyof RadioGroupContext> = new Set(['disabled$', 'required$', 'value$', 'name$']);

	Object.keys(context).forEach((key) => keys.delete(key));

	for (const key of keys) {
		context[key] = builders[key]();
	}

	return context as RadioGroupContext;
}

export function getRadioGroupContext() {
	return (getContext(key) || getDefaultContext()) as RadioGroupContext;
}

export function setRadioGroupContext(context: Partial<RadioGroupContext> = {}): RadioGroupContext {
	return setContext(key, getDefaultContext(context));
}
