<script lang="ts">
	import { classnames } from '$lib/internal';

	type InputEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement;
	};

	type InputTypes =
		| 'text'
		| 'number'
		| 'search'
		| 'password'
		| 'email'
		| 'tel'
		| 'url'
		| 'date'
		| 'datetime-local'
		| 'month'
		| 'time'
		| 'week';

	/** The input's current value. */
	export let value: any = '';
	export let valueAsNumber: number | undefined = undefined;
	export let valueAsDate: Date | undefined = undefined;

	/** Determiness the input type of the textbox. */
	export let type: InputTypes = 'text';

	/** The initial placeholder text displayed if no value is present. */
	export let placeholder: string | undefined = undefined;

	/** Determines whether the textbox can be typed in or not. */
	export let readonly = false;

	/** Controls whether the TextBox is intended for user interaction, and styles it accordingly. */
	export let disabled = false;

	export let size: 'sm' | 'md' | 'lg' = 'md';

	export let underline = false;

	export let name : string | undefined = undefined;

	export let ariaLabel: string | undefined = undefined;

	/** Specifies a custom class name for the TextBox container. */
	let klass = '';
	export { klass as class };

	export let id: string | undefined = undefined;

	function setInputType(node: HTMLInputElement, type: InputTypes) {
		node.type = type;
	}

	function onInputHandler(e: InputEvent) {
		const currentTarget = e.currentTarget as HTMLInputElement;
		valueAsNumber = currentTarget.valueAsNumber;
		valueAsDate = currentTarget.valueAsDate;
	}
</script>

<span
	class={classnames('fui-input', { size, underline, disabled }, klass)}
	{id}
	
>
	<slot name="before" />
	<input
		use:setInputType={type}
		bind:value
		{id}
		{name}
		{placeholder}
		{disabled}
		{readonly}
		aria-label={ariaLabel}
		on:input={onInputHandler}
		on:input
		on:blur
		on:keydown
		on:keypress
		on:keyup
		on:click
	/>
	<slot name="after" />
</span>

<style lang="postcss">
	.fui-input {
		@apply body-1 relative;

		--field-height-small: 24px;
		--field-height-medium: 32px;
		--field-height-large: 40px;

		--fui-icon-size: calc(var(--field-height-medium) - 12px);

		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		flex-wrap: nowrap;
		position: relative;
		box-sizing: border-box;
		min-height: var(--field-height-medium);
		/* font-family: var(--fui-fontFamilyBase);
		font-size: var(--fui-fontSizeBase300);
		font-weight: var(--fui-fontWeightRegular);
		line-height: var(--fui-lineHeightBase300); */
		background-color: var(--fui-colorNeutralBackground1);
		border: 1px solid var(--fui-colorNeutralStroke1);
		border-bottom-color: var(--fui-colorNeutralStrokeAccessible);
		gap: theme(spacing.xxs);
		border-radius: theme(borderRadius.md);
		padding: 0 theme(spacing.mNudge);

		&.size-sm {
			@apply caption-1;

			--fui-icon-size: calc(var(--field-height-small) - 12px);
			min-height: var(--field-height-small);
			padding-left: theme(spacing.sNudge);
			padding-right: theme(spacing.sNudge);
			/* ...typographyStyles.caption1; */
		}
		&.size-md {
			/* included in rootBaseStyles */
		}
		&.size-lg {
			@apply body-2;

			--fui-icon-size: calc(var(--field-height-large) - 12px);
			min-height: var(--field-height-large);
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
				/* ...shorthands.borderColor(tokens.colorNeutralStroke1Hover); */
				border-color: var(--fui-colorNeutralStroke1Hover);
				border-bottom-color: var(--fui-colorNeutralStrokeAccessibleHover);
			}
			/* DO NOT add a space between the selectors! It changes the behavior of make-styles. */
			:active,
			:focus-within {
				/* ...shorthands.borderColor(tokens.colorNeutralStroke1Pressed); */
				border-color: var(--fui-colorNeutralStroke1Pressed);
				border-bottom-color: var(--fui-colorNeutralStrokeAccessiblePressed);
			}
		}

		&.underline {
			/* background-color: tokens.colorTransparentBackground; */
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
				/* border-bottom-color: tokens.colorNeutralStrokeAccessibleHover; */
				border-bottom-color: var(--fui-colorNeutralStrokeAccessibleHover);
			}
			/* DO NOT add a space between the selectors! It changes the behavior of make-styles. */
			&:active,
			&:focus-within {
				/* border-bottom-color: tokens.colorNeutralStrokeAccessiblePressed; */
				border-bottom-color: var(--fui-colorNeutralStrokeAccessiblePressed);
			}
			&::after {
				/* remove rounded corners from focus underline*/
				/* shorthands.borderRadius(0) */
				border-radius: 0;
			}
		}
		&.filled {
			/* ...shorthands.borderColor(tokens.colorTransparentStroke); */
			border-color: var(--fui-colorTransparentStroke);
		}
		&.filledInteractive {
			/* DO NOT add a space between the selectors! It changes the behavior of make-styles. */
			&:hover,
			&:focus-within {
				/* also handles pressed border color (:active) */
				/* ...shorthands.borderColor(tokens.colorTransparentStrokeInteractive); */
				border-color: var(--fui-colorTransparentStrokeInteractive);
			}
		}
		&.invalid {
			&:not(:focus-within),
			&:hover:not(:focus-within) {
				/* ...shorthands.borderColor(tokens.colorPaletteRedBorder2); */
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
			/* ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled); */

			@media (forced-colors: active) {
				color: graytext;
				/* ...shorthands.borderColor('GrayText'); */
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
	.fui-input::after {
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
		/* transition-duration: var(--fui-durationUltraFast);
		transition-delay: var(--fui-curveAccelerateMid); */

		@media screen and (prefers-reduced-motion: reduce) {
			transition-duration: 0.01ms;
			transition-delay: 0.01ms;
		}
	}

	.fui-input:focus-within:active::after {
		border-bottom-color: var(--fui-colorCompoundBrandStrokePressed);
	}

	.fui-input:focus-within::after {
		@apply duration-normal ease-decelerate-mid;
		transform: scaleX(1);
		transition-property: transform;
		/* transition-duration: var(--fui-durationNormal); */
		/* transition-delay: var(--fui-curveDecelerateMid); */
		transition-delay: theme('transitionTimingFunction.decelerate-mid');
	}
	.fui-input:focus-within {
		outline: 2px solid transparent;
	}

	input {
		box-sizing: border-box;
		-webkit-box-flex: 1;
		flex-grow: 1;
		min-width: 0px;
		border-style: none;
		padding: 0 theme(spacing.xxs);
		color: var(--fui-colorNeutralForeground1);
		background-color: transparent;
		outline-style: none;
		font-family: inherit;
		font-size: inherit;
		font-weight: inherit;
		line-height: inherit;
	}
</style>
