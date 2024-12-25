import { getContext, setContext } from 'svelte';

const FLUENT_CONTEXT_KEY = '@fui/context';

export function getFluentContext<T>(id = '', ...segments: string[]) {
	const key = [FLUENT_CONTEXT_KEY, id, ...segments].filter(Boolean).join('/');
	return getContext<T | undefined>(key);
}

export function setFluentContext<T>(context: T, id = '', ...segments: string[]) {
	const key = [FLUENT_CONTEXT_KEY, id, ...segments].filter(Boolean).join('/');

	return setContext(key, context);
}

export function getSharedContext<T>(...segments: string[]) {
	return getFluentContext<T>('shared', ...segments);
}

export function setSharedContext<T>(context: T, ...segments: string[]) {
	return setFluentContext(context, 'shared', ...segments);
}

export function mergeContext<T>(...contexts: (T | undefined)[]) {
	return contexts.filter(Boolean).reduce<T>((acc, val) => ({ ...acc, ...val }), {} as T);
}
