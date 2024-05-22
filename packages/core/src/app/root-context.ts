import { getContext, setContext } from 'svelte';
import { type Readable, type Writable } from 'svelte/store';

export const FUI_ROOT_CONTEXT_KEY = 'fui-context/root';

export type FluentRootContext = {
	appElement$: Writable<HTMLElement | undefined>;

	rootElement: Writable<HTMLElement | undefined>;
	overlayElement: Writable<HTMLElement | undefined>;
	screens: Readable<Record<string, string>>;
	activeScreen: Readable<[key: string, value: string]>;
};

export function getFluentRootContext() {
	return getContext(FUI_ROOT_CONTEXT_KEY) as FluentRootContext;
}

export function setFluentRootContext(context: FluentRootContext): FluentRootContext {
	return setContext(FUI_ROOT_CONTEXT_KEY, context);
}
