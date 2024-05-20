import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';

const key = 'fui_fluent_app_context';

export type FluentRootContext = {
	themeElement$: Writable<HTMLElement | undefined>;
	appElement$: Writable<HTMLElement | undefined>;
};

const builders: Record<keyof FluentRootContext, () => any> = {
	themeElement$: () => writable(undefined),
	appElement$: () => writable(undefined)
};

function buildContext(context: Partial<FluentRootContext> = {}) {
	const keys: Set<keyof FluentRootContext> = new Set(['themeElement$', 'appElement$']);

	Object.keys(context).forEach((key) => keys.delete(key));

	for (const key of keys) {
		context[key] = builders[key]();
	}

	return context as FluentRootContext;
}

export function getFluentRootContext() {
	return getContext(key) as FluentRootContext;
}

export function setFluentRootContext(context: Record<string, unknown> = {}): FluentRootContext {
	return setContext(key, buildContext(context));
}
