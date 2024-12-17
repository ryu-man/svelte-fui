import type { HTMLAttributes } from 'svelte/elements';
import type { PopoverOverlayProps, PopoverRootProps, PopoverTriggerProps } from '../popover';
import type { Component, Snippet } from 'svelte';
import type { MenuContext } from './context-root';

export type MenuRootProps = PopoverRootProps & {};

export type MenuItemProps = {
	open?: boolean;
	class?: string;
	id?: string;
	as?: 'div' | 'button' | 'a';
	href?: string;
	children?: Snippet<
		[
			{
				context: MenuContext;
			}
		]
	>;

	onclick?: (ev: Event, params: { context: MenuContext }) => any;
	onpointerenter?: (ev: PointerEvent, params: { context: MenuContext }) => any;
	onpointerleave?: (ev: PointerEvent, params: { context: MenuContext }) => any;
};

export type MenuGroupProps = HTMLAttributes<HTMLDivElement>;

export type MenuDividerProps = HTMLAttributes<HTMLDivElement>;

export type MenuTriggerProps<Shell extends Component> = PopoverTriggerProps<Shell> & {
	children?: Snippet<
		[
			{
				context: MenuContext;
			}
		]
	>;
};

export type MenuOverlayProps = PopoverOverlayProps & {
	children?: Snippet<
		[
			{
				context: MenuContext;
			}
		]
	>;
};
