<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { ButtonProps } from './types';
	import { reference } from '../internal/dom.svelte';

	let {
		element = $bindable(),
		class: klass,
		shape,
		appearance,
		size = 'md',
		icon,
		as = 'button',
		disabled = false,
		children = undefined,
		ref = undefined,
		...restProps
	}: ButtonProps & { as: string } = $props();
</script>

<svelte:element
	this={as}
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-button-shell',
		'px-m gap-sNudge font-base cursor-pointer text-base-300 min-h-xxl leading-base-300 inline-flex w-auto justify-center rounded-md py-[5px] font-semibold m-0 box-border select-none items-center align-middle no-underline outline-none',
		'border-thin border-solid',
		'bg-neutral-background-1 border-neutral-stroke- text-neutral-foreground-1',
		'hover:bg-neutral-background-1-hover hover:border-neutral-stroke-1-hover text-neutral-foreground-1-hover',
		'active:bg-neutral-background-1-pressed active:border-neutral-stroke-1-pressed text-neutral-foreground-1-pressed',
		appearance === 'outline' &&
			'bg-transparent-background hover:bg-transparent-background active:bg-transparent-background',
		appearance === 'primary' &&
			'bg-brand-background text-neutral-foreground-on-brand border-transparent hover:bg-brand-background active:bg-brand-background-pressed',
		appearance === 'subtle' &&
			'bg-subtle-background text-neutral-foreground-2 border-transparent hover:bg-subtle-background-hover active:bg-subtle-background-pressed',
		appearance === 'transparent' &&
			'bg-transparent-background text-neutral-foreground-2 border-transparent hover:bg-transparent-background-hover active:bg-transparent-background-pressed',
		icon && 'h-xxxl aspect-square',
		size === 'sm' && 'px-s text-base-200 font-regular leading-base-200 min-h-[24px] py-[3px]',
		size === 'lg' && 'px-m text-base-400 leading-base-400 min-h-[40px] py-[8px]',
		size === 'sm' && icon && 'h-[24px] px-[1px] py-[1px]',
		size === 'md' && icon && 'text-base-500 aspect-square px-[5px] py-[5px]',
		size === 'lg' && icon && 'h-[40px] px-[7px] py-[7px]',
		shape === 'circular' && 'rounded-full',
		shape === 'square' && 'rounded-none',
		klass
	)}
	aria-disabled={disabled}
	{disabled}
	{...restProps}
>
	{@render children?.()}
</svelte:element>

<style lang="postcss">
	.fui-button-shell {
		--min-height: calc(theme(lineHeight.base-300) + 5px * 2 + theme(borderWidth.thin) * 2);
		--fui-icon-size: theme(lineHeight.base-300);

		text-decoration: none;
		outline: none;

		transition-duration: 0.1s;
		transition-property: all;
		&:focus-visible {
			box-shadow: var(--fui-focus-stroke);
		}
	}

	@media screen and (prefers-reduced-motion: reduce) {
		.fui-button-shell {
			transition-duration: 0.01ms;
		}
	}

	.fui-button-shell:disabled {
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
