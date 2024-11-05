<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { nanoid } from 'nanoid';
	import { type MenuContext, getMenuContext, setMenuContext } from './context-root';
	import type { MenuItemProps } from './types';
	import { setPopoverContext } from '../popover';

	const context_menu = getMenuContext();

	let {
		class: klass = '',
		id = nanoid(),
		as = 'button',
		open = false,
		href,
		children,
		onclick,
		onpointerenter,
		onpointerleave
	}: MenuItemProps = $props();

	const context_state: MenuContext['state'] = $state({
		data: {},
		elements: {}
	});

	const context_derived: MenuContext['derived'] = $derived({
		data: {
			open: (open && context_menu.derived.data.open) ?? false
		},
		elements: {
			trigger: context_state.elements.trigger
		}
	});

	const context_sub_menu = setMenuContext({
		id: nanoid(),
		type: 'sub-menu',
		parent: () => context_menu,
		get state() {
			return context_state;
		},
		get derived() {
			return context_derived;
		},
		events: {
			onchange: (params) => {}
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

	setPopoverContext(context_sub_menu);

	function onclick_(ev: Event) {
		onclick?.(ev, { context: context_menu });

		if (ev.defaultPrevented) {
			return;
		}

		if (!context_menu) {
			return;
		}

		context_menu.methods.close();
	}

	function onpointerenter_(ev: PointerEvent) {
		onpointerenter?.(ev, { context: context_menu });

		if (ev.defaultPrevented) {
			return;
		}

		open = true;
	}

	function onpointerleave_(ev: PointerEvent) {
		onpointerleave?.(ev, { context: context_menu });

		if (ev.defaultPrevented) {
			return;
		}
	}
</script>

<svelte:element
	this={as}
	bind:this={context_state.elements.trigger}
	class={classnames(
		'fui-menu-item before:bg-neutral-foreground-1 duration-fast before:ease-easy-ease-max flex w-full cursor-pointer flex-nowrap items-center gap-1 whitespace-nowrap px-4 py-1 text-left before:opacity-0 before:transition-opacity hover:before:opacity-5 active:before:opacity-10',
		klass
	)}
	role={as === 'a' ? 'link' : 'button'}
	onclick={onclick_}
	onpointerenter={onpointerenter_}
	onpointerleave={onpointerleave_}
>
	{@render children?.({ context: context_menu })}
</svelte:element>

<style lang="postcss">
	.fui-menu-item {
		@apply first:rounded-t-inherit last:rounded-b-inherit relative;

		&:before {
			@apply rounded-inherit absolute inset-0;

			content: '';
		}
	}
</style>
