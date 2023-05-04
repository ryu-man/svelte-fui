<script lang="ts">
	import { classnames } from 'svelte-fluentui/internal';

	export let disabled = false;
	export let required = false;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let weight: 'regular' | 'semibold' = 'regular';
</script>

<label class={classnames('fui-label', { disabled, required }, size, weight)}>
	<slot />
</label>

<style lang="postcss">
	.fui-label {
		@apply font-base;
		color: var(--fui-colorNeutralForeground1);

		&.disabled {
			color: var(--fui-colorNeutralForegroundDisabled);

			&.required {
				color: var(--fui-colorNeutralForegroundDisabled);
			}
		}

		&.required {
			color: var(--fui-colorPaletteRedForeground3);
			padding-left: theme(spacing.xs); /* TODO: Once spacing tokens are added, change this to Horizontal XS */
		}
/* 
		&.requiredDisabled {
		} */

		&.sm {
			@apply text-base-200 leading-base-200;
		}

		&.md {
			@apply text-base-300 leading-base-300;
		}

		&.lg {
			@apply text-base-400 font-semibold leading-base-400;
		}

		&.semibold {
			@apply font-semibold;
		}
	}
</style>
