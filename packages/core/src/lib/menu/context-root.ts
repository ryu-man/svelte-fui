import type { Writable } from 'svelte/store';
import { getFluentContext, setFluentContext } from '@svelte-fui/core/internal/context';

export const FUI_MENU_NAMESPACE = 'menu';

export type MenuContext = {
	open: Writable<boolean>;
	triggerElement: Writable<HTMLElement|undefined>;
	itemsActive: Writable<Set<string>>;
	elements: {
		trigger: Writable<HTMLElement|undefined>;
		menu: Writable<HTMLElement|undefined>;
		anchor: Writable<HTMLElement|undefined>;
	};
	close(): void;
};

export function getMenuContext() {
	return getFluentContext<MenuContext>(FUI_MENU_NAMESPACE);
}

export function setMenuContext(context: MenuContext) {
	return setFluentContext(context, FUI_MENU_NAMESPACE);
}
