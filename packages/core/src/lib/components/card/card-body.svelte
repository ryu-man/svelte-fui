<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';
	import type { CardBodyProps } from './types';

	let {
		class: klass = '',
		as = 'div',
		element = $bindable(undefined),
		children = undefined,
		ref = undefined
	}: CardBodyProps = $props();
</script>

<svelte:element
	this={as}
	bind:this={element}
	use:reference={ref}
	class={classnames('fui-card-body flex gap-m', klass)}
>
	{@render children?.()}
</svelte:element>
