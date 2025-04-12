<script lang="ts">
	import { classnames } from '../internal';
	import { reference } from '../internal/dom.svelte';
	import type { CardPreviewProps } from './types';

	let {
		class: klass = '',
		src = undefined,
		alt = undefined,
		element = $bindable(undefined),
		children = undefined, 
		ref = undefined
	}: CardPreviewProps = $props();
</script>

<div bind:this={element} use:reference={ref} class={classnames('fui-card-preview', klass)}>
	<img {src} {alt} />
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-card-preview {
		position: relative;

		:global(> :not(.logo)) {
			display: block;
			height: 100%;
			width: 100%;
		}

		:global(.logo) {
			@apply absolute;
			bottom: 12px;
			left: 12px;
			width: 32px;
			height: 32px;
		}
	}
</style>
