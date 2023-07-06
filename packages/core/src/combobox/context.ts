import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';

const key = 'fui_combobox_context';

type OnOptionClickOptions = {
	id: string;
	value: string;
	selected: boolean;
};

type Item = {
	id: string;
	value: string;
	selected?: boolean;
};

export type ComboboxContext = {
	selectedId$: Writable<string>;
	selectedValue$: Writable<string>;
	selectedData$: Writable<unknown>;
	items$: Writable<Record<string, Item>>;
	onOptionClick: (options: OnOptionClickOptions) => void;
};

const builders: Record<keyof ComboboxContext, () => any> = {
	selectedId$: () => writable(''),
	selectedValue$: () => writable(''),
	selectedData$: () => writable(),
	items$: () => writable({}),
	onOptionClick: () => () => {
		return;
	}
};

function buildContext(context: Partial<ComboboxContext> = {}) {
	const keys: Set<keyof ComboboxContext> = new Set(Object.keys(builders));

	Object.keys(context).forEach((key) => keys.delete(key));

	for (const key of keys) {
		context[key] = builders[key]();
	}

	return context as ComboboxContext;
}

export function getComboboxContext() {
	return getContext(key) as ComboboxContext;
}

export function setComboboxContext(context: Partial<ComboboxContext> = {}): ComboboxContext {
	return setContext(key, buildContext(context));
}
