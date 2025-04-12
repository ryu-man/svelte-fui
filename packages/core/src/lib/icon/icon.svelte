<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '../internal/dom.svelte';

	let {
		element = $bindable(),
		class: klass = '',
		children = undefined,
		ref = undefined,
		...restProps
	}: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-icon h-6 text-current inline-flex aspect-square items-center justify-center leading-none',
		klass
	)}
	{...restProps}
>
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-icon :global(svg) {
		@apply aspect-square h-full w-auto leading-none;
	}
</style>
