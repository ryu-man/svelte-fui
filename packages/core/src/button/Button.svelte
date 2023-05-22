<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { classnames, createEventForwarder } from '../internal';

	export let shape: 'rounded' | 'circular' | 'square' = 'rounded';
	export let appearance: 'subtle' | 'outline' | 'secondary' | 'primary' | 'transparent' | undefined = 'secondary';
	export let size: 'sm' | 'md' | 'lg' = 'md';

	/** @restProps {button | a} */
	/** Specifies the visual styling of the button. */
	// export let variant: 'standard' | 'accent' | 'hyperlink' = 'standard';

	/** Sets an href value and converts the button element into an anchor/ */
	export let href = '';

	/** Controls whether the button is intended for user interaction, and styles it accordingly. */
	export let disabled = false;

	export let icon: boolean = false;

	/** Specifies a custom class name for the button. */
	let klass = '';
	export { klass as class };

	/** Obtains a bound DOM reference to the button or anchor element. */
	export let element: HTMLElement = null;

	const forwardEvents = createEventForwarder(get_current_component());

	let hover = false;
	function onMouseEnterHandler() {
		hover = true;
	}
	function onMouseLeaveHandler() {
		hover = false;
	}
</script>

<svelte:element
	this={href && !disabled ? 'a' : 'button'}
	use:forwardEvents
	bind:this={element}
	role={href && !disabled ? 'button' : undefined}
	href={href && !disabled ? href : undefined}
	class={classnames('fds-button', appearance, shape, size, { icon: !!icon }, klass)}
	{disabled}
	{...$$restProps}
	on:click
	on:keypress
	on:mouseenter
	on:mouseleave
	on:mousedown
	on:mouseup
	on:mouseenter={onMouseEnterHandler}
	on:mouseleave={onMouseLeaveHandler}
>
	<slot {hover} />
</svelte:element>

