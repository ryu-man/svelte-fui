<script lang="ts">
	import { classnames } from '../internal';
	import type { SwitchProps } from './types';

	let {
		class: klass = '',
		position = 'before',
		checked = false,
		disabled = false,
		readonly = false,
		required = false,
		id = undefined,
		element = $bindable(undefined),
		onchange
	}: SwitchProps = $props();
</script>

<div
	bind:this={element}
	class={classnames('fui-switch', { vertical: position === 'above' }, position, klass)}
>
	<input
		{id}
		role="switch"
		type="checkbox"
		class={classnames('fui-switch-input', position)}
		bind:checked
		{required}
		{disabled}
		{readonly}
		{onchange}
	/>
	<div aria-hidden="true" class="fui-switch-indicator">
		<svg
			fill="currentColor"
			class=""
			aria-hidden="true"
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" fill="currentColor" />
		</svg>
	</div>
</div>

<style lang="postcss">
	.fui-switch {
		@apply relative box-border inline-flex items-start;

		--space-between-thumb-and-track: 2px;
		--track-height: 20px;
		--track-width: 40px;
		--thumb-size: calc(var(--track-height) - var(--space-between-thumb-and-track));

		&.vertical {
			@apply flex-col-reverse;
		}

		&.before {
			@apply inline-flex flex-row-reverse;
		}
	}

	.fui-switch > :global(.fui-label) {
		@apply cursor-pointer p-s;

		/* Use a (negative) margin to account for the difference between the track's height and the label's line height.
		This prevents the label from expanding the height of the switch, but preserves line height if the label wraps. */
		margin-bottom: calc((var(--track-height) - theme(lineHeight.base-300)) / 2);
		margin-top: calc((var(--track-height) - theme(lineHeight.base-300)) / 2);
	}

	.fui-switch.above > :global(.fui-label) {
		@apply w-full pb-xs pt-xs;
	}
	.fui-switch.after > :global(.fui-label) {
		@apply pr-xs;
	}
	.fui-switch.before > :global(.fui-label) {
		@apply pr-xs;
	}

	.fui-switch-indicator {
		@apply pointer-events-none m-s box-border flex-shrink-0 rounded-full fill-current text-lg duration-normal ease-easy-ease;
		/* border-radius: tokens.borderRadiusCircular; */
		border: 1px solid;
		line-height: 0;
		/* box-sizing: border-box; */
		/* fill: currentColor; */
		/* flex-shrink: 0; */
		/* font-size: var(--thumb-size); */
		height: var(--track-height);
		/* margin: tokens.spacingVerticalS + ' ' + tokens.spacingHorizontalS; */
		/* pointer-events: none; */
		/* transition-duration: theme(transitionDuration.normal); */
		/* transition-timing-function: theme(transitionTimingFunction.easy-ease); */
		transition-property: background, border, color;
		width: var(--track-width);

		@media screen and (prefers-reduced-motion: reduce) {
			transition-duration: 0.01ms;
		}

		& > * {
			@apply duration-normal ease-easy-ease;
			/* transition-duration: tokens.durationNormal; */
			/* transition-timingFunction: tokens.curveEasyEase; */
			transition-property: transform;

			@media screen and (prefers-reduced-motion: reduce) {
				transition-duration: 0.01ms;
			}
		}
	}

	.fui-switch-indicator.above {
		@apply mt-0;
	}

	.fui-switch-input {
		@apply absolute box-border cursor-pointer;
		height: 100%;
		margin: 0;
		opacity: 0;

		/* Calculate the width of the hidden input by taking into account the size of the indicator + the padding around it.
    	This is done so that clicking on that "empty space" still toggles the switch. */
		width: calc(var(--track-width) + 2 * theme(spacing.s));

		/* Checked (both enabled and disabled) */
		&:checked {
			& ~ .fui-switch-indicator {
				> * {
					transform: translateX(
						calc(var(--track-width) - var(--thumb-size) - var(--space-between-thumb-and-track))
					);
				}
			}
		}

		/* Disabled (both checked and unchecked) */
		&:disabled {
			cursor: default;

			& ~ .fui-switch-indicator {
				@apply text-neutral-foreground-disabled;
			}

			& ~ :global(.fui-label) {
				@apply cursor-default text-neutral-foreground-disabled;
			}
		}

		/* Enabled and unchecked */
		&:enabled:not(:checked) {
			& ~ .fui-switch-indicator {
				@apply border-neutral-stroke-accessible text-neutral-stroke-accessible;
			}

			& ~ :global(.fui-label) {
				@apply text-neutral-foreground-1;
			}

			&:hover {
				& ~ .fui-switch-indicator {
					@apply border-neutral-stroke-accessible-hover text-neutral-stroke-accessible-hover;
				}
			}

			&:hover:active {
				& ~ .fui-switch-indicator {
					@apply border-neutral-stroke-accessible-pressed text-neutral-stroke-accessible-pressed;
				}
			}
		}

		/* Enabled and checked */
		&:enabled:checked {
			& ~ .fui-switch-indicator {
				@apply border-transparent-stroke bg-compound-brand-background text-neutral-foreground-inverted;
				/* background-color: tokens.colorCompoundBrandBackground,
           color: tokens.colorNeutralForegroundInverted,
           border-color: tokens.colorTransparentStroke, */
			}

			&:hover {
				& ~ .fui-switch-indicator {
					@apply border-transparent-stroke-interactive bg-compound-brand-background-hover;
				}
			}

			&:hover:active {
				& ~ .fui-switch-indicator {
					@apply border-transparent-stroke-interactive text-compound-brand-background-pressed;
				}
			}
		}

		/* Disabled and unchecked */
		&:disabled:not(:checked) {
			& ~ .fui-switch-indicator {
				@apply text-neutral-stroke-disabled;
			}
		}

		/* Disabled and checked */
		&:disabled:checked {
			& ~ .fui-switch-indicator {
				@apply border-transparent-stroke-disabled text-neutral-background-disabled;
			}
		}

		@media (forced-colors: active) {
			&:disabled {
				& ~ .fui-switch-indicator {
					color: grayText;
					border-color: grayText;
				}

				& ~ :global(.fui-label) {
					color: grayText;
				}
			}

			&:enabled:checked {
				:hover {
					& ~ .fui-switch-indicator {
						background-color: highlight;
						color: canvas;
					}
				}
				& ~ .fui-switch-indicator {
					background-color: highlight;
					color: canvas;
				}
			}
		}
	}

	.fui-switch-input {
		&.before {
			right: 0;
			top: 0;
		}
		&.after {
			left: 0;
			top: 0;
		}
		&.above {
			bottom: 0;
			height: calc(var(--track-height) + theme(spacing.s));
			width: 100%;
		}
	}
</style>
