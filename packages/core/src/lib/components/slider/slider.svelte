<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { classnames } from '@svelte-fui/core/internal';
	import type { SliderProps } from './types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		element = $bindable(),
		disabled = false,
		max = 100,
		min = 0,
		step = 1,
		value = 0,
		vertical = false,
		ref = undefined,
		...restProps
	}: HTMLAttributes<HTMLElement> & SliderProps = $props();

	const orientation = $derived(vertical ? 'vertical' : 'horizontal');
	const stepPercent = $derived(step > 1 ? (step * 100) / max : 100);
	const progress = $derived((value * 100) / max);
</script>

<div
	bind:this={element}
	use:reference={ref}
	class={classnames('fui-slider', orientation, { disabled })}
	{...restProps}
	style:--direction={vertical ? '0deg' : '90deg'}
	style:--progress={`${progress}%`}
	style:--steps-percent={`${stepPercent}%`}
>
	<input
		class={classnames('fui-slider-input', orientation)}
		id=""
		type="range"
		{min}
		{max}
		{step}
		{disabled}
		bind:value
	/>
	<div class={classnames('fui-slider-rail', orientation)}></div>
	<div class={classnames('fui-slider-thumb', orientation, { disabled })}></div>
</div>

<style lang="postcss">
	.fui-slider {
		position: relative;

		display: inline-grid;

		touch-action: none;

		align-items: center;

		justify-content: center;

		--fui-slider-thumb-size: var(---thumb-size, 20px);
		--fui-slider-rail-size: var(--rail-size, 4px);

		--fui-slider-rail-color: var(--fui-colorNeutralStrokeAccessible);
		--fui-slider-progress-color: var(--fui-colorCompoundBrandBackground);
		--fui-slider-thumb-color: var(--fui-colorCompoundBrandBackground);

		--fui-slider-slider-direction: var(--direction, 90deg);
		--fui-slider-slider-progress: var(--progress, 20%);
		--fui-slider-steps-percent: var(--steps-percent, 0);

		&:hover {
			--fui-slider-thumb-color: var(--fui-colorCompoundBrandBackgroundHover);
			--fui-slider-progress-color: var(--fui-colorCompoundBrandBackgroundHover);
		}
		&:active {
			--fui-slider-thumb-color: var(--fui-colorCompoundBrandBackgroundPressed);
			--fui-slider-progress-color: var(--fui-colorCompoundBrandBackgroundPressed);
		}
		@media (forced-colors: active) {
			--fui-slider-rail-color: CanvasText;
			--fui-slider-thumb-color: Highlight;
			--fui-slider-progress-color: Highlight;

			&:hover {
				--fui-slider-thumb-color: Highlight;
				--fui-slider-progress-color: Highlight;
			}
		}

		&.sm {
			--fui-slider-thumb-size: 16px;
			--fui-slider-rail-size: 2px;
			min-height: 24px;
		}

		&.md {
			--fui-slider-thumb-size: 20px;
			--fui-slider-rail-size: 4px;
			min-height: 32px;
		}

		&.horizontal {
			min-width: 120px;
			/* 3x3 grid with the rail and thumb in the center cell [2,2] and the hidden input stretching across all cells */
			grid-template-rows: 1fr var(--fui-slider-thumb-size) 1fr;
			grid-template-columns: 1fr calc(100% - var(--fui-slider-thumb-size)) 1fr;
		}

		&.vertical {
			align-items: center;

			justify-items: center;
			min-height: 120px;
			/* 3x3 grid with the rail and thumb in the center cell [2,2] and the hidden input stretching across all cells */
			grid-template-rows: 1fr calc(100% - var(--fui-slider-thumb-size)) 1fr;
			grid-template-columns: 1fr var(--fui-slider-thumb-size) 1fr;
		}

		&.enabled {
		}

		&.disabled {
			--fui-slider-thumb-color: var(--fui-colorNeutralForegroundDisabled);
			--fui-slider-rail-color: var(--fui-colorNeutralBackgroundDisabled);
			--fui-slider-progress-color: var(--fui-colorNeutralForegroundDisabled);

			@media (forced-colors: active) {
				--fui-slider-rail-color: GrayText;
				--fui-slider-thumb-color: GrayText;
				--fui-slider-progress-color: GrayText;
			}
		}

		/* &.focusIndicatorHorizontal {
			@apply border-transparent;

			&:focus {
				outline-style: none;
			}
			&:focus-within {
				outline-style: none;
			}

			&[data-fui-focus-within]:focus-within {
			}

			::after {
				@apply pointer-events-none absolute z-[1] border-solid;
                --outline-width: 2px;
                --outline-color: theme(colors.stroke-focus-2);
                --outline-raduis: theme(borderRadius.md);

				content: '';
                outline-color: var(--outline-color);
                border-radius: var(--outline-raduis);
                border-width: var(--border-width);

				top: var(--focus-indicator-horizontal-top);
				right: var(--focus-indicator-horizontal-right);
				bottom: var(--focus-indicator-horizontal-bottom);
				left: var(--focus-indicator-horizontal-left);
			}

		}

		&.focusIndicatorVertical:focus-within {

		} */
	}

	.fui-slider-rail {
		pointer-events: none;

		position: relative;

		border-radius: 8px;
		/* ...shorthands.borderRadius(colors.borderRadiusXLarge), */
		/* pointerEvents: 'none; */
		grid-row-start: 2;
		grid-row-end: 2;
		grid-column-start: 2;
		grid-column-end: 2;
		/* position: 'relative; */
		forced-color-adjust: none;
		/* forcedColorAdjust: 'none; */
		/* Background gradient represents the progress of the slider */
		background-image: linear-gradient(
			var(--fui-slider-slider-direction),
			var(--fui-slider-progress-color) 0%,
			var(--fui-slider-progress-color) var(--fui-slider-slider-progress),
			var(--fui-slider-rail-color) var(--fui-slider-slider-progress)
		);
		outline-width: 1px;
		outline-style: solid;
		outline-color: var(--fui-colorTransparentStroke);

		&::before {
			content: '';
			position: absolute;
			/* Repeating gradient represents the steps if provided */
			background-image: repeating-linear-gradient(
				var(--fui-slider-slider-direction),
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0) calc(var(--fui-slider-steps-percent) - 1px),
				var(--fui-colorNeutralBackground1) calc(var(--fui-slider-steps-percent) - 1px),
				var(--fui-colorNeutralBackground1) var(--fui-slider-steps-percent)
			);
			/* force steps to use HighlightText for high contrast mode */
			@media (forced-colors: active) {
				background-image: repeating-linear-gradient(
					var(--slider-DirectionVar),
					#0000 0%,
					#0000 calc(var(--fui-slider-steps-percent) - 1px),
					HighlightText calc(var(--fui-slider-steps-percent) - 1px),
					HighlightText var(--fui-slider-steps-percent)
				);
			}
		}

		&.horizontal {
			width: 100%;
			height: var(--fui-slider-rail-size);
			&::before {
				left: -1px;
				right: -1px;
				height: var(--fui-slider-rail-size);
			}
		}

		&.vertical {
			width: var(--fui-slider-rail-size);
			height: 100%;
			&::before {
				width: var(--fui-slider-rail-size);
				top: -1px;
				bottom: 1px;
			}
		}
	}

	.fui-slider-thumb {
		border-radius: 9999px;
		grid-row-start: 2;
		grid-row-end: 2;
		grid-column-start: 2;
		grid-column-end: 2;
		position: absolute;
		width: var(--fui-slider-thumb-size);
		height: var(--fui-slider-thumb-size);
		pointer-events: none;
		outline-style: none;
		forced-color-adjust: none;
		box-shadow: 0 0 0 calc(var(--fui-slider-thumb-size) * 0.2) var(--fui-colorNeutralBackground1)
			inset;
		background-color: var(--fui-slider-thumb-color);

		&::before {
			position: absolute;
			top: 0px;
			right: 0px;
			bottom: 0px;
			left: 0px;
			box-sizing: border-box;
			border-radius: 9999px;
			content: '';
			border: calc(var(--fui-slider-thumb-size) * 0.05) solid var(--fui-colorNeutralStroke1);
		}
		&.disabled {
			&::before {
				border: calc(var(--fui-slider-thumb-size) * 0.05) solid
					var(--fui-colorNeutralForegroundDisabled);
			}
		}
		&.horizontal {
			transform: translateX(-50%);
			left: var(--fui-slider-slider-progress);
		}
		&.vertical {
			transform: translateY(50%);
			bottom: var(--fui-slider-slider-progress);
		}
	}

	.fui-slider-input {
		margin: 0px;
		cursor: pointer;
		padding: 0px;
		opacity: 0;
		grid-row-start: 1;
		grid-row-end: -1;
		grid-column-start: 1;
		grid-column-end: -1;

		&:disabled {
			cursor: default;
		}

		&.horizontal {
			height: var(--fui-slider-thumb-size);
			width: 100%;
		}

		&.vertical {
			height: 100%;
			width: var(--fui-slider-thumb-size);
			-webkit-appearance: slider-vertical;
		}
	}
</style>
