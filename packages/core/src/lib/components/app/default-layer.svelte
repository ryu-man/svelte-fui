<script lang="ts">
	import { getFluentRootContext } from './context';
	import { setLayerContext } from './layer/context';

	const rootContext = getFluentRootContext();
	const layers = $derived(rootContext.state.layers);

	let { children = undefined } = $props();

	const defaultLayerContext = $derived(layers.get('overlay'));

	if (!defaultLayerContext?.context) {
		throw new Error('default layer context was not found');
	}

	setLayerContext(defaultLayerContext.context);
</script>

{@render children?.()}
