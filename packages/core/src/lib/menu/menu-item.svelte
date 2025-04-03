<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { nanoid } from 'nanoid';
	import { debounce } from 'es-toolkit';
	import { type MenuState, getMenuContext, setMenuContext } from './context';
	import type { MenuItemProps } from './types';

	import { setPopoverContext } from '../popover';

	import { defineProperty, defineState } from '../internal/context';

	const menuContext = getMenuContext();

	if (!menuContext) {
		throw new Error('');
	}
	
	const isMenuOpen = $derived(menuContext?.state.open ?? false);

	let {
		element = $bindable(),
		open = $bindable(false),
		class: klass = '',
		id = nanoid(),
		as = 'button',
		href,
		alignment,
		offset = 2,
		placements = ['left-end', 'left-start', 'right-end', 'right-start'],
		placement = 'right-start',
		children = undefined,
		onclick = undefined,
		onpointerenter = undefined,
		onpointerleave = undefined,
		...restProps
	}: MenuItemProps = $props();

	let dom: MenuState['dom'] = $state({});

	const getElement = () => element;
	const setElement = (el) => (dom.trigger = element = el);

	const subMenuState = defineState<MenuState>([
		(o) =>
			defineProperty(
				o,
				'dom',
				() => dom,
				(v) => (dom = { ...v })
			),
		(o) => defineProperty(o, 'alignment', () => alignment),
		(o) => defineProperty(o, 'offset', () => offset),
		(o) => defineProperty(o, 'open', () => open && (menuContext?.state?.open ?? false)),
		(o) => defineProperty(o, 'placements', () => placements),
		(o) => defineProperty(o, 'placement', () => placement)
	]);

	const contextSubMenu = setMenuContext({
		id: nanoid(),
		type: 'menu',
		parent: () => menuContext,
		update(fn) {
			fn(subMenuState);
		},
		get state() {
			return subMenuState;
		},
		events: {
			onchange: (params) => {},
			onclickitem: (params) => {}
		},
		methods: {
			open() {
				open = true;
			},
			close() {
				open = false;
			},
			toggle() {
				open = !open;
			}
		}
	});

	setPopoverContext(contextSubMenu);

	const closeonpointerleave = debounce(() => {
		open = false;
	}, 300);

	function onclick_(ev: Event) {
		onclick?.(ev, { context: menuContext });

		if (ev.defaultPrevented) {
			return;
		}

		if (!menuContext) {
			return;
		}

		menuContext.methods.close();
	}

	function onpointerenter_(ev: PointerEvent) {
		// closeonpointerleave.cancel();

		onpointerenter?.(ev, { context: menuContext });

		if (ev.defaultPrevented) {
			return;
		}

		open = true;
	}

	function onpointerleave_(ev: PointerEvent) {
		onpointerleave?.(ev, { context: menuContext });

		if (ev.defaultPrevented) {
			return;
		}

		// closeonpointerleave();
	}
</script>

<svelte:element
	this={as}
	bind:this={getElement, setElement}
	class={classnames(
		'fui-menu-item first:rounded-t-inherit last:rounded-b-inherit relative before:bg-neutral-foreground-1 duration-fast before:ease-easy-ease-max flex w-full cursor-pointer flex-nowrap items-center gap-1 whitespace-nowrap px-4 py-1 text-left before:opacity-0 before:transition-opacity hover:before:opacity-5 active:before:opacity-10',
		klass
	)}
	role={as === 'a' ? 'link' : 'button'}
	onclick={onclick_}
	onpointerenter={onpointerenter_}
	onpointerleave={onpointerleave_}
	{...restProps}
>
	{#if isMenuOpen}
		{@render children?.({ context: menuContext })}
	{/if}
</svelte:element>

<style lang="postcss">
	.fui-menu-item {
		&:before {
			@apply rounded-inherit absolute inset-0;

			content: '';
		}
	}
</style>
