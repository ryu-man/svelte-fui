import type { Component, Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Alignment, Placement } from '@floating-ui/dom';
import type { PopoverContext } from './context';

export type ComponentProps<C> = C extends Component<infer Props> ? Props : Record<string, any>;

export type PopoverRootProps = {
	open?: boolean;
	id?: string;
	context?: PopoverContext;
	placements?: Placement[];
	placement?: Placement;
	alignment?: Alignment;
	offset?: number;

	children: Snippet<
		[
			{
				context: PopoverContext;
			}
		]
	>;
	onmount?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
	ondestroy?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
};

export type PopoverOverlayProps<T extends Component> = HTMLAttributes<HTMLDivElement> & {
	class?: string;
	as?: string;
	shell?: T;
	element?: HTMLElement;
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
	onmount?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
	ondestroy?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
} & ComponentProps<T>;

export type PopoverTriggerProps<T extends Component> = {
	class?: string;
	as?: string;
	shell?: T;
	element?: HTMLElement;
	onclick?: (ev: Event, options: { context?: PopoverContext }) => void;
	children?: Snippet<[{ context: PopoverContext }]>;
	onmount?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
	ondestroy?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
} & Omit<ComponentProps<T>, 'shell'>;

export type PopoverIndicatorProps = {
	class?: string;
	children?: Snippet<
		[
			{
				open: boolean;
			}
		]
	>;
	onmount?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
	ondestroy?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
};
