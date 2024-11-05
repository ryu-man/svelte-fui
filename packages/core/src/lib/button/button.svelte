<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { ButtonProps } from './types';

	let {
		class: klass,
		shape,
		appearance,
		size,
		href,
		disabled,
		icon,
		element = $bindable(),
		children,
		onpointerenter,
		onpointerleave,
		...restProps
	}: ButtonProps = $props();

	let hover = $state(false);

	function onpointerenter_(ev: PointerEvent) {
		onpointerenter?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		hover = true;
	}
	function onpointerleave_(ev: PointerEvent) {
		onpointerleave?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		hover = false;
	}
</script>

<svelte:element
	this={href && !disabled ? 'a' : 'button'}
	bind:this={element}
	role={href ? 'link' : 'button'}
	href={href ? href : undefined}
	class={classnames(
		'fui-button',
		'px-m gap-sNudge font-base text-base-300 min-h-xxl leading-base-300 inline-flex w-auto justify-center rounded-md py-[5px] font-semibold',
		appearance,
		shape,
		size,
		icon && 'h-xxxl aspect-square',
		size === 'md' && icon && 'text-base-500 aspect-square p-[5px]',
		size === 'sm' && 'px-s text-base-200 font-regular leading-base-200 min-h-[24px] py-[3px]',
		size === 'sm' && icon && 'h-[24px] p-[1px]',
		size === 'lg' && 'px-m text-base-400 leading-base-400 min-h-[40px] py-[8px]',
		size === 'lg' && icon && 'h-[40px] p-[7px]',
		shape === 'circular' && 'rounded-full',
		shape === 'square' && 'rounded-none',
		klass
	)}
	type="button"
	{disabled}
	{...restProps}
	onpointerenter={onpointerenter_}
	onpointerleave={onpointerleave_}
>
	{@render children?.({ hover })}
</svelte:element>

<style lang="postcss">
	.fui-button {
		@apply border-thin m-0 box-border select-none items-center align-middle no-underline outline-none;

		--min-height: calc(theme(lineHeight.base-300) + 5px * 2 + theme(borderWidth.thin) * 2);
		--fui-icon-size: theme(lineHeight.base-300);

		background-color: var(--fui-colorNeutralBackground1);
		border-color: var(--fui-colorNeutralStroke1);
		border-style: solid;
		color: var(--fui-colorNeutralForeground1);

		text-decoration: none;
		outline: none;
		cursor: default;

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
	}

	@media screen and (prefers-reduced-motion: reduce) {
		.fds-button {
			transition-duration: 0.01ms;
		}
	}

	.fds-button.outline {
		background-color: var(--fui-colorTransparentBackground);

		&:hover {
			background-color: var(--fui-colorTransparentBackground);
		}

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
