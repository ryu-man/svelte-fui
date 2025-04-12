<script lang="ts">
	import { classnames } from '../internal';
	import { reference } from '../internal/dom.svelte';
	import type { CardFooterProps } from './types';

	let {
		class: klass = '',
		element = $bindable(undefined),
		children = undefined,
		ref = undefined
	}: CardFooterProps = $props();
</script>

<div bind:this={element} use:reference={ref} class={classnames('fui-card-footer', klass)}>
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-card-footer {
		@apply flex gap-m;

		flex-shrink: 0;
	}
</style>
