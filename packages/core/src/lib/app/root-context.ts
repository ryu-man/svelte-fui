import { getContext, setContext } from 'svelte';
import type { FluentContext } from '../internal/context';

export const FUI_ROOT_CONTEXT_KEY = 'fui-context/root';

export type FluentRootContext = FluentContext & {
	readonly state: {
		data: {};
		elements: {
			root?: HTMLElement;
			app?: HTMLElement;
			layouts: Record<
				string,
				{
					element?: HTMLElement;
					id: string;
				}
			>;
		};
	};

	readonly derived: {
		data: {
			screens: {
				all: Record<string, string>;
				active?: { name: string; width: number };
			};
		};
		elements: {
			root?: HTMLElement;
			app?: HTMLElement;
			layouts: Record<
				string,
				{
					element?: HTMLElement;
					id: string;
				}
			>;
		};
	};
};

export function getFluentRootContext() {
	return getContext(FUI_ROOT_CONTEXT_KEY) as FluentRootContext;
}

export function setFluentRootContext(context: FluentRootContext): FluentRootContext {
	return setContext(FUI_ROOT_CONTEXT_KEY, context);
}
