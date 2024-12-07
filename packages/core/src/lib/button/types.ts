import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type ButtonShape = 'rounded' | 'circular' | 'square';
export type ButtonAppearance = 'subtle' | 'outline' | 'secondary' | 'primary' | 'transparent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, 'children'> & {
	shape?: ButtonShape;
	appearance?: ButtonAppearance;
	size?: ButtonSize;

	/** @restProps {button | a} */
	/** Specifies the visual styling of the button. */
	// export let variant: 'standard' | 'accent' | 'hyperlink' = 'standard';

	/** Sets an href value and converts the button element into an anchor/ */
	href?: string;

	/** Controls whether the button is intended for user interaction, and styles it accordingly. */
	disabled?: boolean;

	icon?: boolean;

	/** Obtains a bound DOM reference to the button or anchor element. */
	element?: HTMLElement;

	children?: Snippet<
		[
			{
				hover: boolean;
			}
		]
	>;
};
