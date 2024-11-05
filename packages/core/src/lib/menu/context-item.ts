import { getFluentContext, setFluentContext } from '@svelte-fui/core/internal/context';
import type { MenuContext } from './context-root';

export const FUI_MENU_ITEM_NAMESPACE = 'menu/item';

export function getMenuItemContext() {
	return getFluentContext<MenuContext>(FUI_MENU_ITEM_NAMESPACE);
}

export function setMenuItemContext(context: MenuContext) {
	return setFluentContext(context, FUI_MENU_ITEM_NAMESPACE);
}
