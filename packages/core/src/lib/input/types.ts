import type { Snippet } from 'svelte';
import type { HTMLInputTypeAttribute } from 'svelte/elements';
import type { FieldContext } from '../field/context';
import type { IconProps } from '../icon';

export type InputType = HTMLInputTypeAttribute;
export type InputSize = 'sm' | 'md' | 'lg';

export type ExternalContext = { invalid: boolean; size: InputSize };

export type InputRootProps = {
	class?: string;
	disabled?: boolean;
	size?: InputSize;
	underline?: boolean;
	id?: string;
	appearance?: 'outline' | 'underline' | 'filled-darker' | 'filled-lighter';
	as?: 'div' | 'button' | 'label';
	element?: HTMLElement
	children?: Snippet<
		[
			{
				context: FieldContext;
			}
		]
	>;
};

export type InputElementProps = {
	value?: any;

	valueAsNumber?: number;

	valueAsDate?: Date;

	name?: string;

	/** Determiness the input type of the textbox. */
	type?: HTMLInputTypeAttribute;

	/** The initial placeholder text displayed if no value is present. */
	placeholder?: string;

	/** Determines whether the textbox can be typed in or not. */
	readonly?: boolean;

	/** Controls whether the TextBox is intended for user interaction, and styles it accordingly. */
	disabled?: boolean;

	size?: InputSize;

	underline?: boolean;

	invalid?: boolean;

	element?: HTMLInputElement

	before?: Snippet<[]>;
	after?: Snippet<[]>;
};

export type InputIconProps = IconProps & {};
