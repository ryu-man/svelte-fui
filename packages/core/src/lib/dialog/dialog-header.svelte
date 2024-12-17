<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogHeaderProps } from './types';
	import { getDialogContext } from './context';
	import { mount } from '../actions/dom';

	const context_dialog = getDialogContext();

	let {
		class: klass = '',
		as = 'div',
		element = $bindable(undefined),
		children
	}: DialogHeaderProps = $props();
</script>

<svelte:element
	this={as}
	class={classnames('fui-dialog-title subtitle-1 m-0 px-6 pt-6', klass)}
	use:mount={(node) => {
		context_dialog.state.elements.header = node;
		element = node;
	}}
>
	{@render children?.({ context: context_dialog })}
</svelte:element>
