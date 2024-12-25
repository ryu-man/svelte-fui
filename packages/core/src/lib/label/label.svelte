<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import { classnames } from '@svelte-fui/core/internal';

	import type { LabelProps } from './types';

	import { getSharedContext } from '../internal/context';

	type $$Props = LabelProps;

	type ExternalContext = {
		size: 'sm' | 'md' | 'lg';
		required: boolean;
	};

	const sharedContext$ = (getSharedContext('label') || writable({})) as Writable<
		Partial<ExternalContext>
	>;

	export let disabled: $$Props['disabled'] = false;
	export let required: $$Props['required'] = $sharedContext$.required ?? false;
	export let size: $$Props['size'] = $sharedContext$.size ?? 'md';

	let klass: $$Props['class'] = '';
	export { klass as class };

	$: _required = $sharedContext$.required ?? required;
	$: _size = $sharedContext$.size ?? size;
</script>

<label
	class={classnames(
		'fui-label font-base',
		{ disabled, required: _required },
		klass,
		_size === 'sm' && 'text-base-200 leading-base-200',
		_size === 'md' && 'text-base-300 leading-base-300',
		_size === 'lg' && 'text-base-400 leading-base-400 font-semibold'
	)}
	{...$$restProps}
>
	<slot />
	{#if required !== false}
		<span class='fui-required-label'>{required === true ? '*' : required}</span>
	{/if}
</label>

<style lang="postcss">
	.fui-label {
		@apply text-neutral-foreground-1;

		&.disabled {
			@apply text-neutral-foreground-disabled;

			& > .fui-required-label {
				@apply text-neutral-foreground-disabled;
			}
		}

		& > .fui-required-label {
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
