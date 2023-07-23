<script lang="ts">
	import { getSharedContext } from '../context';
	import { classnames } from '../internal';

	const sharedContext$ = getSharedContext<{  size: 'sm' | 'md' | 'lg' }>('label') || {};

	export let disabled = false;
	export let required = false;
	export let size: 'sm' | 'md' | 'lg' = $sharedContext$.size || 'md';
	export let weight: 'regular' | 'semibold' = 'regular';

	let klass = '';
	export { klass as class };
</script>

<label class={classnames('fui-label', { disabled, required }, size, weight, klass)} {...$$restProps}>
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
			@apply text-base-400 leading-base-400 font-semibold;
		}

		&.semibold {
			@apply font-semibold;
		}
	}
</style>
