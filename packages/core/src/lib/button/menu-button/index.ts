import MenuButtonRoot from './menu-button-root.svelte';
import MenuButtonButton from './menu-button-button.svelte';
import MenuButtonMenu from './menu-button-menu.svelte';
import MenuButtonItem from './menu-button-item.svelte';
import { Menu } from '@svelte-fui/core/menu';

export const MenuButton = {
	Root: MenuButtonRoot,
	Button: MenuButtonButton,
	Menu: MenuButtonMenu,
	Item: MenuButtonItem,
	Indicator: Menu.Indicator
};
