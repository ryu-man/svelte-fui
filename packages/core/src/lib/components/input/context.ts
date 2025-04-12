import { getContext, setContext } from 'svelte';
import { type Readable, type Writable } from 'svelte/store';

export const FUI_INPUT_CONTEXT_KEY = 'fui-context/input';

export type FluentInputContext = {};

export function getFluentInputContext() {
	return getContext(FUI_INPUT_CONTEXT_KEY) as FluentInputContext;
}

export function setFluentInputContext(context: FluentInputContext): FluentInputContext {
	return setContext(FUI_INPUT_CONTEXT_KEY, context);
}
