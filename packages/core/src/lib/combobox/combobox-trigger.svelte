<script lang="ts" generics="T">
	import { Input } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import { nanoid } from 'nanoid';

	import { getComboboxContext } from './context';
	import type { ComboboxTriggerProps } from './types';

	import DropdownIndicator from '../dropdown/dropdown-indicator.svelte';
	import MenuTrigger from '../menu/menu-trigger.svelte';

	const comboboxContext = getComboboxContext();

	if (!comboboxContext) {
		throw new Error('<ComboboxTrigger /> Combobox context was not found!');
	}

	let {
		value = $bindable(),
		class: klass = '',
		placeholder = '',
		appearance = 'outline',
		size = 'md',
		name = undefined,
		children = undefined,
		onclick = undefined,
		...restProps
	}: ComboboxTriggerProps<T> = $props();

	let inputValue = $derived(comboboxContext.state.extension?.query ?? '');

	const componentId = nanoid();

	const getValue = () => inputValue;

	const setValue = (val) => {
		if (comboboxContext?.state.extension) {
			comboboxContext.update((state) => {
				state.extension = { query: val };
			});
		}

		comboboxContext.update((state) => {
			if (state.extension) {
				state.extension.query = val;
			}
		});
	};

	$effect(() => {
		// Sync value with state value
		value = inputValue;
	});

	function onclick_(ev: Event) {
		onclick?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		ev.preventDefault();

		comboboxContext?.methods.open();
	}
</script>

<MenuTrigger
	class={classnames('relative min-w-[192px] w-full flex gap-1 items-center', klass)}
	shell={Input.Root}
	{appearance}
	{size}
	as="label"
	for={componentId}
	onclick={onclick_}
	{...restProps}
>
	<Input.Element bind:value={getValue, setValue} {placeholder} {name} id={componentId} />
	<DropdownIndicator class="h-full pointer-events-none" />
</MenuTrigger>
