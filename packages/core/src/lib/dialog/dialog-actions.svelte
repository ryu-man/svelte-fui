<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogFooterProps } from './types';
	import { getDialogContext } from './context';

	const context_dropdown = getDialogContext();

	// export let position: 'start' | 'end' = 'end';
	// export let fluid = false;

	let { class: klass = '', children }: DialogFooterProps = $props();
</script>

<div
	bind:this={context_dropdown.state.elements.footer}
	class={classnames(
		'fui-dialog-actions max-xs:flex-col max-xs:self-stretch box-border flex h-fit gap-2 px-6 pb-6',
		klass
	)}
>
	{@render children?.({ context: context_dropdown })}
</div>
