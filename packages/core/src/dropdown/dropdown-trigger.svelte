<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { getDropdownContext } from './context';
	import type { DropdownTriggerProps } from './types';

	type $$Props = DropdownTriggerProps;

	const dropdown_context = getDropdownContext();
	const id_store = dropdown_context.id;
	const open = dropdown_context.open;
	const value_store = dropdown_context.value;
	const data_store = dropdown_context.data;
	const text_store = dropdown_context.text;
	const trigger_element_store = dropdown_context.triggerElement;

	let klass = '';
	export { klass as class };

	function onclick() {
		open.update((v) => !v);
	}
</script>

<button
	class={classnames('fui-dropdown-trigger flex', klass)}
	type="button"
	data-owner-id={$id_store}
	bind:this={$trigger_element_store}
	on:click={onclick}
	on:click
>
	<slot text={$text_store} value={$value_store} data={$data_store} />
</button>

<style lang="postcss">
</style>
