<script lang="ts" generics="T">
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import { classnames } from '@svelte-fui/core/internal';
	import { mergeContext, setSharedContext } from '@svelte-fui/core/internal/context';
	import { fid } from '@svelte-fui/core/internal/utils';
	import type { MenuContext } from '@svelte-fui/core/menu';
	import { getDropdownContext, setDropdownContext } from './context';
	import type { DropdownProps } from './types';

	type $$Props = DropdownProps<T>;

	const dispatch = createEventDispatcher();

	export let open: $$Props['open'] = false;
	export let value: $$Props['value'] = undefined;
	export let name: $$Props['name'] = undefined;
	export let data: $$Props['data'] = undefined;
	export let id: string | undefined = undefined;
	let klass = '';
	export { klass as class };

	const context = setDropdownContext<T>(
		mergeContext(
			{
				id: writable(fid('dropdown')),
				open: writable(open),
				value: writable(value),
				data: writable<T>(data),
				text: writable(''),
				triggerElement: writable(),
				openMenu(timeout = 0) {
					setTimeout(() => open_store.set(true), timeout);
				},
				closeMenu(timeout = 0) {
					setTimeout(() => open_store.set(false), timeout);
				},
				onChange(props) {
					const should_continue = dispatch('change', props);

					if (should_continue) {
						context.closeMenu();
					}
				}
			},
			getDropdownContext<T>()
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
</script>

<div class={classnames('fui-dropdown', 'w-full', klass)} bind:clientWidth={client_width} data-id={$id_store}>
	<input type="text" hidden value={$value_store} {name} {...$$restProps} />

	<slot />
</div>
