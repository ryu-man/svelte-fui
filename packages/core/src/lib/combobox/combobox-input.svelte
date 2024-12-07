<script lang="ts" generics="T">
	import { Input } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';

	import type { ComboboxInputProps } from './types';

	import DropdownTrigger from '../dropdown/dropdown-trigger.svelte';
	import DropdownIndicator from '../dropdown/dropdown-indicator.svelte';
	import { getComboboxContext } from './context';
	import { nanoid } from 'nanoid';

	const context_dropdown = getComboboxContext();

	let {
		class: klass = '',
		placeholder = '',
		appearance = 'outline',
		size = 'md',
		name,
		value = $bindable(''),
		children,
		...restProps
	}: ComboboxInputProps<T> = $props();

	const values = $derived(context_dropdown.derived.data.values);
	const items = $derived(context_dropdown.derived.data.items.all);

	const input_value = $derived(context_dropdown.state.data.input.value);

	context_dropdown.state.data.input.value = value;

	const input_id = nanoid();

	$effect(() => {
		// Sync value with state value
		value = input_value;
	});

	function onclick(ev: Event) {
		ev.preventDefault();

		restProps?.onclick?.(ev);

		context_dropdown.methods.open();
	}
</script>

<DropdownTrigger class={classnames('relative min-w-[192px]', klass)} {onclick} {...restProps}>
	<Input.Root class="w-full flex gap-1 items-center" {appearance} {size} as="label" for={input_id}>
		<Input.Element
			bind:value={context_dropdown.state.data.input.value}
			{placeholder}
			{name}
			id={input_id}
		/>
		<DropdownIndicator class="h-full pointer-events-none" />
	</Input.Root>
</DropdownTrigger>
