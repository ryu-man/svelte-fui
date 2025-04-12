<script lang="ts">
	import { defineProperty, defineState } from '@svelte-fui/core/internal/context';
	import { getPopoverContext, setPopoverContext, type PopoverState } from './context';
	import type { PopoverRootProps } from './types';
	import { nanoid } from 'nanoid';

	let {
		id,
		context = $bindable(),
		open = $bindable(false),
		alignment = 'start',
		offset = 8,
		placements = ['bottom', 'top', 'bottom-end', 'bottom-start', 'top-end', 'top-start'],
		placement = 'bottom',
		extension = {},
		target = undefined,
		children,
		onmount = undefined,
		ondestroy = undefined
	}: PopoverRootProps = $props();

	const parentContext = getPopoverContext();

	const popoverContext = (() => {
		if (context) {
			return setPopoverContext(context);
		}

		let dom: PopoverState['dom'] = $state({});

		const state = defineState<PopoverState>([
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
			(o) => defineProperty(o, 'extension', () => extension),
			(o) => defineProperty(o, 'target', () => target)
		]);

		return (context = setPopoverContext({
			id: nanoid(),
			type: 'dropdown',
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
				onchange: (params) => {}
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
		}));
	})();

	onmount?.(new CustomEvent('create'), { context: popoverContext });

	$effect(() => {
		return () => {
			ondestroy?.(new CustomEvent('destroy'), { context: parentContext });
		};
	});
</script>

{@render children?.({ context: popoverContext })}
