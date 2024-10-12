<script lang="ts">
	import { onDestroy } from 'svelte';
	import { type Writable, writable } from 'svelte/store';
	import { classnames } from '@svelte-fui/core/internal';
	import { getSharedContext, setSharedContext } from '@svelte-fui/core/internal/context';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { Popover } from '@svelte-fui/core/popover';
	import { getMenuContext, setMenuContext } from './context-root';
	import type { MenuRootProps } from './types';
	import { animate } from '../actions/animation';

	type $$Props = MenuRootProps;

	export let open: $$Props['open'] = false;
	export let id: $$Props['id'] = '';

	const menu_context_parent = getMenuContext();
	let is_submenu = !!menu_context_parent;

	const menu_context = Object.assign(
		setMenuContext({
			close,
			open: writable(open),
			itemsActive: writable(new Set()),
			triggerElement: writable(undefined),
			elements: {
				anchor: writable(undefined),
				menu: writable(undefined),
				trigger: writable(undefined)
			}
		}),
		getSharedContext('menu-sub'),
		getSharedContext('menu', id ?? '')
	);

	const anchor_element = menu_context.elements.anchor;
	const menu_element = menu_context.elements.menu;

	const menu_context_open_store = menu_context.open;

	$: open = $menu_context_open_store;
	$: menu_context_open_store.set(open ?? false);

	const menu_context_trigger_element_store = menu_context.triggerElement;

	const menu_trigger_element_parent =
		getSharedContext<Writable<HTMLElement>>('menu', 'trigger') ??
		setSharedContext(menu_context_trigger_element_store, 'menu', 'trigger');

	export let discover: $$Props['discover'] = true;
	export let offset: $$Props['offset'] = is_submenu ? 4 : 8;
	export let placements: $$Props['placements'] = is_submenu
		? ['right-end', 'right-start', 'left-end', 'left-start']
		: ['bottom-start', 'bottom-end', 'top-start', 'top-end'];

	let klass: $$Props['class'] = '';
	export { klass as class };

	onDestroy(() => {
		menu_context.itemsActive.set(new Set());
	});

	function close() {
		open = false;
	}

	function onintrostart(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLDivElement;
		currentTarget.style.pointerEvents = 'none';
	}

	function onintroend(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLDivElement;
		currentTarget.style.pointerEvents = 'auto';
	}

	function onclick_outside(ev: CustomEvent) {
		ev.preventDefault();

		const inner_event = ev.detail as Event;
		const target = inner_event.target as HTMLElement;

		if ($menu_context_trigger_element_store.contains(target)) {
			return;
		}

		if ($menu_trigger_element_parent.contains(target)) {
			return;
		}

		close();
	}

	function discover_trigger_element(node: HTMLElement) {
		if (!discover) {
			return;
		}
		const onclick_trigger = () => {
			console.log($menu_context_open_store);
			menu_context_open_store.update((v) => !v);
		};

		const parent = node.parentElement;

		if (!parent) {
			return;
		}

		menu_context.triggerElement.set(parent);

		parent.dataset['menuId'] = id;

		parent.addEventListener('click', onclick_trigger);

		return {
			destroy: () => {
				parent.removeEventListener('click', onclick_trigger);
			}
		};
	}
</script>

<div
	class="fui-menu-anchor"
	hidden
	data-id={id}
	use:discover_trigger_element
	bind:this={$anchor_element}
/>

<Popover
	class="fui-menu-popover"
	bind:open={$menu_context_open_store}
	bind:referenceElement={$menu_context_trigger_element_store}
	{placements}
	{offset}
	on:click-outside={onclick_outside}
	let:dx
	let:dy
>
	<div
		class={classnames('fui-menu shadow-16 bg-neutral-background-1 w-fit rounded-lg', klass)}
		bind:this={$menu_element}
		use:animate={{
			opacity: +($menu_context_open_store ?? false),
			x: dx * (offset ?? 0),
			y: dy * (offset ?? 0),
			duration: DURATION.FAST / 1000
		}}
	>
		<slot />
	</div>
</Popover>

<style lang="postcss">
</style>
