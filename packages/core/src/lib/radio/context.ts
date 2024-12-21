import { getContext, setContext } from 'svelte';
import { type Writable } from 'svelte/store';
import type { Layout } from './types';

const key = 'fui_radio_group_context';

export type RadioGroupContext = {
	disabled$: Writable<boolean>;
	required$: Writable<boolean>;
	value$: Writable<unknown>;
	name$: Writable<string | undefined>;
	layout$: Writable<Layout>;

	methods: {
		select: (value: string) => void;
	};
};

export function getRadioGroupContext() {
	return getContext(key) as RadioGroupContext;
}

export function setRadioGroupContext(context: RadioGroupContext): RadioGroupContext {
	return setContext(key, context);
}
