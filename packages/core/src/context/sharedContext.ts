import { getContext, hasContext, setContext } from 'svelte';
import { type Readable, type Writable, derived, get, readonly, writable } from 'svelte/store';

export const SVELTE_FUI_SHARED_CONTEXT_KEY = 'svelte-fui-shared-context-key';

export type SharedContext<T> = Record<string, Record<string, unknown>> & T;

export function getSharedContext<T>(key?: 'input' | 'label'): Readable<SharedContext<T>> {
	const context$ = getContext(SVELTE_FUI_SHARED_CONTEXT_KEY) as Writable<SharedContext<T>>;

	if (key) {
		return derived(context$, (val) => val[key] as SharedContext<T>);
	}

	return readonly(context$);
}

export function setSharedContext<T>(context: SharedContext<T>): Writable<SharedContext<T>> {
	if (hasContext(SVELTE_FUI_SHARED_CONTEXT_KEY)) {
		// extends and overrides the existent context
		const existedContext = get(getSharedContext());

		setContext(SVELTE_FUI_SHARED_CONTEXT_KEY, writable(structuredClone({ ...existedContext, ...context })));
	}

	return setContext(SVELTE_FUI_SHARED_CONTEXT_KEY, writable(structuredClone(context)));
}
