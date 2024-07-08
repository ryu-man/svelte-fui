import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

export const FUI_BACKDROP_CONTEXT_KEY = 'fui-context/backdrop';

export type BackdropContext = {
	dependencies: Set<string>;
	open: Writable<boolean>;
	openBackdrop: (id: string) => void;
	closeBackdrop: (is: string) => void;
};

export function getBackdropContext(): BackdropContext {
	return getContext(FUI_BACKDROP_CONTEXT_KEY);
}

export function setBackdropContext(context: BackdropContext): BackdropContext {
	return setContext(FUI_BACKDROP_CONTEXT_KEY, context);
}
