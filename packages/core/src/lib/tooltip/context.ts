import type { Alignment, Placement } from '@floating-ui/dom';
import { getFluentContext, setFluentContext } from '../internal/context';
import type { PopoverContext } from '../popover';

const namespace = 'tooltip';

export type TooltipContext = PopoverContext & {
	id: string;
	type: 'tooltip';
	readonly derived: {
		data: {
			open: boolean;
			placements?: Placement[];
			alignment?: Alignment;
			offset?: number;
		};
		elements: {
			trigger?: HTMLElement;
			overlay?: HTMLElement;
			content?: HTMLElement;
			indicator?: HTMLElement;
		};
	};
	readonly state: {
		data: {};
		elements: {
			trigger?: HTMLElement;
			overlay?: HTMLElement;
			content?: HTMLElement;
			indicator?: HTMLElement;
		};
	};
};

export function getTooltipContext(): TooltipContext {
	return getFluentContext<TooltipContext>(namespace);
}

export function setTooltipContext(context: TooltipContext): TooltipContext {
	return setFluentContext(context, namespace);
}
