import { getContext, setContext } from 'svelte';
import { type Readable, type Writable, writable } from 'svelte/store';

export const SVELTE_FUI_SHARED_CONTEXT_KEY = '@fui/context/shared';

export type SharedContext<T> = Record<string, unknown> & T;

/**
 * 
 * @deprecated
 */
export function getSharedContext<T>(...segment: string[]): Readable<SharedContext<T>> {
	return getContext(
		[SVELTE_FUI_SHARED_CONTEXT_KEY, ...segment.filter(Boolean)].join('/')
	) as Writable<SharedContext<T>>;
}

/**
 * 
 * @deprecated
 */
export function setSharedContext<T>(
	context: SharedContext<T>,
	...segments: string[]
): Writable<SharedContext<T>> {
	return setContext(
		[SVELTE_FUI_SHARED_CONTEXT_KEY, ...segments.filter(Boolean)].join('/'),
		writable(structuredClone(context))
	);
}
