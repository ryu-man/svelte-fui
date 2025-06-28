<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';
	import type { CardFooterProps } from './types';

	let {
		class: klass = '',
		element = $bindable(undefined),
		children = undefined,
		ref = undefined
	}: CardFooterProps = $props();
</script>

<div
	bind:this={element}
	use:reference={ref}
	class={classnames('fui-card-footer flex gap-m shrink-0', klass)}
>
	{@render children?.()}
</div>
