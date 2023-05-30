import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';

const key = 'fui_fluent_app_context';

export type FluentAppContext = {
	themeElement$: Writable<HTMLElement | undefined>;
	appElement$: Writable<HTMLElement | undefined>;
};

const builders: Record<keyof FluentAppContext, () => any> = {
	themeElement$: () => writable(undefined),
	appElement$: () => writable(undefined)
};

function buildContext(context: Partial<FluentAppContext> = {}) {
	const keys: Set<keyof FluentAppContext> = new Set(['themeElement$', 'appElement$']);

	Object.keys(context).forEach((key) => keys.delete(key));

	for (const key of keys) {
		context[key] = builders[key]();
	}

	return context as FluentAppContext;
}

export function getFluentAppContext() {
	return getContext(key) as FluentAppContext;
}

export function setFluentAppContext(context: Record<string, unknown> = {}): FluentAppContext {
	return setContext(key, buildContext(context));
}
