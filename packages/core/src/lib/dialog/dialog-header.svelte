<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogHeaderProps } from './types';
	import { getDialogContext } from './context';
	import { mount } from '../actions/dom';
	import { reference } from '../internal/dom.svelte';

	const contextDialog = getDialogContext();

	let {
		class: klass = '',
		as = 'div',
		element = $bindable(undefined),
		children = undefined,
		ref = undefined
	}: DialogHeaderProps = $props();
</script>

<svelte:element
	this={as}
	use:mount={(node) => {
		contextDialog.state.elements.header = node;
		element = node;
	}}
	use:reference={ref}
	class={classnames('fui-dialog-title subtitle-1 m-0 px-6 pt-6', klass)}
>
	{@render children?.({ context: contextDialog })}
</svelte:element>
