import type { Writable } from 'svelte/store';
import { getFluentContext, setFluentContext } from '@svelte-fui/core/internal/context';

export const FUI_MENU_NAMESPACE = 'menu';

export type MenuContext = {
	open: Writable<boolean>;
	triggerElement: Writable<HTMLElement>;
	itemsActive: Writable<Set<string>>;
	close(): void;
};

export function getMenuContext() {
	return getFluentContext<MenuContext>(FUI_MENU_NAMESPACE);
}

export function setMenuContext(context: MenuContext) {
	return setFluentContext(context, FUI_MENU_NAMESPACE);
}
