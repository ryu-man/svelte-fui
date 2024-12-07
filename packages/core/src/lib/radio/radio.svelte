<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { nanoid } from 'nanoid';
	import { getRadioGroupContext } from './context';
	import { classnames } from '../internal';
	import type { RadioProps } from './types';

	const context_radio_group = getRadioGroupContext();

	let {
		class: klass = '',
		id = nanoid(),
		checked = $bindable(false),
		element = $bindable(undefined),
		name,
		value,
		onclick,
		onchange,
		...restProps
	}: RadioProps & HTMLAttributes<HTMLInputElement> = $props();

	const group_name = $derived(context_radio_group?.derived?.data?.name);
	const position = $derived(
		context_radio_group?.derived?.data?.layout === 'stacked-horizontal' ? 'below' : 'after'
	);
	const is_vertical = $derived(position === 'below');

	const disabled = $derived(context_radio_group?.derived?.data?.disabled ?? false);
	const required = $derived(context_radio_group?.derived?.data?.required ?? false);
</script>

<div
	bind:this={element}
	class={classnames(
		'fui-radio relative inline-flex items-center',
		is_vertical && 'flex-col items-center',
		{ vertical: is_vertical },
		klass
	)}
	aria-label={restProps['aria-label']}
	aria-labelledby={restProps['aria-labelledby']}
>
	<input
		type="radio"
		{id}
		name={group_name ?? name}
		class="fui-radio-input"
		class:below={is_vertical}
		{value}
		{disabled}
		{required}
		{onchange}
	/>
	<div aria-hidden="true" class="fui-radio-indicator">
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
		@apply border-thin my-s mx-s pointer-events-none box-border flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full  border-solid fill-current text-xs;
		width: var(--indicator-size);
		height: var(--indicator-size);
	}

	.fui-radio > :global(.fui-radio-label) {
		@apply py-s px-s cursor-pointer self-center;
	}
	.fui-radio > :global(.fui-radio-label.after) {
		@apply pl-xs;
		/* Use a (negative) margin to account for the difference between the indicator's height and the label's line height. */
		/* This prevents the label from expanding the height of the Radio, but preserves line height if the label wraps. */
		margin-top: calc((var(--indicator-size) - theme(lineHeight.base-300)) / 2);
		margin-bottom: calc((var(--indicator-size) - theme(lineHeight.base-300)) / 2);
	}
	.fui-radio > :global(.fui-radio-label.below) {
		@apply pt-xs text-center;
	}

	.fui-radio-input {
		@apply absolute m-0 box-border h-full opacity-0;
		position: absolute;
		left: 0;
		top: 0;
		width: calc(var(--indicator-size) + 2 * theme(spacing.s));

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
				@apply text-neutral-foreground-3;
			}
			& ~ .fui-radio-indicator {
				@apply border-neutral-stroke-accessible;
			}

			&:hover {
				& ~ :global(.fui-radio-label) {
					@apply text-neutral-foreground-2;
				}
				& ~ .fui-radio-indicator {
					@apply text-neutral-stroke-accessible-hover;
				}
			}

			&:hover:active {
				& ~ :global(.fui-radio-label) {
					@apply text-neutral-foreground-1;
				}
				& ~ .fui-radio-indicator {
					@apply text-neutral-stroke-accessible-pressed;
				}
			}
		}

		/* Colors for the checked state */
		&:enabled:checked {
			& ~ :global(.fui-radio-label) {
				@apply text-neutral-foreground-1;
			}
			& ~ .fui-radio-indicator {
				@apply text-compound-brand-foreground-1 border-compound-brand-stroke;
			}

			&:hover {
				& ~ .fui-radio-indicator {
					@apply text-compound-brand-foreground-1-hover border-compound-brand-stroke-hover;
				}
			}

			&:hover:active {
				& ~ .fui-radio-indicator {
					@apply text-compound-brand-foreground-1-pressed border-compound-brand-stroke-pressed;
				}
			}
		}

		/* Colors for the disabled state */
		&:disabled {
			& ~ :global(.fui-radio-label) {
				@apply text-neutral-foreground-disabled cursor-default;
			}
			& ~ .fui-radio-indicator {
				@apply border-neutral-stroke-disabled text-neutral-foreground-disabled;
			}
		}
	}

	.fui-radui-input.below {
		width: 100%;
		width: calc(var(--indicator-size) + 2 * theme(spacing.s));
	}
</style>
