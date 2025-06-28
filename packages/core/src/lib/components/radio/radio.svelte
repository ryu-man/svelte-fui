<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { nanoid } from 'nanoid';
	import { getRadioGroupContext } from './context';
	import { classnames } from '@svelte-fui/core/internal';
	import type { RadioProps } from './types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	const contextRadioGroup = getRadioGroupContext();

	let {
		element = $bindable(),
		class: klass = '',
		id = nanoid(),
		checked = $bindable(false),
		name,
		value,
		ref,
		onclick,
		onchange,
		...restProps
	}: RadioProps & HTMLAttributes<HTMLInputElement> = $props();

	const groupName = $derived(contextRadioGroup?.derived?.data?.name);
	const position = $derived(
		contextRadioGroup?.derived?.data?.layout === 'stacked-horizontal' ? 'below' : 'after'
	);
	const isVertical = $derived(position === 'below');

	const disabled = $derived(contextRadioGroup?.derived?.data?.disabled ?? false);
	const required = $derived(contextRadioGroup?.derived?.data?.required ?? false);
</script>

<div
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-radio relative inline-flex items-center',
		isVertical && 'flex-col items-center',
		{ vertical: isVertical },
		klass
	)}
	aria-label={restProps['aria-label']}
	aria-labelledby={restProps['aria-labelledby']}
>
	<input
		type="radio"
		{id}
		name={groupName ?? name}
		class="fui-radio-input"
		class:below={isVertical}
		{value}
		{disabled}
		{required}
		{onchange}
	/>
	<div
		aria-hidden="true"
		class="fui-radio-indicator border-thin my-s mx-s pointer-events-none box-border flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-solid fill-current text-xs"
	>
		<svg
			fill="currentColor"
			class=""
			aria-hidden="true"
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" fill="currentColor" />
		</svg>
	</div>
</div>

<style lang="postcss">
	.fui-radio {
		--indicator-size: 16px;
	}

	.fui-radio-indicator {
		width: var(--indicator-size);
		height: var(--indicator-size);
	}

	.fui-radio > :global(.fui-radio-label) {
		padding-block: var(--spacing-s);
		padding-inline: var(--spacing-s);
		cursor: pointer;
		align-self: center;
	}
	.fui-radio > :global(.fui-radio-label.after) {
		padding-left: var(--spacing-xs);
		/* Use a (negative) margin to account for the difference between the indicator's height and the label's line height. */
		/* This prevents the label from expanding the height of the Radio, but preserves line height if the label wraps. */
		margin-top: calc((var(--indicator-size) - var(--line-height-base-300)) / 2);
		margin-bottom: calc((var(--indicator-size) - var(--line-height-base-300)) / 2);
	}
	.fui-radio > :global(.fui-radio-label.below) {
		padding-top: var(--spacing-xs);
		text-align: center;
	}

	.fui-radio-input {
		/* @apply absolute m-0 box-border h-full opacity-0; */
		position: absolute;
		left: 0;
		top: 0;
		margin: 0;
		opacity: 0;
		box-sizing: border-box;
		width: calc(var(--indicator-size) + 2 * var(--spacing-s));

		&:enabled {
			cursor: pointer;
			& ~ .fui-radio-indicator {
				cursor: pointer;
			}
		}

		/* When unchecked, hide the circle icon (child of the indicator) */
		&:not(:checked) ~ .fui-radio-indicator > * {
			opacity: 0;
		}

		/* Colors for the unchecked state */
		&:enabled:not(:checked) {
			& ~ :global(.fui-radio-label) {
				/* @apply text-neutral-foreground-3; */
				color: var(--fui-colorNeutralForeground3);
			}
			& ~ .fui-radio-indicator {
				/* @apply border-neutral-stroke-accessible; */
				border-color: var(--fui-colorNeutralStrokeAccessible);
			}

			&:hover {
				& ~ :global(.fui-radio-label) {
					/* @apply text-neutral-foreground-2; */
					color: var(--fui-colorNeutralForeground2);
				}
				& ~ .fui-radio-indicator {
					/* @apply text-neutral-stroke-accessible-hover; */
					color: var(--fui-colorNeutralStrokeAccessibleHover);
				}
			}

			&:hover:active {
				& ~ :global(.fui-radio-label) {
					/* @apply text-neutral-foreground-1; */
					color: var(--fui-colorNeutralForeground1);
				}
				& ~ .fui-radio-indicator {
					/* @apply text-neutral-stroke-accessible-pressed; */
					color: var(--fui-colorNeutralStrokeAccessiblePressed);
				}
			}
		}

		/* Colors for the checked state */
		&:enabled:checked {
			& ~ :global(.fui-radio-label) {
				/* @apply text-neutral-foreground-1; */
				color: var(--fui-colorNeutralForeground1);
			}
			& ~ .fui-radio-indicator {
				/* @apply text-compound-brand-foreground-1 border-compound-brand-stroke; */
				color: var(--fui-colorCompoundBrandForeground1);
				border-color: var(--fui-colorCompoundBrandStroke);
			}

			&:hover {
				& ~ .fui-radio-indicator {
					/* @apply text-compound-brand-foreground-1-hover border-compound-brand-stroke-hover; */
					color: var(--fui-colorCompoundBrandForeground1Hover);
					border-color: var(--fui-colorCompoundBrandStrokeHover);
				}
			}

			&:hover:active {
				& ~ .fui-radio-indicator {
					/* @apply text-compound-brand-foreground-1-pressed border-compound-brand-stroke-pressed; */
					color: var(--fui-colorCompoundBrandForeground1Pressed);
					border-color: var(--fui-colorCompoundBrandStrokePressed);
				}
			}
		}

		/* Colors for the disabled state */
		&:disabled {
			& ~ :global(.fui-radio-label) {
				/* @apply text-neutral-foreground-disabled cursor-default; */
				color: var(--fui-colorNeutralForegroundDisabled);
				cursor: default;
			}
			& ~ .fui-radio-indicator {
				/* @apply border-neutral-stroke-disabled text-neutral-foreground-disabled; */
				border-color: var(--fui-colorNeutralStrokeDisabled);
				color: var(--fui-colorNeutralForegroundDisabled);
			}
		}
	}

	.fui-radui-input.below {
		width: 100%;
		width: calc(var(--indicator-size) + 2 * var(--spacing-s));
	}
</style>
