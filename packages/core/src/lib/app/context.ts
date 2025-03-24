import { getContext, setContext } from 'svelte';
import type { FluentContext } from '../internal/context';
import type { ContextLayer } from './layer/types';

const CONTEXT_KEY = '@svelte-fui/context/root';

export type RootState = {
	readonly screens: {
		all: Record<string, string>;
		active?: { name: string; width: number };
	};
	readonly viewport: {
		width: number;
		height: number;
	};

	readonly layers: Map<string, ContextLayer>;

	readonly dom: {
		root?: HTMLElement;
		app?: HTMLElement;
	};
};

export type FluentRootContext = FluentContext<RootState> & {
	methods: {
		getLayer: (id: string) => ContextLayer|undefined;
		setLayer: (id: string, context: ContextLayer) => ContextLayer;
	};
};

export function getFluentRootContext() {
	return getContext(CONTEXT_KEY) as FluentRootContext;
}

export function setFluentRootContext(context: FluentRootContext): FluentRootContext {
	return setContext(CONTEXT_KEY, context);
}
