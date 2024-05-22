import MenuDivider from './menu-divider.svelte';
import MenuGroup from './menu-group.svelte';
import MenuItem from './menu-item.svelte';
import MenuRoot from './menu-root.svelte';
import MenuTrigger from './menu-trigger.svelte';

export * from './context-root';

export const Menu = {
	Root: MenuRoot,
	Item: MenuItem,
	Group: MenuGroup,
	Divider: MenuDivider,
	Trigger: MenuTrigger
};
