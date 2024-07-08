<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { LabelProps } from './types';

	type $$Props = LabelProps;

	export let disabled: $$Props['disabled'] = false;
	export let required: $$Props['required'] = false;
	export let size: $$Props['size'] = 'md';

	let klass: $$Props['class'] = '';
	export { klass as class };
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
	{...$$restProps}
>
	<slot />
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
