import PopoverIndicator from '../popover/popover-indicator.svelte';
import MenuDivider from './menu-divider.svelte';
import MenuGroup from './menu-group.svelte';
import MenuItem from './menu-item.svelte';
import MenuOverlay from './menu-overlay.svelte';
import MenuRoot from './menu-root.svelte';
import MenuTrigger from './menu-trigger.svelte';

export * from './context-root';
export * from './types';

export const Menu = {
	Root: MenuRoot,
	Item: MenuItem,
	Group: MenuGroup,
	Divider: MenuDivider,
	Trigger: MenuTrigger,
	Overlay: MenuOverlay,
	Indicator: PopoverIndicator
};
