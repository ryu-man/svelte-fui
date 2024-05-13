<script lang="ts">
	import { classnames } from '../internal';

	export let value: number = 0;
	export let min: number = 0;
	export let max: number = 100;
	export let step: number = 1;
	export let vertical = false;
	export let disabled = false;

	$: orientation = vertical ? 'vertical' : 'horizontal';
	$: stepPercent = step > 1 ? (step * 100) / max : 100;
	$: progress = (value * 100) / max;
</script>

<div
	class={classnames('fui-slider', orientation, { disabled })}
	style="--direction: {vertical ? '0deg' : '90deg'}; --progress: {progress}%; --steps-percent: {stepPercent}%;"
>
	<input class={classnames('fui-slider-input', orientation)} id="" type="range" {min} {max} {step} {disabled} bind:value />
	<div class={classnames('fui-slider-rail', orientation)} />
	<div class={classnames('fui-slider-thumb', orientation, { disabled })} />
</div>

<style lang="postcss">
	.fui-slider {
		@apply relative inline-grid touch-none items-center justify-center;

		--fui-slider-thumb-size: var(---thumb-size, 20px);
		--fui-slider-rail-size: var(--rail-size, 4px);

		--fui-slider-rail-color: theme(colors.neutral-stroke-accessible);
		--fui-slider-progress-color: theme(colors.compound-brand-background);
		--fui-slider-thumb-color: theme(colors.compound-brand-background);

		--fui-slider-slider-direction: var(--direction, 90deg);
		--fui-slider-slider-progress: var(--progress, 20%);
		--fui-slider-steps-percent: var(--steps-percent, 0);

		&:hover {
			--fui-slider-thumb-color: theme(colors.compound-brand-background-hover);
			--fui-slider-progress-color: theme(colors.compound-brand-background-hover);
		}
		&:active {
			--fui-slider-thumb-color: theme(colors.compound-brand-background-pressed);
			--fui-slider-progress-color: theme(colors.compound-brand-background-pressed);
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
			@apply items-center justify-items-center;
			min-height: 120px;
			/* 3x3 grid with the rail and thumb in the center cell [2,2] and the hidden input stretching across all cells */
			grid-template-rows: 1fr calc(100% - var(--fui-slider-thumb-size)) 1fr;
			grid-template-columns: 1fr var(--fui-slider-thumb-size) 1fr;
		}

		&.enabled {
		}

		&.disabled {
			--fui-slider-thumb-color: theme(colors.neutral-foreground-disabled);
			--fui-slider-rail-color: theme(colors.neutral-background-disabled);
			--fui-slider-progress-color: theme(colors.neutral-foreground-disabled);
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
		@apply pointer-events-none relative rounded-xl;
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
		outline-color: theme(colors.transparent-stroke);

		&::before {
			content: '';
			position: absolute;
			/* Repeating gradient represents the steps if provided */
			background-image: repeating-linear-gradient(
				var(--fui-slider-slider-direction),
				#0000 0%,
				#0000 calc(var(--fui-slider-steps-percent) - 1px),
				theme(colors.neutral-background-1) calc(var(--fui-slider-steps-percent) - 1px),
				theme(colors.neutral-background-1) var(--fui-slider-steps-percent)
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
		@apply rounded-circular;
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
		box-shadow: 0 0 0 calc(var(--fui-slider-thumb-size) * 0.2) theme(colors.neutral-background-1) inset;
		background-color: var(--fui-slider-thumb-color);

		&::before {
			@apply rounded-circular absolute inset-0 box-border;
			content: '';
			border: calc(var(--fui-slider-thumb-size) * 0.05) solid theme(colors.neutral-stroke-1);
		}
		&.disabled {
			&::before {
				border: calc(var(--fui-slider-thumb-size) * 0.05) solid theme(colors.neutral-foreground-disabled);
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
		@apply m-0 cursor-pointer p-0 opacity-0;
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
