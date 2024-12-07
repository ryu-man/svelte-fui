import type { Alignment, Placement } from '@floating-ui/dom';
import { getFluentContext, setFluentContext, type FluentContext } from '../internal/context';

export const FUI_POPOVER_CONTEXT_ID = 'popover';

export type PopoverContext = FluentContext & {
	readonly state: {
		data: {};
		elements: {
			overlay?: HTMLElement;
			trigger?: HTMLElement;
			indicator?: HTMLElement;
		};
	};
	readonly derived: {
		data: {
			open: boolean;
			placements?: Placement[];
			alignment?: Alignment;
			offset?: number;
		};
		elements: {
			overlay?: HTMLElement;
			trigger?: HTMLElement;
			indicator?: HTMLElement;
		};
	};
	events: {
		onchange?: <T>(params: { context: T }) => void;
	};
	methods: {
		open: () => void;
		close: () => void;
		toggle: () => void;
	};
};

export function createPopoverContext() {}

export function getPopoverContext(): PopoverContext {
	return getFluentContext(FUI_POPOVER_CONTEXT_ID);
}

export function setPopoverContext(context: PopoverContext) {
	return setFluentContext(context, FUI_POPOVER_CONTEXT_ID);
}
