<script lang="ts" generics="T">
	import { Popover } from '@svelte-fui/core/popover';
	import { getMenuContext, setMenuContext, type MenuContext } from './context-root';
	import type { MenuRootProps } from './types';
	import { nanoid } from 'nanoid';

	let { children, id, open = $bindable(false) }: MenuRootProps = $props();

	const context_parent = getMenuContext();

	const context_state: MenuContext['state'] = $state({
		data: {},
		elements: {}
	});

	const context_derived: MenuContext['derived'] = $derived({
		data: {
			open: open ?? false
		},
		elements: {
			overlay: context_state.elements.overlay,
			indicator: context_state.elements.indicator,
			trigger: context_state.elements.trigger
		}
	});

	const context_menu = setMenuContext({
		id: nanoid(),
		type: 'menu',
		parent: () => context_parent,
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
</script>

<Popover.Root bind:open context={context_menu}>
	{@render children?.({ context: context_menu })}
</Popover.Root>

<style lang="postcss">
</style>
