import { default as DropdownArrow } from './dropdown-arrow.svelte';
import { default as DropdownItem } from './dropdown-item.svelte';
import { default as DropdownMenu } from './dropdown-menu.svelte';
import { default as DropdownRoot } from './dropdown-root.svelte';
import { default as DropdownTrigger } from './dropdown-trigger.svelte';

export const Dropdown = {
	Root: DropdownRoot,
	Trigger: DropdownTrigger,
	Menu: DropdownMenu,
	Item: DropdownItem,
	Arrow: DropdownArrow
};
