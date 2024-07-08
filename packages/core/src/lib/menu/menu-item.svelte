<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { type Writable, writable } from 'svelte/store';
	import { classnames } from '@svelte-fui/core/internal';
	import { setSharedContext } from '@svelte-fui/core/internal/context';
	import { nanoid } from 'nanoid';
	import { setMenuItemContext } from './context-item';
	import { type MenuContext, getMenuContext } from './context-root';
	import type { MenuItemProps } from './types';

	type $$Props = MenuItemProps;

	const menu_context = getMenuContext();

	export let id: $$Props['id'] = nanoid(8);
	export let open: $$Props['open'] = false;

	setMenuItemContext({
		id: writable(id),
		open: writable(open),
		close
	});

	const open_sub_store = writable(open);
	$: open_sub_store.set(open);
	$: open = $open_sub_store;

	setSharedContext<Partial<MenuContext>>({ open: open_sub_store, close }, 'menu-sub');

	const menu_items_active = menu_context?.itemsActive as Writable<Set<string>>;

	let klass: $$Props['class'] = '';
	export { klass as class };

	if (open) {
		menu_items_active.update((coll) => {
			coll.clear();
			coll.add(id);
			return coll;
		});
	}

	onMount(() =>
		menu_items_active.subscribe((coll) => {
			if (coll.has(id)) {
				return;
			}

			close();
		})
	);

	onDestroy(() => {
		open = false;
	});

	function close() {
		open = false;
	}

	function onclick() {
		if (!menu_context) {
			return;
		}

		menu_context.close();
	}

	function onpointerenter() {
		menu_items_active.update((coll) => {
			coll.clear();
			coll.add(id);
			return coll;
		});
		open_sub_store.set(true);
	}

	function onpointerleave() {
		// open_sub_store.set(false);
	}
</script>

<button
	class={classnames(
		'fui-menu-item before:bg-neutral-foreground-1 duration-fast before:ease-easy-ease-max flex w-full cursor-pointer flex-nowrap items-center gap-1 whitespace-nowrap px-4 py-1 text-left before:opacity-0 before:transition-opacity hover:before:opacity-5 active:before:opacity-10',
		klass
	)}
	on:click={onclick}
	on:pointerenter={onpointerenter}
	on:pointerleave={onpointerleave}
	on:click
>
	<slot />
</button>

<style lang="postcss">
	.fui-menu-item {
		@apply first:rounded-t-inherit last:rounded-b-inherit relative;

		&:before {
			@apply rounded-inherit absolute inset-0;

			content: '';
		}
	}
</style>
