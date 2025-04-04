import type { Alignment, Placement } from '@floating-ui/dom';
import { getFluentContextPath, type FluentContext } from '../internal/context';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = 'popover';

export type PopoverState<T = Record<string, any>> = {
	open: boolean;
	placements?: Placement[];
	placement?: Placement;
	alignment?: Alignment;
	offset?: number;
	extension?: T;
	dom: {
		overlay?: HTMLElement;
		trigger?: HTMLElement;
		indicator?: HTMLElement;
	};
};

export type PopoverContext<State = PopoverState> = FluentContext<State> & {
	events: {
		onchange?: <T>(event: CustomEvent, params: { context: T }) => void;
	};
	methods: {
		open: () => void;
		close: () => void;
		toggle: () => void;
	};
};

export function getPopoverContext<T extends PopoverContext>(): T | undefined {
	return getContext(getFluentContextPath(CONTEXT_KEY));
}

export function setPopoverContext<T extends PopoverContext>(context: T) {
	return setContext(getFluentContextPath(CONTEXT_KEY), context);
}
