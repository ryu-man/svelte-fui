<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { LabelProps } from './types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		element = $bindable(),
		class: klass = '',
		disabled = false,
		required = false,
		size,
		children = undefined,
		ref = undefined,
		...restProps
	}: LabelProps = $props();
</script>

<label
	use:reference={ref}
	bind:this={element}
	class={classnames(
		'fui-label font-base text-neutral-foreground-1',
		klass,
		size === 'sm' && 'text-base-200 leading-base-200',
		size === 'md' && 'text-base-300 leading-base-300',
		size === 'lg' && 'text-base-400 leading-base-400 font-semibold',
		required && 'pl-xs text-palette-red-foreground-3',
		disabled && 'text-neutral-foreground-disabled',
		disabled && required && 'text-neutral-foreground-disabled'
	)}
	{...restProps}
	data-disabled={disabled}
	data-required={required}
>
	{@render children?.()}
</label>
