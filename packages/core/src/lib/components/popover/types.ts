import type { Component, Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Alignment, Placement } from '@floating-ui/dom';
import type { PopoverContext } from './context';
import type { ReferenceFunction } from '../../types';

export type ComponentProps<C> = C extends Component<infer Props> ? Props : Record<string, any>;

export type PopoverRootProps<Extension = Record<string, any>> = {
	open?: boolean;
	id?: string;
	target?: HTMLElement;
	context?: PopoverContext;
	placements?: Placement[];
	placement?: Placement;
	alignment?: Alignment;
	offset?: number;
	extension?: Extension;
	children?: Snippet<
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
	children?: Snippet<
		[
			{
				dx: number;
				dy: number;
				open?: boolean;
			}
		]
	>;
	ref?: ReferenceFunction;
	onclickoutside?: (ev: Event, params: { context: PopoverContext }) => void;
	onmount?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
	ondestroy?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
} & ComponentProps<T>;

export type PopoverTriggerProps<T extends Component> = {
	class?: string;
	as?: string;
	shell?: T;
	element?: HTMLElement;
	ref?: ReferenceFunction;
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
	ref?: ReferenceFunction;
	onmount?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
	ondestroy?: (ev: CustomEvent, params: { context: PopoverContext }) => void;
};
