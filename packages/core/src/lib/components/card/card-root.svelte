<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';
	import type { CardRootProps } from './types';

	// const focusMap = {
	// 	off: undefined,
	// 	'no-tab': 'limited-trap-focus',
	// 	'tab-exit': 'limited',
	// 	'tab-only': 'unlimited'
	// } as const;

	// export let appearance: 'filled' | 'subtle' | 'outline' | 'filled-alternative' = 'filled';

	// export let orientation: 'horizontal' | 'vertical' = 'vertical';
	// export let size: 'sm' | 'md' | 'lg' = 'md';
	// export let interactive = false;
	// export let alternative = false;
	// export let selected = false;
	// export let focusMode: 'off' | 'no-tab' | 'tab-exit' | 'tab-only' = 'off';
	// export let style: string = '';
	// let klass: string = '';
	// export { klass as class };

	let {
		element = $bindable(),
		class: klass = '',
		appearance = 'filled',
		orientation = 'vertical',
		size = 'md',
		interactive = false,
		alternative = false,
		selected = false,
		children = undefined,
		ref = undefined
	}: CardRootProps = $props();

	// $: tabBehaviour = interactive ? 'no-tab' : focusMap[focusMode];
</script>

<div
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-card p-m shadow-4 relative box-border flex overflow-hidden rounded-md',
		{ interactive, alternative, selected },
		appearance,
		orientation,
		size,
		klass
	)}
	role="group"
>
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-card {
		--fui-card-border-radius: var(--border-radius-md);
		--fui-card-size: var(--spacing-m);

		gap: var(--fui-card-size);
		background-color: var(--fui-colorNeutralBackground1);
		border-radius: var(--fui-card-border-radius);
		color: var(--fui-colorNeutralForeground1);

		/* Border setting using after pseudo element to allow CardPreview to render behind it. */
		&::after {
			/* @apply border-thin pointer-events-none absolute inset-0 border-solid; */

			content: '';
			border-radius: inherit;
			border-color: var(--fui-colorTransparentStroke);
			border-width: var(--border-width-thin);
			pointer-events: none;
			position: absolute;
			inset: 0;
			border-style: solid;
			/* pointerEvents: none;

			...shorthands.borderStyle('solid');
			...shorthands.borderWidth(tokens.strokeWidthThin);
			...shorthands.borderRadius(`var(${cardCSSVars.cardBorderRadiusVar})`); */
		}

		/* Prevents CardHeader and CardFooter from shrinking. */
		& > :global(.fui-card-header),
		& > :global(.fui-card-footer) {
			flex-shrink: 0;
		}

		/* Allows non-card components to grow to fill the available space. */
		& > :global(:not(.fui-card-preview):not(.fui-card-header):not(.fui-card-footer)) {
			flex-grow: 1;
		}

		&.selectable:focus-within {
			outline-width: var(--border-width-thin);
		}

		&.horizontal {
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

		&.vertical {
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
			--fui-card-size: var(--spacing-s);
			--fui-card-border-radius: var(border-radius-sm);
		}

		&.size-md {
			--fui-card-size: var(--spacing-m);
			--fui-card-border-radius: var(--border-radius-md);
		}

		&.size-lg {
			--fui-card-size: var(--spacing-l);
			--fui-card-border-radius: var(--border-radius-lg);
		}

		&.filled {
			/* @apply shadow-4; */
			background-color: var(--fui-colorNeutralBackground1);
			box-shadow: var(--fui-shadow4);

			&::after {
				border-color: var(--fui-colorTransparentStroke);
			}

			&.interactive {
				/* @apply cursor-pointer; */
				cursor: pointer;

				&:hover {
					/* @apply shadow-8; */
					background-color: var(--fui-colorNeutralBackground1Hover);

					--tw-shadow: var(--fui-shadow8);
					--tw-shadow-colored: var(--fui-shadow8);
					box-shadow:
						var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
						var(--tw-shadow);
				}

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
				/* @apply shadow-4; */
				background-color: var(--fui-colorNeutralBackground2);

				--tw-shadow: var(--fui-shadow4);
				--tw-shadow-colored: var(--fui-shadow4);
				box-shadow:
					var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
					var(--tw-shadow);

				&::after {
					border-color: var(--fui-colorTransparentStroke);
				}

				&.interactive {
					/* @apply shadow-4 cursor-pointer; */
					cursor: pointer;
					background-color: var(--fui-colorNeutralBackground2);

					--tw-shadow: var(--fui-shadow4);
					--tw-shadow-colored: var(--fui-shadow4);
					box-shadow:
						var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
						var(--tw-shadow);

					&::after {
						border-color: var(--fui-colorTransparentStroke);
					}

					&:hover {
						/* @apply shadow-8; */
						background-color: var(--fui-colorNeutralBackground2Hover);

						--tw-shadow: var(--fui-shadow8);
						--tw-shadow-colored: var(--fui-shadow8);
						box-shadow:
							var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
							var(--tw-shadow);
					}
					&:active {
						background-color: var(--fui-colorNeutralBackground2Pressed);
					}
				}
			}
		}

		&.filled-alternative {
			/* @apply shadow-4; */
			background-color: var(--fui-colorNeutralBackground2);

			--tw-shadow: var(--fui-shadow4);
			--tw-shadow-colored: var(--fui-shadow4);
			box-shadow:
				var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

			&::after {
				border-color: var(--fui-colorTransparentStroke);
			}
		}

		&.outline {
			/* @apply outline-none; */
			background-color: var(--fui-colorTransparentBackground);
			box-shadow: none;

			outline: none;

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
