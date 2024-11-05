export type CheckboxProps = {
	/** Controls whether the checkbox is checked or not. */
	checked?: boolean;
	/** Controls whether the checkbox is in an indeterminate state. */
	indeterminate?: boolean;

	/** Sets the input element's native value attribute for usage in forms. */
	value?: string;

	/** Controls whether the checkbox is intended for user interaction, and styles it accordingly. */
	disabled?: false;

	/** Specifies a custom class name for the checkbox. */
	class?: string;

	id?: string;

	size?: 'md' | 'lg';

	circular?: boolean;

	required?: boolean;
};
