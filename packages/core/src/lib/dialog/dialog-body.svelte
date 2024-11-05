<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogBodyProps } from './types';
	import { getDialogContext } from './context';

	const context_dropdown = getDialogContext();

	let { class: klass = '', children }: DialogBodyProps = $props();
</script>

<div
	bind:this={context_dropdown.state.elements.body}
	class={classnames('fui-dialog-body body-1 box-border min-h-[32px] overflow-y-auto px-6', klass)}
>
	{@render children?.({ context: context_dropdown })}
</div>
