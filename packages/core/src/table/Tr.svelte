<script lang="ts">
	import { classnames } from '../internal';

	export let appearance: 'none' | 'neutral' | 'brand' = 'none';
	export let size: 'md' | 'sm' | 'xs' = 'md';
	export let header = false;
	let klass = '';
	export { klass as class };
</script>

<tr class={classnames('fui-table-row', size, appearance !== 'none' ? appearance : '', { header }, klass)}>
	<slot />
</tr>

<style lang="postcss">
	.interactive {
		&:hover {
			@apply bg-subtle-background-hover text-neutral-foreground-1-hover;
			& :global(.fui-table-cell-actions) {
				@apply opacity-100;
			}
			& :global(.fui-table-selection-cell) {
				@apply opacity-100;
			}
		}

		&:active {
			@apply bg-subtle-background-pressed text-neutral-foreground-1-pressed;

			& :global(.fui-table-cell-actions) {
				@apply opacity-100;
			}

			& :global(.fui-table-selection-cell) {
				@apply opacity-100;
			}
		}
	}

	.md {
		@apply border-thin border-neutral-stroke-2 border-b;
	}
	.sm {
		@apply border-thin border-neutral-stroke-2 border-b;
	}
	.xs {
		@apply text-base-200;
	}

	.brand {
		@apply bg-brand-background-2 border-transparent-stroke-interactive;

		& :active {
			@apply bg-brand-background-inverted-selected;
		}

		@media (forced-colors: active) {
			@apply box-border rounded-md border-2 border-solid border-transparent;
			&:focus-visible {
				outline-offset: -4px;
			}
		}
	}

	.neutral {
		@media (forced-colors: active) {
			@apply box-border rounded-md border-2 border-solid border-transparent;

			&:focus-visible {
				outline-offset: -4px;
			}
		}

		@apply bg-subtle-background-selected text-neutral-foreground-1-hover border-neutral-stroke-on-brand;

		&:hover {
			@apply bg-subtle-background-selected;
		}
		&:active {
			@apply bg-subtle-background-selected;
		}
	}

	.fui-table-row {
		@apply border-b-thin border-b-neutral-stroke-2 text-neutral-foreground-1 box-border;

		&:global(:not(.header)) {
			@apply interactive;
		}
	}
</style>
