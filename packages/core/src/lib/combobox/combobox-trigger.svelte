<script lang="ts">
	import { Dropdown, InputSkin } from '@svelte-fui/core';
	import { frame } from '@svelte-fui/core/actions/dom';
	import { classnames } from '@svelte-fui/core/internal';
	import { getComboboxContext } from './context';
	import type { ComboboxTriggerProps } from './types';

	type $$Props = ComboboxTriggerProps;

	const dropdown_context = getComboboxContext();

	const open = dropdown_context.open;
	const value_store = dropdown_context.value;
	const data_store = dropdown_context.data;
	const text_store = dropdown_context.text;

	export let appearance: 'outline' | 'underline' | 'filled-darker' | 'filled-lighter' = 'outline';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let placeholder = '';

	let klass = '';
	export { klass as class };
</script>

<Dropdown.Trigger on:click>
	<InputSkin class={classnames('relative w-[250px]', klass)}>
		{#if !$value_store}
			<div class="absolute left-0 top-0 flex h-full items-center whitespace-nowrap pl-[inherit] pr-12" use:frame>
				<div>{placeholder}</div>
			</div>
		{:else}
			<slot params={{ open: $open, text: $text_store, value: $value_store, data: $data_store }}>
				{$text_store}
			</slot>
		{/if}

		<Dropdown.Arrow />
	</InputSkin>
</Dropdown.Trigger>
