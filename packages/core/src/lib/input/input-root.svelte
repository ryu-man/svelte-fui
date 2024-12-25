<script lang="ts">
	import { type Writable, writable } from 'svelte/store';

	import { classnames, prefix } from '@svelte-fui/core/internal';

	import type { ExternalContext, InputSize } from './types';

	import { getSharedContext } from '../internal/context';

	const sharedContext$ = (getSharedContext('input') || writable({})) as Writable<
		Partial<ExternalContext>
	>;

	/** Determines whether the textbox can be typed in or not. */
	export let readonly = false;

	/** Controls whether the TextBox is intended for user interaction, and styles it accordingly. */
	export let disabled = false;

	export let size: InputSize = $sharedContext$?.size ?? 'md';

	export let underline = false;

	export let ariaInvalid = $sharedContext$?.invalid ?? false;

	/** Specifies a custom class name for the TextBox container. */
	let klass = '';
	export { klass as class };

	export let id: string | undefined = undefined;
</script>

<button
	class={classnames(
		'fui-input-skin px-mNudge gap-xxs inline-flex',
		prefix($sharedContext$?.size ?? size, 'size'),
		{ underline, disabled, invalid: ($sharedContext$?.invalid ?? ariaInvalid) && !disabled },
		klass
	)}
	{id}
	tabindex="-1"
	{...$$restProps}
>
	<slot />
</button>

