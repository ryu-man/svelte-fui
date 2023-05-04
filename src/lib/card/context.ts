import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';

const key = 'fui_card_context';

type OnOptionClickOptions = {
	id: string;
	value: string;
	selected: boolean;
};
export type CardContext = {
	selectedId$: Writable<string>;
	selectedValue$: Writable<string>;
	onOptionClick: (options: OnOptionClickOptions) => void;
};

const builders: Record<keyof CardContext, () => any> = {
	selectedId$: () => writable(''),
	selectedValue$: () => writable(''),
	onOptionClick: () => () => {
		return;
	}
};

function buildContext(context: Partial<CardContext> = {}) {
	const keys: Set<keyof CardContext> = new Set(['selectedId$', 'selectedValue$']);

	Object.keys(context).forEach((key) => keys.delete(key));

	for (const key of keys) {
		context[key] = builders[key]();
	}

	return context as CardContext;
}

export function getCardContext() {
	return getContext(key) as CardContext;
}

export function setCardContext(context: Partial<CardContext> = {}): CardContext {
	return setContext(key, buildContext(context));
}
