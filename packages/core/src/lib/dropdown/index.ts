import DropdownCheckbox from './dropdown-checkbox.svelte';
import DropdownIndicator from './dropdown-indicator.svelte';
import DropdownInput from './dropdown-input.svelte';
import DropdownItem from './dropdown-item.svelte';
import DropdownMenu from './dropdown-menu.svelte';
import DropdownRoot from './dropdown-root.svelte';
import DropdownTrigger from './dropdown-trigger.svelte';

export * from './types';

export const Dropdown = {
	Root: DropdownRoot,
	Trigger: DropdownTrigger,
	Input: DropdownInput,
	Menu: DropdownMenu,
	Item: DropdownItem,
	Checkbox: DropdownCheckbox,
	Indicator: DropdownIndicator
};
