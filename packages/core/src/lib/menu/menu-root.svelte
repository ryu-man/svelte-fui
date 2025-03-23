<script lang="ts" generics="T">
	import { Popover } from '@svelte-fui/core/popover';
	import { getMenuContext, type MenuContext, type MenuState } from './context';
	import type { MenuRootProps } from './types';
	import { nanoid } from 'nanoid';
	import { defineProperty, defineState } from '../internal/context';

	let {
		children,
		id,
		open = $bindable(false),
		alignment,
		offset = 4,
		placements = ['bottom-end', 'bottom-start', 'top-end', 'top-start'],
		...restProps
	}: MenuRootProps = $props();

	const parentContext = getMenuContext();

	const context: MenuContext = (() => {
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
			(o) => defineProperty(o, 'placements', () => placements)
		]);

		return {
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
					restProps?.onchange?.(params);
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
		};
	})();
</script>

<Popover.Root {context} {...restProps}>
	{@render children?.({ context: context })}
</Popover.Root>

<style lang="postcss">
</style>
