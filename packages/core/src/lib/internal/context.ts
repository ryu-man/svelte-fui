import { getContext, setContext } from 'svelte';

const FLUENT_CONTEXT_KEY = '@fui/context';

export type FluentContext = {
	id: string;
	type: string;
	parent?: () => FluentContext | undefined;
};

export function getFluentContext<T>(...segments: (string | undefined)[]) {
	const key = [FLUENT_CONTEXT_KEY, ...segments].filter(Boolean).join('/');
	return getContext<T>(key);
}

export function setFluentContext<T>(context: T, ...segments: (string | undefined)[]) {
	const key = [FLUENT_CONTEXT_KEY, ...segments].filter(Boolean).join('/');

	return setContext(key, context);
}

export function getSharedContext<T>(id = '', ...segments: string[]) {
	return getFluentContext<T>('shared', id, ...segments);
}

export function setSharedContext<T>(context: T, id = '', ...segments: string[]) {
	return setFluentContext(context, 'shared', id, ...segments);
}

export function mergeContext<T>(...contexts: (T | undefined)[]) {
	return contexts.filter(Boolean).reduce<T>((acc, val) => ({ ...acc, ...val }), {} as T);
}
