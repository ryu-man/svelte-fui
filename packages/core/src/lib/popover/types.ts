import type { HTMLAttributes } from 'svelte/elements';
import type { Alignment, Placement } from '@floating-ui/dom';
import type { Snippet } from 'svelte';
import type { PopoverContext } from './context';

export type PopoverRootProps = {
	open?: boolean;
	id?: string;
	context?: PopoverContext;
	children: Snippet<
		[
			{
				context: PopoverContext;
			}
		]
	>;
};

export type PopoverOverlayProps = HTMLAttributes<HTMLDivElement> & {
	class?: string;
	placements?: Placement[];
	alignment?: Alignment;
	offset?: number;
	onmount?: (
		node: HTMLElement,
		params: { open: boolean }
	) => {
		update?: (params: { open: boolean }) => void;
		destroy?: () => {};
	};
	children: Snippet<
		[
			{
				dx: number;
				dy: number;
				open?: boolean;
			}
		]
	>;
	onclickoutside?: (ev: Event, params: { context: PopoverContext }) => void;
};

export type PopoverTriggerProps = {
	class?: string;
	as?: 'button' | 'div';
	element?: HTMLElement;
	clientWidth?: number;
	onclick?: (ev: Event, options: { context?: PopoverContext }) => void;
	children?: Snippet<[{ context: PopoverContext }]>;
};

export type PopoverIndicatorProps = {
	class?: string;
	children?: Snippet<
		[
			{
				open: boolean;
			}
		]
	>;
};
