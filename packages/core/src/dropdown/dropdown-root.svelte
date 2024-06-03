<script lang="ts">
	import { createEventDispatcher, tick } from 'svelte';
	import { writable } from 'svelte/store';
	import { classnames } from '@svelte-fui/core/internal';
	import { setSharedContext } from '@svelte-fui/core/internal/context';
	import { fid } from '@svelte-fui/core/internal/utils';
	import type { MenuContext } from '@svelte-fui/core/menu';
	import { type DropdownContext, getDropdownContext, setDropdownContext } from './context';
	import type { DropdownProps } from './types';

	type $$Props = DropdownProps;

	const dispatch = createEventDispatcher();

	export let open: $$Props['open'] = false;
	export let value: $$Props['value'] = undefined;
	export let name: $$Props['name'] = undefined;
	export let data: $$Props['data'] = undefined;
	export let id: string | undefined = undefined;
	let klass = '';
	export { klass as class };

	const context = setDropdownContext(
		Object.assign<DropdownContext, DropdownContext>(
			{
				id: writable(fid('dropdown')),
				open: writable(open),
				value: writable(value),
				data: writable(data),
				text: writable(''),
				triggerElement: writable(),
				openDropdownMenu() {
					open_store.set(true);
				},
				closeDropdownMenu() {
					open_store.set(false);
				},
				onChange(props) {
					dispatch('change', props);
				}
			},
			getDropdownContext() ?? {}
		)
	);

	setSharedContext<Partial<MenuContext>>({ triggerElement: context.triggerElement, open: context.open }, 'menu');

	const id_store = context.id;

	const open_store = context.open;
	$: open_store.set(!!open);
	$: open = $open_store;

	const value_store = context.value;
	$: value_store.set(value);
	$: value = $value_store;

	const data_store = context.data;
	$: data_store.set(data);
	$: data = $data_store;

	let client_width = 0;

	function onClick() {
		open = !open;
	}
</script>

<div class={classnames('fui-dropdown', 'w-full', klass)} bind:clientWidth={client_width} data-id={$id_store}>
	<input type="text" hidden value={$value_store} {name} {...$$restProps} />

	<slot />
</div>
