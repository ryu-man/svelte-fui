import type { HTMLAttributes } from 'svelte/elements';
import type { PopoverOverlayProps, PopoverRootProps, PopoverTriggerProps } from '../popover';
import type { Component, Snippet } from 'svelte';
import type { MenuContext } from './context';
import type { ReferenceFunction } from '../types';
import type { List } from '../list';

export type MenuRootProps = PopoverRootProps & {};

export type MenuItemProps = MenuRootProps & {
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
	ref?: ReferenceFunction;
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

export type MenuListProps = PopoverOverlayProps<typeof List.Root> & {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<
		[
			{
				context: MenuContext;
			}
		]
	>;
	ref?: ReferenceFunction;
};
