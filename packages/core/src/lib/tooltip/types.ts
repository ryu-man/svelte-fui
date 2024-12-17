import type { Component, Snippet } from 'svelte';
import type { Alignment, Placement } from '@floating-ui/dom';
import type { TooltipContext } from './context';
import type { PopoverTriggerProps } from '../popover';

export type TooltipRootProps = {
	open: boolean;
	placements?: Placement[];
	alignment?: Alignment;
	offset?: number;

	children?: Snippet<
		[
			{
				context: TooltipContext;
			}
		]
	>;
};

export type TooltipOverlayProps = {
	class?: string;
	offset?: number;
	appearance?: 'normal' | 'inverted';
	placements?: Placement[];
	id?: string;
	children?: Snippet<
		[
			{
				context: TooltipContext;
			}
		]
	>;
};

export type TooltipTriggerProps<T extends Component> = PopoverTriggerProps<T> & {
	delay?: number;
	children?: Snippet<
		[
			{
				context: TooltipContext;
			}
		]
	>;

	onpointerenter?: (ev: PointerEvent) => any;
	onpointerleave?: (ev: PointerEvent) => any;
};
