import type { Writable } from 'svelte/store';
import { getFluentContext, setFluentContext } from '@svelte-fui/core/internal/context';

export const FUI_MENU_ITEM_NAMESPACE = 'menu/item';

export type MenuItemContext = {
	id: Writable<string>;
	open: Writable<boolean>;
	close(): void;
};

export function getMenuItemContext() {
	return getFluentContext<MenuItemContext>(FUI_MENU_ITEM_NAMESPACE);
}

export function setMenuItemContext(context: MenuItemContext) {
	return setFluentContext(context, FUI_MENU_ITEM_NAMESPACE);
}
