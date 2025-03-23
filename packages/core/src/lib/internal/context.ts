import { getContext, setContext } from 'svelte';

const FLUENT_CONTEXT_KEY = '@fui/context';

export type FluentContext<S> = {
	id: string;
	type: string;
	parent: () => FluentContext<S> | undefined;
	update: (fn: (state: S) => void) => void;
	readonly state: S;
};

export function getFluentContextPath(...segments: string[]){
	return [FLUENT_CONTEXT_KEY, ...segments].filter(Boolean).join('/')
}

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

export function defineProperty<T extends object, R>(
	base: T,
	property: keyof T,
	get: () => R,
	set?: (value: R) => void
) {
	return Object.defineProperty(base, property, {
		get: get,
		set: set
	});
}

export type StateDefiner<T extends object> = (base: T) => T;

export function defineState<T extends object>(definers: StateDefiner<T>[], base: T = {} as T) {
	let outcome = { ...base };

	for (const definer of definers) {
		outcome = definer(outcome);
	}

	return outcome;
}
