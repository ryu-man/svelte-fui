import type { HTMLInputAttributes } from 'svelte/elements';
import type { PopoverOverlayProps } from '../popover';
import type { Snippet } from 'svelte';
import type { DropdownContext } from './context-root';
import type { InputRootProps } from '../input/types';

export type DropdownRootProps<T> = {
	open?: boolean;
	multiple?: boolean;
	value?: string;
	values?: string[];
	data?: T[];
	disabled?: boolean;
	id?: string;
	context?: DropdownContext<T>;
	children?: Snippet<
		[
			{
				context: DropdownContext<T>;
			}
		]
	>;
};

export type DropdownMenuProps = PopoverOverlayProps & {};

export type DropdownItemProps<T = any> = {
	class?: string;
	value: string;
	data?: T;
	disabled?: boolean;
	children?: Snippet<
		[
			{
				context: DropdownContext<T>;
				value: string;
				data?: T;
				active: boolean;
			}
		]
	>;
	onclick?: (ev: Event, params: { context: DropdownContext<T> }) => void;
};

export type DropdownTriggerProps<T = any> = {
	class?: string;
	as?: 'div' | 'button' | 'label';
	children?: Snippet<[{ context: DropdownContext<T> }]>;
	onclick?: (ev: Event, params: { context: DropdownContext<T> }) => void;
};

export type DropdownInputProps<T> = InputRootProps & {
	class?: string;
	as?: 'div' | 'button';
	placeholder?: string;
	onclick?: (ev: Event, params: { context: DropdownContext<T> }) => void;
};

export type DropdownCheckboxProps = {
	class?: string;
};
