<script lang="ts" generics="T">
	import { Popover } from '@svelte-fui/core/popover';
	import { getMenuContext, setMenuContext, type MenuContext, type MenuState } from './context';
	import type { MenuRootProps } from './types';
	import { nanoid } from 'nanoid';
	import { defineProperty, defineState } from '../internal/context';

	let {
		children,
		id,
		open = $bindable(false),
		alignment = undefined,
		offset = 2,
		placements = ['bottom-end', 'bottom-start', 'top-end', 'top-start'],
		placement = 'bottom-start',
		extension = {},
		context = undefined,
		...restProps
	}: MenuRootProps = $props();

	const parentContext = getMenuContext();

	const menuContext: MenuContext = (() => {
		if (context) {
			return setMenuContext(context);
		}

		let dom: MenuState['dom'] = $state({});

		const state = defineState<MenuState>([
			(o) =>
				defineProperty(
					o,
					'dom',
					() => dom,
					(v) => (dom = { ...v })
				),
			(o) => defineProperty(o, 'alignment', () => alignment),
			(o) => defineProperty(o, 'offset', () => offset),
			(o) => defineProperty(o, 'open', () => open),
			(o) => defineProperty(o, 'placements', () => placements),
			(o) => defineProperty(o, 'placement', () => placement),
			(o) => defineProperty(o, 'extension', () => extension)
		]);

		return setMenuContext({
			id: nanoid(),
			type: 'menu',
			parent() {
				return parentContext;
			},
			update(fn) {
				fn(state);
			},

			get state() {
				return state;
			},
			events: {
				onchange: (params) => {
					restProps?.onchange?.(new CustomEvent('change'), params);
				},
				onclickitem(params) {}
			},
			methods: {
				open: () => {
					open = true;
				},
				close: () => {
					open = false;
				},
				toggle: () => {
					open = !open;
				}
			}
		});
	})();
</script>

<Popover.Root context={menuContext} {...restProps}>
	{@render children?.({ context: menuContext })}
</Popover.Root>
