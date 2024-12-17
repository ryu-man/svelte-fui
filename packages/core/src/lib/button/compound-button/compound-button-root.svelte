<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import Button from '../button.svelte';
	import type { CompoundButtonRoot } from './types';

	/** @restProps {button | a} */
	/** Specifies the visual styling of the button. */
	// export let variant: 'standard' | 'accent' | 'hyperlink' = 'standard';

	let {
		class: klass = '',
		icon = false,
		disabled = false,
		href = undefined,
		size = 'md',
		appearance = 'secondary',
		shape = 'rounded',
		children,
		...restProps
	}: CompoundButtonRoot = $props();
</script>

<Button
	class={classnames(
		'fui-compound-button px-3 py-4',
		size === 'sm' && icon && 'p-xs h-[48px]',
		size === 'md' && icon && 'p-sNudge h-[52px]',
		size === 'lg' && icon && 'p-s h-[56px]'
	)}
	{shape}
	{size}
	{appearance}
	{href}
	{disabled}
	{icon}
	{...restProps}
>
	{#snippet children(args)}
		<div class={classnames('fui-compound-button-inner', 'gap-3', icon && 'gap-0')}>
			{@render children?.(args)}
		</div>
	{/snippet}
</Button>

<style lang="postcss">
	.fui-compound-button-inner {
		@apply grid justify-items-start;

		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;

		grid-template-areas: 'icon header' 'icon body';

		--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2');

		&:hover {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2-hover');
		}

		&:hover:active {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2-pressed');
		}
	}

	.high-contrast {
		@media (forced-colors: active) {
			&:hover {
				--fui-compound-body-secondary-color: Highlight;
			}

			&:hover:active {
				--fui-compound-body-secondary-color: Highlight;
			}
		}
	}

	.primary {
		--fui-compound-body-secondary-color: theme('colors.neutral-foreground-on-brand');

		&:hover {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-on-brand');
		}

		&:hover:active {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-on-brand');
		}

		@media (forced-colors: active) {
			--fui-compound-body-secondary-color: HighlightText;
		}
	}

	.secondary {
		/* The secondary styles are exactly the same as the base styles. */
	}

	.subtle {
		--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2');

		&:hover {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2-hover');
		}

		&:hover:active {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2-pressed');
		}

		@media (forced-colors: active) {
			&:hover {
				--fui-compound-body-secondary-color: Canvas;
			}
			&:hover:active {
				--fui-compound-body-secondary-color: Canvas;
			}
		}
	}

	.transparent {
		--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2');

		&:hover {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2-brand-hover');
		}

		&:hover:active {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-2-brand-pressed');
		}
	}

	.sm {
		@apply p-s pb-mNudge text-base-300 leading-base-300;

		--fui-compound-body-secondary-font-size: theme('fontSize.base-200');
	}

	.md {
		@apply px-m pb-l text-base-300 leading-base-300 p-[14px];
		--fui-compound-body-secondary-font-size: theme('fontSize.base-200');
	}

	.lg {
		@apply px-l pb-xl text-base-400 leading-base-400 p-[18px];
		--fui-compound-body-secondary-font-size: theme('fontSize.base-300');
	}

	/* Disabled styles */
	:disabled {
		--fui-compound-body-secondary-color: theme('colors.neutral-foreground-disabled');

		&:hover {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-disabled');
		}

		&:hover:active {
			--fui-compound-body-secondary-color: theme('colors.neutral-foreground-disabled');
		}
	}

	/* Disabled high contrast styles */
	:disabled.high-contrast {
		@media (forced-colors: active) {
			--fui-compound-body-secondary-color: GrayText;

			&:hover {
				--fui-compound-body-secondary-color: GrayText;
			}

			&:hover:active {
				--fui-compound-body-secondary-color: GrayText;
			}
		}
	}

	.icon {
		@apply aspect-square;
	}
</style>
