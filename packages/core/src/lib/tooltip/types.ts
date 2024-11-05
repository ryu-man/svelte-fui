import type { Snippet } from 'svelte';
import type { PopoverContext } from '../popover';
import type { Placement } from '@floating-ui/dom';

export type TooltipRootProps = {
	children?: Snippet<[]>;
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
				context: PopoverContext;
			}
		]
	>;
};

export type TooltipTriggerProps = {
	class?: string;
	offset?: number;
	appearance?: 'normal' | 'inverted';
	id?: string;
	delay?: number;
	children?: Snippet<[]>;

	onpointerenter?: (ev: PointerEvent) => any;
	onpointerleave?: (ev: PointerEvent) => any;
};
