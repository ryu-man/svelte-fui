<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { Icon } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import CheckmarkFilled from '@svelte-fui/core/icons/checkmark-filled.svelte';

	import type { CheckboxProps } from './types';

	let {
		class: klass = '',
		checked = $bindable(false),
		element = $bindable(undefined),
		indeterminate = false,
		disabled = false,
		circular = false,
		required = false,
		size = 'md',
		value,
		id,
		...restProps
	}: HTMLAttributes<HTMLInputElement> & CheckboxProps = $props();

	function onclick(e: Event) {
		if (disabled) return;

		checked = !checked;
	}
</script>

<button
	bind:this={element}
	class={classnames(
		'fui-checkbox inline-flex relative cursor-pointer align-middle',
		{ disabled },
		klass
	)}
	data-checked={checked}
	{onclick}
>
	<input class="fui-checkbox-input" type="checkbox" {id} {checked} {disabled} {...restProps} />
	<div
		class={classnames('fui-checkbox-indicator', { size, disabled, circular })}
		aria-hidden="true"
	>
		{#if checked}
			<Icon class="p-[5px]">
				<CheckmarkFilled />
			</Icon>
		{/if}
	</div>
</button>

<style lang="postcss">
	.fui-checkbox {
		--indicator-size-md: 16px;
		--indicator-size-lg: 20px;

		color: var(--fui-colorNeutralForeground3);
		/* ...createFocusOutlineStyle({ style: {}, selector: 'focus-within' }); */

		&:focus-within {
			@apply outline-none;
		}
		/* unchecked */
		&[data-checked='false']:not(.disabled) {
			&:hover {
				color: var(--fui-colorNeutralForeground2);

				& > .fui-checkbox-indicator {
					border-color: var(--fui-colorNeutralStrokeAccessibleHover);
				}
			}
		}

		&:active {
			color: var(--fui-colorNeutralForeground1);

			& > .fui-checkbox-indicator {
				border-color: var(--fui-colorNeutralStrokeAccessiblePressed);
			}
		}

		/* checked */
		&[data-checked='true']:not(.disabled) {
			color: var(--fui-colorNeutralForeground1);

			& > .fui-checkbox-indicator {
				background-color: var(--fui-colorCompoundBrandBackground);
				color: var(--fui-colorNeutralForegroundInverted);
				border-color: var(--fui-colorCompoundBrandBackground);
			}

			&:hover {
				& > .fui-checkbox-indicator {
					background-color: var(--fui-colorCompoundBrandBackgroundHover);
					border-color: var(--fui-colorCompoundBrandBackgroundHover);
				}
			}

			&:active {
				& > .fui-checkbox-indicator {
					background-color: var(--fui-colorCompoundBrandBackgroundPressed);
					border-color: var(--fui-colorCompoundBrandBackgroundPressed);
				}
			}
		}

		&.mixed {
			color: var(--fui-colorNeutralForeground1);

			& > .fui-checkbox-indicator {
				border-color: var(--fui-colorCompoundBrandStroke);
				color: var(--fui-colorCompoundBrandForeground1);
			}

			&:hover {
				& > .fui-checkbox-indicator {
					border-color: var(--fui-colorCompoundBrandStrokeHover);
					color: var(--fui-colorCompoundBrandForeground1Hover);
				}
			}

			&:active {
				& > .fui-checkbox-indicator {
					border-color: var(--fui-colorCompoundBrandStrokePressed);
					color: var(--fui-colorCompoundBrandForeground1Pressed);
				}
			}
		}

		&.disabled {
			@apply pointer-events-none cursor-default;
			color: var(--fui-colorNeutralForegroundDisabled);

			& > .fui-checkbox-indicator {
				border-color: var(--fui-colorNeutralStrokeDisabled);
				color: var(--fui-colorNeutralForegroundDisabled);
			}

			@media (forced-colors: active) {
				color: GrayText;

				& > .fui-checkbox-indicator {
					color: GrayText;
				}
			}
		}
	}

	input {
		@apply absolute top-0 m-0 box-border h-full opacity-0;

		cursor: inherit;
		/* Calculate the width of the hidden input by taking into account the size of the indicator + the padding around it.
		This is done so that clicking on that "empty space" still toggles the checkbox. */
		width: calc(var(--indicator-size-md) + 2 * theme(spacing.s));

		&.before {
			right: 0;
		}
		&.after {
			left: 0;
		}

		&.size-lg {
			width: calc(var(--indicator-size-lg) + 2 * theme(spacing.s));
		}
	}

	.fui-checkbox-indicator {
		@apply pointer-events-none box-border flex items-center justify-center self-start overflow-hidden rounded-sm;

		--fui-icon-size: calc(16px - 4px);

		flex-shrink: 0;
		border-width: theme(borderWidth.thin);
		border-color: var(--fui-colorNeutralStrokeAccessible);
		/* border: tokens.strokeWidthThin + ' solid ' + tokens.colorNeutralStrokeAccessible; */
		/* borderRadius: tokens.borderRadiusSmall; */
		margin: theme(spacing.s) theme(spacing.s);
		fill: currentColor;

		font-size: 12px;
		height: var(--indicator-size-md);
		width: var(--indicator-size-md);

		&.size-lg {
			--fui-icon-size: calc(20px - 4px);

			font-size: 16px;
			height: var(--indicator-size-lg);
			width: var(--indicator-size-lg);
		}

		&.circular {
			@apply rounded-full;
		}
	}

	.fui-checkbox-label {
		@apply font-base text-base-300 leading-base-300;

		align-self: center;
		color: inherit;
		cursor: inherit;
		padding: theme(spacing.s) theme(spacing.s);

		&.before {
			padding-right: theme(spacing.xs);
		}
		&.after {
			padding-left: theme(spacing.xs);
		}

		/* Use a (negative) margin to account for the difference between the indicator's height and the label's line height.
		This prevents the label from expanding the height of the checkbox, but preserves line height if the label wraps. */
		&.size-md {
			margin-top: calc((var(--indicator-size-md) - theme(lineHeight.base-300)) / 2);
			margin-bottom: calc((var(--indicator-size-md) - theme(lineHeight.base-300)) / 2);
		}
		&.size-lg {
			margin-top: calc((var(--indicator-size-lg) - theme(lineHeight.base-300)) / 2);
			margin-bottom: calc((var(--indicator-size-lg) - theme(lineHeight.base-300)) / 2);
		}
	}
</style>