<style lang="postcss">
	.fui-input-skin {
		@apply body-1 relative;

		--field-height-sm: 24px;
		--field-height-md: 32px;
		--field-height-lg: 40px;

		--fui-icon-size: calc(var(--field-height-md) - 12px);

		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		flex-wrap: nowrap;
		position: relative;
		box-sizing: border-box;
		min-height: var(--field-height-md);
		height: var(--field-height-md);
		/* font-family: var(--fui-fontFamilyBase);
		font-size: var(--fui-fontSizeBase300);
		font-weight: var(--fui-fontWeightRegular);
		line-height: var(--fui-lineHeightBase300); */
		background-color: var(--fui-colorNeutralBackground1);
		border: 1px solid var(--fui-colorNeutralStroke1);
		border-bottom-color: var(--fui-colorNeutralStrokeAccessible);
		border-radius: theme(borderRadius.md);

		&.size-sm {
			@apply caption-1;

			--fui-icon-size: calc(var(--field-height-sm) - 12px);
			min-height: var(--field-height-sm);
			height: var(--field-height-sm);
			padding-left: theme(spacing.sNudge);
			padding-right: theme(spacing.sNudge);
			/* ...typographyStyles.caption1; */
		}
		&.size-md {
			/* included in rootBaseStyles */
		}
		&.size-lg {
			@apply body-2;

			--fui-icon-size: calc(var(--field-height-lg) - 12px);
			min-height: var(--field-height-lg);
			height: var(--field-height-lg);
			padding-left: theme(spacing.m);
			padding-right: theme(spacing.m);
			/* ...typographyStyles.body2; */
			/* ...shorthands.gap(tokens.spacingHorizontalSNudge); */
			gap: 0 theme(spacing.sNudge);
		}
		&.outline {
			/* included in rootBaseStyles */
		}
		&.outlineInteractive {
			:hover {
				border-color: var(--fui-colorNeutralStroke1Hover);
				border-bottom-color: var(--fui-colorNeutralStrokeAccessibleHover);
			}
			/* DO NOT add a space between the selectors! It changes the behavior of make-styles. */
			:active,
			:focus-within {
				border-color: var(--fui-colorNeutralStroke1Pressed);
				border-bottom-color: var(--fui-colorNeutralStrokeAccessiblePressed);
			}
		}

		&.underline {
			background-color: var(--fui-colorTransparentBackground);
			/*corners look strange if rounded*/
			border-radius: 0;
			/* ...shorthands.borderRadius(0);  */
			/* border is specified in rootBaseStyles, but we only want a bottom border here */
			border-top-style: none;
			border-right-style: none;
			border-left-style: none;

			/* Make the focus underline (::after) match the width of the bottom border */
			::after {
				left: 0;
				right: 0;
			}
		}

		&.underlineInteractive {
			&:hover {
				border-bottom-color: var(--fui-colorNeutralStrokeAccessibleHover);
			}
			/* DO NOT add a space between the selectors! It changes the behavior of make-styles. */
			&:active,
			&:focus-within {
				border-bottom-color: var(--fui-colorNeutralStrokeAccessiblePressed);
			}
			&::after {
				/* remove rounded corners from focus underline*/
				border-radius: 0;
			}
		}
		&.filled {
			border-color: var(--fui-colorTransparentStroke);
		}
		&.filledInteractive {
			/* DO NOT add a space between the selectors! It changes the behavior of make-styles. */
			&:hover,
			&:focus-within {
				/* also handles pressed border color (:active) */
				border-color: var(--fui-colorTransparentStrokeInteractive);
			}
		}
		&.invalid {
			&:not(:focus-within),
			&:hover:not(:focus-within) {
				border-color: var(--fui-colorPaletteRedBorder2);
			}
		}
		&.filled-darker {
			background-color: var(--fui-colorNeutralBackground3);
		}
		&.filled-lighter {
			background-color: var(--fui-colorNeutralBackground1);
		}
		&.filled-darker-shadow {
			@apply shadow-2;
			background-color: var(--fui-colorNeutralBackground3);
			/* box-shadow: tokens.shadow2; */
		}
		&.filled-lighter-shadow {
			@apply shadow-2;
			background-color: var(--fui-colorNeutralBackground1);
			/* box-shadow: tokens.shadow2; */
		}
		&.disabled {
			cursor: not-allowed;
			background-color: var(--fui-colorTransparentBackground);
			border-color: var(--fui-colorNeutralStrokeDisabled);

			@media (forced-colors: active) {
				color: graytext;
				border-color: graytext;
			}

			/* remove the focus border */
			&::after {
				content: unset;
			}
			/* remove the focus outline */
			&:focus-within {
				outline-style: none;
			}
		}
	}

	/* This is all for the bottom focus border.
	It's supposed to be 2px flat all the way across and match the radius of the field's corners. */
	.fui-input-skin::after {
		@apply duration-ultra-fast ease-accelerate-mid;
		box-sizing: border-box;
		content: '';
		position: absolute;
		left: -1px;
		bottom: -1px;
		right: -1px;

		/* Maintaining the correct corner radius:
		Use the whole border-radius as the height and only put radii on the bottom corners.
		(Otherwise the radius would be automatically reduced to fit available space.)
		max() ensures the focus border still shows up even if someone sets tokens.borderRadiusMedium to 0. */
		height: max(2px, theme(borderRadius.md));
		border-bottom-left-radius: theme(borderRadius.md);
		border-bottom-right-radius: theme(borderRadius.md);

		/* Flat 2px border:
		By default borderBottom will cause little "horns" on the ends. The clipPath trims them off.
		(This could be done without trimming using `background: linear-gradient(...)`, but using
		borderBottom makes it easier for people to override the color if needed.) */
		border-bottom: 2px solid var(--fui-colorCompoundBrandStroke);
		clip-path: inset(calc(100% - 2px) 0px 0px);

		/* Animation for focus OUT */
		transform: scaleX(0);
		transition-property: transform;
		transition-duration: theme('transitionDuration.ultra-fast');
		transition-delay: theme('transitionDelay.accelerate-mid');

		@media screen and (prefers-reduced-motion: reduce) {
			transition-duration: 0.01ms;
			transition-delay: 0.01ms;
		}
	}

	.fui-input-skin:focus,
	.fui-input-skin:focus-within:active::after {
		border-bottom-color: var(--fui-colorCompoundBrandStrokePressed);
	}

	.fui-input-skin:focus::after,
	.fui-input-skin:focus-within::after {
		@apply duration-normal ease-decelerate-mid;
		transform: scaleX(1);
		transition-property: transform;
		transition-duration: theme('transitionDuration.normal');
		transition-delay: theme('transitionTimingFunction.decelerate-mid');
	}
	.fui-input-skin:focus,
	.fui-input-skin:focus-within {
		outline: 2px solid transparent;
	}
</style>
