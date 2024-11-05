<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { LabelProps } from './types';

	let {
		class: klass = '',
		disabled = false,
		required = false,
		size,
		children,
		...restProps
	}: LabelProps = $props();
</script>

<label
	class={classnames(
		'fui-label font-base',
		{ disabled, required },
		klass,
		size === 'sm' && 'text-base-200 leading-base-200',
		size === 'md' && 'text-base-300 leading-base-300',
		size === 'lg' && 'text-base-400 leading-base-400 font-semibold'
	)}
	{...restProps}
>
	{@render children?.()}
</label>

<style lang="postcss">
	.fui-label {
		@apply text-neutral-foreground-1;

		&.disabled {
			@apply text-neutral-foreground-disabled;

			&.required {
				@apply text-neutral-foreground-disabled;
			}
		}

		&.required {
			@apply pl-xs text-palette-red-foreground-3;
		}
		/* 
		&.requiredDisabled {
		} 
		*/

		&.semibold {
			@apply font-semibold;
		}
	}
</style>
