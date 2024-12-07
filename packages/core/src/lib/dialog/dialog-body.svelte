<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogBodyProps } from './types';
	import { getDialogContext } from './context';
	import { mount } from '../actions/dom';

	const context_dropdown = getDialogContext();

	let { class: klass = '', element = $bindable(undefined), children }: DialogBodyProps = $props();
</script>

<div
	class={classnames('fui-dialog-body body-1 box-border min-h-[32px] overflow-y-auto px-6', klass)}
	use:mount={(node)=>{
		context_dropdown.state.elements.body = node;
		element = node;
	}}
>
	{@render children?.({ context: context_dropdown })}
</div>
