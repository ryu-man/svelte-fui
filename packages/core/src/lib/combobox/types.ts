import type { Snippet } from 'svelte';
import type { DropdownContext } from '../dropdown/context-root';
import type {
	DropdownItemProps,
	DropdownMenuProps,
	DropdownRootProps
} from '../dropdown/types';
import type { InputRootProps } from '../input/types';

export type ComboboxRootProps<T> = DropdownRootProps<T> & {
	context?: DropdownContext<T>;
};

export type ComboboxMenuProps = DropdownMenuProps;

export type ComboboxMenuItemProps = DropdownItemProps;

export type ComboboxTriggerProps<T> = InputRootProps & {
	class?: string;
	placeholder?: string;
	children?: Snippet<
		[
			{
				context: DropdownContext<T>;
			}
		]
	>;
};

export type ComboboxInputProps<T> = InputRootProps & ComboboxTriggerProps<T>;
