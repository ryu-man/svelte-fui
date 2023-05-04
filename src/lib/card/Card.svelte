<script lang="ts">
	import { classnames } from 'svelte-fluentui/internal';
	import { setCardContext } from './context';

	// const focusMap = {
	// 	off: undefined,
	// 	'no-tab': 'limited-trap-focus',
	// 	'tab-exit': 'limited',
	// 	'tab-only': 'unlimited'
	// } as const;

	export let appearance: 'filled' | 'subtle' | 'outline' | 'filled-alternative' = 'filled';

	export let orientation: 'horizontal' | 'vertical' = 'vertical';
	export let size: 'sm' | 'md' | 'lg' | undefined = 'md';
	export let interactive = false;
	export let alternative = false;
	export let selected = false;
	// export let focusMode: 'off' | 'no-tab' | 'tab-exit' | 'tab-only' = 'off';
	export let style: string = '';
	let klass: string = '';
	export { klass as class };

	// $: tabBehaviour = interactive ? 'no-tab' : focusMap[focusMode];
</script>

<div class={classnames('fui-card', { orientation, size, interactive, alternative, selected }, appearance, klass)} {style} role="group">
	<slot />
</div>

<style lang="postcss">
	.fui-card {
		@apply relative box-border flex overflow-hidden rounded-md p-m shadow-4;

		--fui-card-border-radius: theme(borderRadius.md);
		--fui-card-size: theme(spacing.m);

		gap: var(--fui-card-size);
		background-color: var(--fui-colorNeutralBackground1);
		border-radius: var(--fui-card-border-radius);
		color: var(--fui-colorNeutralForeground1);

		/* Border setting using after pseudo element to allow CardPreview to render behind it. */
		&::after {
			@apply pointer-events-none absolute inset-0 border-thin border-solid;

			content: '';
			border-radius: inherit;
			border-color: var(--fui-colorTransparentStroke);
			/* pointerEvents: none;

      ...shorthands.borderStyle('solid');
      ...shorthands.borderWidth(tokens.strokeWidthThin);
      ...shorthands.borderRadius(`var(${cardCSSVars.cardBorderRadiusVar})`); */
		}

		/* Prevents CardHeader and CardFooter from shrinking. */
		> :global(.fui-card-header),
		> :global(.fui-card-footer) {
			flex-shrink: 0;
		}

		/* Allows non-card components to grow to fill the available space. */
		> :global(:not(.fui-card-preview):not(.fui-card-header):not(.fui-card-footer)) {
			flex-grow: 1;
		}

		&.selectable:focus-within {
			outline-width: theme(borderWidth.thin);
		}

		&.orientation-horizontal {
			flex-direction: row;
			align-items: center;

			/* Remove vertical padding to keep CardPreview content flush with Card's borders. */
			> .fui-card-preview {
				margin-top: calc(var(--fui-card-size) * -1);
				margin-bottom: calc(var(--fui-card-size) * -1);
			}
			/* Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    			As such, the code below targets a CardPreview, when it's the first element.
    			Since this is on horizontal cards, the left padding is removed to keep the content flush with the border. */
			> :global(:not([aria-hidden='true']).fui-card-preview:first-of-type) {
				margin-left: calc(var(--fui-card-size) * -1);
			}
			/* Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    			As such, the code below targets a CardPreview, when it's the last element.
    			Since this is on horizontal cards, the right padding is removed to keep the content flush with the border. */
			> :global(:not([aria-hidden='true']).fui-card-preview:last-of-type) {
				margin-right: calc(var(--fui-card-size) * -1);
			}

			/* If the last child is a CardHeader or CardFooter, allow it to grow to fill the available space. */
			> :global(.fui-card-header:last-of-type),
			> :global(.fui-card-footer:last-of-type) {
				flex-grow: 1;
			}
		}

		&.orientation-vertical {
			@apply flex-col;

			/* Remove lateral padding to keep CardPreview content flush with Card's borders. */
			> :global(.fui-card-preview) {
				margin-left: calc(var(--fui-card-size) * -1);
				margin-right: calc(var(--fui-card-size) * -1);
			}

			/* Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    			As such, the code below targets a CardPreview, when it's the first element.
    			Since this is on vertical cards, the top padding is removed to keep the content flush with the border. */
			> :global(:not([aria-hidden='true']).fui-card-preview:first-of-type) {
				margin-top: calc(var(--fui-card-size) * -1);
			}
			> :global(.floating-action + .fui-card-preview) {
				margin-top: calc(var(--fui-card-size) * -1);
			}

			/* Due to Tabster's "Groupper" focus functionality, hidden elements are injected before and after Card's content.
    			As such, the code below targets a CardPreview, when it's the first element.
    			Since this is on vertical cards, the bottom padding is removed to keep the content flush with the border. */
			> :global(:not([aria-hidden='true']).fui-card-preview:last-of-type) {
				margin-bottom: calc(var(--fui-card-size) * -1);
			}
		}

		&.size-sm {
			--fui-card-size: theme(spacing.s);
			--fui-card-border-radius: theme(borderRadius.sm);
		}

		&.size-md {
			--fui-card-size: theme(spacing.m);
			--fui-card-border-radius: theme(borderRadius.md);
		}

		&.size-lg {
			--fui-card-size: theme(spacing.l);
			--fui-card-border-radius: theme(borderRadius.lg);
		}

		&.filled {
			@apply shadow-4;
			background-color: var(--fui-colorNeutralBackground1);

			&::after {
				border-color: var(--fui-colorTransparentStroke);
			}

			&.interactive {
				@apply cursor-pointer;

				&:hover {
					@apply shadow-8;
					background-color: var(--fui-colorNeutralBackground1Hover);
				}
				,
				&:active {
					background-color: var(--fui-colorNeutralBackground1Pressed);
				}

				&.selected {
					background-color: var(--fui-colorNeutralBackground1Selected);

					&::after {
						border-color: var(--fui-colorNeutralStroke1Selected);
					}

					&:hover {
						background-color: var(--fui-colorNeutralBackground1Selected);
					}
				}
			}

			&.alternative {
				@apply shadow-4;
				background-color: var(--fui-colorNeutralBackground2);

				&::after {
					border-color: var(--fui-colorTransparentStroke);
				}

				&.interactive {
					@apply cursor-pointer shadow-4;
					background-color: var(--fui-colorNeutralBackground2);

					&::after {
						border-color: var(--fui-colorTransparentStroke);
					}

					&:hover {
						@apply shadow-8;
						background-color: var(--fui-colorNeutralBackground2Hover);
					}
					&:active {
						background-color: var(--fui-colorNeutralBackground2Pressed);
					}
				}
			}
		}

		&.filled-alternative {
			@apply shadow-4;
			background-color: var(--fui-colorNeutralBackground2);

			&::after {
				border-color: var(--fui-colorTransparentStroke);
			}
		}

		&.outline {
			@apply outline-none;
			background-color: var(--fui-colorTransparentBackground);
			box-shadow: none;

			&::after {
				border-color: var(--fui-colorNeutralStroke1);
			}
		}

		&.subtle {
			background-color: var(--fui-colorSubtleBackground);
			box-shadow: none;

			&::after {
				border-color: var(--fui-colorTransparentStroke);
			}
		}
	}
</style>
