<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { getLayerContext } from './context';
	import type { LayoutInnerProps } from './types';
	let {
		class: klass = '',
		element = $bindable(undefined),
		children = undefined
	}: LayoutInnerProps = $props();

	const layerContext = getLayerContext();

	const getElement = () => element;
	const setElement = (el: HTMLElement) =>
		layerContext.update((state) => {
			state.dom.inner = element = el;
		});
</script>

<div
	bind:this={getElement, setElement}
	class={classnames('fui-layer-inner w-full min-h-full relative', klass)}
>
	{@render children?.()}
</div>
