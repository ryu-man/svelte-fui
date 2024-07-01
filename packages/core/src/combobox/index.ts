import { Dropdown } from '@svelte-fui/core/dropdown';
import ComboboxRoot from './combobox-root.svelte';
import ComboboxTrigger from './combobox-trigger.svelte';

export const Combobox = {
	Root: ComboboxRoot,
	Menu: Dropdown.Menu,
	Item: Dropdown.Item,
	Trigger: ComboboxTrigger,
	Arrow: Dropdown.Arrow
};
