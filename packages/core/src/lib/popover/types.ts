import type { Component, Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Alignment, Placement } from '@floating-ui/dom';
import type { PopoverContext } from './context';

export type PopoverRootProps = {
	open?: boolean;
	id?: string;
	context?: PopoverContext;
	placements?: Placement[];
	alignment?: Alignment;
	offset?: number;
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

export type ComponentProps<C> = C extends Component<infer Props> ? Props : Record<string, any>;

export type ComponentAs<T> = T extends { as?: infer AS } ? { componentAs: AS } : {};

export type PopoverTriggerProps<T extends Component> = Omit<ComponentProps<T>, 'as'> &
	ComponentAs<ComponentProps<T>> & {
		class?: string;
		element?: HTMLElement;
		clientWidth?: number;
		as?: string | T;
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
