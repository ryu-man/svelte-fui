<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogFooterProps } from './types';
	import { getDialogContext } from './context';
	import { mount } from '../actions/dom';
	import { reference } from '../internal/dom.svelte';

	const contextDropdown = getDialogContext();

	// export let position: 'start' | 'end' = 'end';
	// export let fluid = false;

	let { class: klass = '', element = $bindable(undefined), children=undefined, ref=undefined }: DialogFooterProps = $props();
</script>

<div
	use:mount={(node) => {
		contextDropdown.state.elements.footer = node;
		element = node;
	}}
	use:reference={ref}
	class={classnames(
		'fui-dialog-actions max-xs:flex-col max-xs:self-stretch box-border flex h-fit gap-2 px-6 pb-6',
		klass
	)}
>
	{@render children?.({ context: contextDropdown })}
</div>
