import type { PopoverOverlayProps, PopoverRootProps, PopoverTriggerProps } from '../popover';
import type { Component, Snippet } from 'svelte';
import type { DropdownContext } from './context-root';
import type { InputRootProps } from '../input/types';
import type { List } from '../list';
import type { MenuListProps } from '../menu';
import type { ReferenceFunction } from '../../types';

export type DropdownRootProps<Data, Extension = Record<string, any>> = PopoverRootProps & {
	open?: boolean;
	multiple?: boolean;
	value?: string;
	values?: string[];
	data?: Data[];
	disabled?: boolean;
	id?: string;
	context?: DropdownContext<Data>;
	extension?: Extension;
	children?: Snippet<
		[
			{
				context: DropdownContext<Data>;
			}
		]
	>;
};

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
	ref?: ReferenceFunction;
	onclick?: (ev: Event, params: { context: DropdownContext<T> }) => void;
};

export type DropdownTriggerProps<
	Shell extends Component,
	Context = any
> = PopoverTriggerProps<Shell> & {
	children?: Snippet<[{ context: DropdownContext<Context> }]>;
	ref?: ReferenceFunction;
	onclick?: (ev: Event, params: { context: DropdownContext<Context> }) => void;
};

export type DropdownInputProps<T> = InputRootProps & {
	class?: string;
	as?: 'div' | 'button';
	placeholder?: string | Snippet;
	onclick?: (ev: Event, params: { context: DropdownContext<T> }) => void;
};

export type DropdownCheckboxProps = {
	class?: string;
	ref?: ReferenceFunction;
};