<style lang="postcss">
	.fds-button {
		@apply m-0 box-border flex select-none items-center justify-center overflow-hidden rounded-md border-thin px-m py-[5px] align-middle font-base text-base-300 font-semibold leading-base-300 no-underline outline-none;

		--min-height: calc(theme(lineHeight.base-300) + 5px * 2 + theme(borderWidth.thin) * 2);
		--fui-icon-size: theme(lineHeight.base-300);

		background-color: var(--fui-colorNeutralBackground1);
		border-color: var(--fui-colorNeutralStroke1);
		border-style: solid;
		color: var(--fui-colorNeutralForeground1);

		min-height: var(--min-height);
		min-width: 96px;

		/* padding-block: 4px 6px;
		padding-inline: 11px; */
		text-decoration: none;
		outline: none;
		cursor: default;

		gap: theme(spacing.sNudge);

		transition-duration: 0.1s;
		transition-property: all;

		&:hover {
			background-color: var(--fui-colorNeutralBackground1Hover);
			border-color: var(--fui-colorNeutralStroke1Hover);
			color: var(--fui-colorNeutralForeground1Hover);
			cursor: pointer;
			/* backgroundColor: tokens.colorNeutralBackground1Hover,
				borderColor: tokens.colorNeutralStroke1Hover,
				color: tokens.colorNeutralForeground1Hover,

				cursor: 'pointer',

				[`& .${iconFilledClassName}`]: {
				display: 'inline',
				},
				[`& .${iconRegularClassName}`]: {
				display: 'none',
				}, */
		}

		&:hover:active {
			background-color: var(--fui-colorNeutralBackground1Pressed);
			border-color: var(--fui-colorNeutralStroke1Pressed);
			color: var(--fui-colorNeutralForeground1Pressed);

			/* ':hover:active': {
				backgroundColor: tokens.colorNeutralBackground1Pressed,
				borderColor: tokens.colorNeutralStroke1Pressed,
				color: tokens.colorNeutralForeground1Pressed,

				outlineStyle: 'none',

				[`& .${iconFilledClassName}`]: {
				display: 'inline',
				},
				[`& .${iconRegularClassName}`]: {
				display: 'none',
				},
			}, */
		}

		&:focus-visible {
			box-shadow: var(--fui-focus-stroke);
		}

		&.icon {
			@apply inline-flex h-xl w-xl items-center justify-center text-base-500;
			--fui-icon-spacing: theme(spacing.sNudge);
		}

		&.sm {
			@apply min-w-[64px] rounded-[3px] px-s py-[3px] text-base-200 font-regular leading-base-200;

			--min-height: calc(theme(lineHeight.base-200) + 3px * 2 + theme(borderWidth.thin) * 2);
			--fui-icon-size: calc(theme(lineHeight.base-200) + theme(borderWidth.thin) * 2);

			&.icon {
				@apply min-h-[24px] min-w-[24px] p-[1px];
			}
		}
		&.md {
			/* defined in base styles */

			&.icon {
				@apply min-h-[32px] min-w-[32px] p-[5px];
			}
		}

		&.lg {
			@apply min-w-[96px] rounded-md px-m py-[8px] text-base-400 font-semibold leading-base-400;

			--min-height: calc(theme(lineHeight.base-400) + 8px * 2 + theme(borderWidth.thin) * 2);
			--fui-icon-size: theme(lineHeight.base-400);

			&.icon {
				@apply min-h-[40px] min-w-[40px] p-[7px];
			}
		}
	}

	@media screen and (prefers-reduced-motion: reduce) {
		.fds-button {
			transition-duration: 0.01ms;
		}
	}

	.fds-button :global(.fds-icon) {
		width: var(--height);
		height: var(--height);
	}

	.fds-button.outline {
		background-color: var(--fui-colorTransparentBackground);

		&:hover {
			background-color: var(--fui-colorTransparentBackground);
		}

		,
		&:hover:active {
			background-color: var(--fui-colorTransparentBackground);
		}
	}

	.fds-button.primary {
		background-color: var(--fui-colorBrandBackground);
		border-color: transparent;
		color: var(--fui-colorNeutralForegroundOnBrand);

		&:hover {
			background-color: var(--fui-colorBrandBackgroundHover);
			border-color: transparent;
			color: var(--fui-colorNeutralForegroundOnBrand);
		}

		&:hover:active {
			background-color: var(--fui-colorBrandBackgroundPressed);
			border-color: transparent;
			color: var(--fui-colorNeutralForegroundOnBrand);
		}
	}

	.fds-button.subtle {
		background-color: var(--fui-colorSubtleBackground);
		border-color: transparent;
		color: var(--fui-colorNeutralForeground2);

		&:hover {
			background-color: var(--fui-colorSubtleBackgroundHover);
			border-color: transparent;
			color: var(--fui-colorNeutralForeground2Hover);

			/* [`& .${buttonClassNames.icon}`]: {
        color: tokens.colorNeutralForeground2BrandHover,
      }, */
		}

		&:hover:active {
			background-color: var(--fui-colorSubtleBackgroundPressed);
			border-color: transparent;
			color: var(--fui-colorNeutralForeground2Pressed);

			/* [`& .${buttonClassNames.icon}`]: {
        color: tokens.colorNeutralForeground2BrandPressed,
      }, */
		}
	}

	.fds-button.transparent {
		background-color: var(--fui-colorTransparentBackground);
		border-color: transparent;
		color: var(--fui-colorNeutralForeground2);

		&:hover {
			background-color: var(--fui-colorTransparentBackgroundHover);
			border-color: transparent;
			color: var(--fui-colorNeutralForeground2BrandHover);

			/* [`& .${buttonClassNames.icon}`]: {
        color: tokens.colorNeutralForeground2BrandHover,
      }, */
		}

		&:hover:active {
			background-color: var(--fui-colorTransparentBackgroundPressed);
			border-color: transparent;
			color: var(--fui-colorNeutralForeground2BrandPressed);

			/* [`& .${buttonClassNames.icon}`]: {
        color: tokens.colorNeutralForeground2BrandPressed,
      }, */
		}
	}

	/* Shape variations */
	.fds-button.circular {
		@apply rounded-full;
	}
	.fds-button.rounded {
		/* The borderRadius rounded styles are handled in the size variations */
	}
	.fds-button.square {
		@apply rounded-none;
	}

	.fds-button:disabled {
		background-color: var(--fui-colorNeutralBackgroundDisabled);
		border-color: var(--fui-colorNeutralStrokeDisabled);
		color: var(--fui-colorNeutralForegroundDisabled);

		cursor: not-allowed;

		&:hover {
			background-color: var(--fui-colorNeutralBackgroundDisabled);
			border-color: var(--fui-colorNeutralStrokeDisabled);
			color: var(--fui-colorNeutralForegroundDisabled);

			cursor: not-allowed;
			/* [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      }, */
		}

		&:hover:active {
			background-color: var(--fui-colorNeutralBackgroundDisabled);
			border-color: var(--fui-colorNeutralStrokeDisabled);
			color: var(--fui-colorNeutralForegroundDisabled);

			cursor: not-allowed;

			/* [`& .${iconFilledClassName}`]: {
        display: 'none',
      },
      [`& .${iconRegularClassName}`]: {
        display: 'inline',
      }, */
		}
	}

	@media (forced-colors: active) {
	}
</style>
