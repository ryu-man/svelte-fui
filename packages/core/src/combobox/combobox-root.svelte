<script lang="ts" generics="T">
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import { classnames } from '@svelte-fui/core/internal';
	import { mergeContext, setSharedContext } from '@svelte-fui/core/internal/context';
	import { fid } from '@svelte-fui/core/internal/utils';
	import type { MenuContext } from '@svelte-fui/core/menu';
	import { type ComboboxContext, getComboboxContext, setComboboxContext } from './context';

	export let id: string | undefined = undefined;
	export let disabled = false;
	export let value: any = '';
	export let data: T | undefined = undefined;
	export let text = '';
	export let open = false;
	export let name: string | undefined = undefined;

	let klass = '';
	export { klass as class };

	const dispatch = createEventDispatcher();

	let element: HTMLDivElement;

	const context = setComboboxContext<T>(
		mergeContext<ComboboxContext<T>>(
			{
				id: writable(id ?? fid('combobox')),
				open: writable(open),
				value: writable(value),
				data: writable<T>(data),
				text: writable(''),
				triggerElement: writable(),
				openMenu() {
					open_store.set(true);
				},
				closeMenu() {
					open_store.set(false);
				},
				onChange(props) {
					const should_continue = dispatch('change', props);

					if (should_continue) {
						context.closeMenu();
					}
				}
			},
			getComboboxContext()
		)
	);

	setSharedContext<Partial<MenuContext>>({ triggerElement: context.triggerElement, open: context.open }, 'menu');

	const id_store = context.id;

	context.value.set(value);

	$: value = $value_store;

	const open_store = context.open;
	$: open_store.set(!!open);
	$: open = $open_store;

	const value_store = context.value;
	$: value_store.set(value);
	$: value = $value_store;

	const data_store = context.data;
	$: data_store.set(data);
	$: data = $data_store;

	function onclick(e: Event) {
		if (disabled) return;
	}
</script>

<div bind:this={element} class={classnames('fui-combobox min-w-[250px]', klass)} data-id={$id_store} on:click={onclick} on:keypress={() => {}}>
	<input
		role="combobox"
		aria-controls=""
		aria-expanded="false"
		type="text"
		aria-labelledby="combo-default28"
		value={$value_store}
		{name}
		hidden
	/>
	<slot />
</div>
