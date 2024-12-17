import { Dropdown } from '@svelte-fui/core/dropdown';
import ComboboxRoot from './combobox-root.svelte';
import ComboboxTrigger from './combobox-trigger.svelte';
import ComboboxInput from './combobox-input.svelte';

export * from './types';
export * from './context';

export const Combobox = {
	Root: ComboboxRoot,
	Menu: Dropdown.Menu,
	Item: Dropdown.Item,
	Trigger: ComboboxTrigger,
	Input: ComboboxInput,
	Checkbox: Dropdown.Checkbox,
	Indicator: Dropdown.Indicator
};
