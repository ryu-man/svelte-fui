<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { DialogHeaderProps } from './types';
	import { getDialogContext } from './context';

	const context_dialog = getDialogContext();

	let { class: klass = '', as = 'div', children }: DialogHeaderProps = $props();
</script>

<svelte:element this={as} bind:this={context_dialog.state.elements.header} class={classnames('fui-dialog-title subtitle-1 m-0 px-6 pt-6', klass)}>
	{@render children?.({ context: context_dialog })}
</svelte:element>
