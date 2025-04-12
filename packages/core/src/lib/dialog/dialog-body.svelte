<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogBodyProps } from './types';
	import { getDialogContext } from './context';
	import { mount } from '../actions/dom';
	import { reference } from '../internal/dom.svelte';

	const contextDropdown = getDialogContext();

	let {
		class: klass = '',
		element = $bindable(undefined),
		children = undefined,
		ref = undefined
	}: DialogBodyProps = $props();
</script>

<div
	use:mount={(node) => {
		contextDropdown.state.elements.body = node;
		element = node;
	}}
	use:reference={ref}
	class={classnames('fui-dialog-body body-1 box-border min-h-[32px] overflow-y-auto px-6', klass)}
>
	{@render children?.({ context: contextDropdown })}
</div>
