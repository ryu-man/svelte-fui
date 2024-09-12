import { getContext, setContext } from 'svelte';

const FLUENT_CONTEXT_KEY = '@fui/context';

export function getFluentContext<T>(id = '', ...segments: string[]) {
	const key = [FLUENT_CONTEXT_KEY, id, ...segments].join('/');
	return getContext<T | undefined>(key);
}

export function setFluentContext<T>(context: T, id = '', ...segments: string[]) {
	const key = [FLUENT_CONTEXT_KEY, id, ...segments].join('/');

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

export function inheritContext<T>(context: T, id = '', ...segments: string[]) {
	const context_anscestor = getFluentContext<T>(id, ...segments);

	return setFluentContext(mergeContext(context_anscestor, context), id, ...segments);
}
