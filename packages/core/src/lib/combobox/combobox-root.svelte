<script lang="ts" generics="T">
	import type { ComboboxRootProps } from './types';
	import MenuRoot from '../menu/menu-root.svelte';
	import {
		comboboxNamespace,
		getComboboxContext,
		setComboboxContext,
		type ComboboxContext,
		type ComboboxState
	} from './context';
	import { fid } from '../internal/utils';
	import type { DropdownItem } from '../dropdown/context-root';
	import { SvelteMap } from 'svelte/reactivity';
	import { defineProperty, defineState } from '../internal/context';

	let {
		open = $bindable(false),
		value = $bindable(),
		values = $bindable([]),
		data = $bindable<T[]>([]),
		disabled = false,
		placements = ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
		placement = 'bottom-start',
		offset = 4,
		alignment = undefined,
		extension = {},
		children = undefined
	}: ComboboxRootProps<T> = $props();

	const contextParent = getComboboxContext();

	const contextBuilder = () => {
		let items: Map<string, DropdownItem<T>> = new SvelteMap([]);

		const dom: ComboboxState<T>['dom'] = $state({});
		const stateItems = $derived({
			all: items,
			active: values.map((d) => items.get(d)).filter(Boolean) as DropdownItem<T>[]
		});

		const contextState = defineState<ComboboxState<T>>([
			(o) => defineProperty(o, 'dom', () => dom),
			(o) => defineProperty(o, 'alignment', () => alignment),
			(o) => defineProperty(o, 'offset', () => offset),
			(o) => defineProperty(o, 'open', () => open),
			(o) => defineProperty(o, 'placements', () => placements),
			(o) => defineProperty(o, 'placement', () => placement),
			(o) => defineProperty(o, 'data', () => data),
			(o) => defineProperty(o, 'items', () => stateItems),
			(o) => defineProperty(o, 'values', () => [value]),
			(o) =>
				defineProperty(
					o,
					'extension',
					() => extension,
					(v) => (extension = v)
				)
		]);

		return setComboboxContext<T>({
			id: fid(comboboxNamespace),
			type: 'combobox',
			parent: <R,>() => contextParent as ComboboxContext<R>,
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
				},
				setQuery(query) {
					extension.query = query;
				},
			}
		});
	};

	const context = contextBuilder();
</script>

<MenuRoot {disabled} {extension} {context} onmount={(ev) => {}}>
	<!-- {#snippet children({ context })} -->
	{@render children?.({ context })}
	<!-- {/snippet} -->
</MenuRoot>
