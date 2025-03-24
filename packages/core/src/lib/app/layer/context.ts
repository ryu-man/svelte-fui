import type { FluentContext } from '@svelte-fui/core/internal/context';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = '@svelte-fui/context/layer';

export type LayerState = {
	id?: string;
	dom: {
		inner?: HTMLElement;
		outer?: HTMLElement;
	};
};

export type LayerContext = FluentContext<LayerState> & {
	methods: {
		openBackdrop: () => void;
		closeBackdrop: () => void;
	};
};

export function getLayerContext(): LayerContext {
	return getContext(CONTEXT_KEY);
}

export function setLayerContext(context: LayerContext): LayerContext {
	return setContext(CONTEXT_KEY, context);
}
