<script lang="ts" generics="T">
	import { SvelteMap } from 'svelte/reactivity';
	import { fid } from '@svelte-fui/core/internal/utils';

	import {
		dropdownNamespace,
		getDropdownContext,
		setDropdownContext,
		type DropdownContext,
		type DropdownItem,
		type DropdownState
	} from './context-root';
	import type { DropdownRootProps } from './types';

	import { Popover } from '../popover';
	import { defineProperty, defineState } from '../internal/context';
	import { untrack } from 'svelte';

	let {
		open = $bindable(false),
		value = $bindable(),
		values = $bindable([]),
		data = $bindable<T[]>([]),
		context = $bindable(),
		multiple = false,
		placements = ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
		placement = 'bottom-start',
		offset = 4,
		alignment = undefined,
		extension = {},
		children = undefined
	}: DropdownRootProps<T> = $props();

	const context_parent = getDropdownContext();

	const contextBuilder = () => {
		if (context) {
			return setDropdownContext(context);
		}

		let items: Map<string, DropdownItem<T>> = new SvelteMap([]);

		const dom: DropdownState<T>['dom'] = $state({});
		const stateItems = $derived({
			all: items,
			active: values.map((d) => items.get(d)).filter(Boolean) as DropdownItem<T>[]
		});

		const contextState = defineState<DropdownState<T>>([
			(o) => defineProperty(o, 'dom', () => dom),
			(o) => defineProperty(o, 'alignment', () => alignment),
			(o) => defineProperty(o, 'offset', () => offset),
			(o) => defineProperty(o, 'open', () => open),
			(o) => defineProperty(o, 'placements', () => placements),
			(o) => defineProperty(o, 'placement', () => placement),
			(o) => defineProperty(o, 'data', () => data),
			(o) => defineProperty(o, 'items', () => stateItems),
			(o) => defineProperty(o, 'multiple', () => multiple),
			(o) => defineProperty(o, 'values', () => (multiple ? values : [value])),
			(o) => defineProperty(o, 'extension', () => extension)
		]);

		return setDropdownContext<T>({
			id: fid(dropdownNamespace),
			type: 'dropdown',

			parent: <R,>() => context_parent as DropdownContext<R>,
			update(fn) {
				fn?.(contextState);
			},
			get state() {
				return contextState;
			},
			events: {
				onchange: (ev, params) => {}
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
				},
				mount(id, item) {
					items.set(id, item);

					return () => this.unmount(id);
				},
				unmount(id) {
					items.delete(id);
				},
				select(vals) {
					const sequence = new Set(values);

					for (const value of vals) {
						sequence.add(value);
					}

					values = [...sequence];
					value = values[0];

					data = values.map((d) => items.get(d)?.data).filter(Boolean) as T[];

					return values;
				},
				unselect(vals) {
					const sequence = new Set(values);

					for (const value of vals) {
						sequence.delete(value);
					}

					values = [...sequence];
					value = values[0];

					data = values.map((d) => items.get(d)?.data).filter(Boolean) as T[];

					return values;
				},
				selected(value) {
					return values.includes(value);
				}
			}
		});
	};

	if (!context) {
		untrack(() => {
			context = contextBuilder();
		});
	}
</script>

<Popover.Root bind:open {context}>
	{@render children?.({ context: context })}
</Popover.Root>
