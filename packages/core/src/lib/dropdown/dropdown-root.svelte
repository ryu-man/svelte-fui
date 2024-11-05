<script lang="ts" generics="T">
	import { SvelteMap } from 'svelte/reactivity';
	import { fid } from '@svelte-fui/core/internal/utils';

	import {
		dropdownNamespace,
		getDropdownContext,
		setDropdownContext,
		type DropdownContext,
		type ContextDropdownItem
	} from './context-root';
	import type { DropdownRootProps } from './types';

	import { Popover } from '../popover';

	let {
		open = $bindable(false),
		value = $bindable(undefined),
		values = $bindable([]),
		data = $bindable<T[]>([]),
		context = $bindable(undefined),
		multiple = false,
		disabled = false,
		id = undefined,
		children
	}: DropdownRootProps<T> = $props();
	const context_parent = getDropdownContext();

	const context_builder = () => {
		if (context) {
			return setDropdownContext(context);
		}

		let items: Map<string, ContextDropdownItem<T>> = new SvelteMap([]);

		const context_state: DropdownContext<T>['state'] = $state({
			data: {},
			elements: {}
		});

		const context_derived: DropdownContext<T>['derived'] = $derived({
			data: {
				value,
				values: values ?? [],
				open: open ?? false,
				multiple: multiple ?? false,
				disabled: disabled ?? false,
				data,
				items: {
					all: items,
					active: values.map((d) => items.get(d)).filter(Boolean) as ContextDropdownItem<T>[]
				}
			},
			elements: {
				root: context_state.elements.root,
				overlay: context_state.elements.overlay,
				indicator: context_state.elements.indicator,
				trigger: context_state.elements.trigger
			}
		});

		return setDropdownContext<T>({
			id: fid(dropdownNamespace),
			type: 'dropdown',

			parent: <R,>() => context_parent as DropdownContext<R>,
			get derived() {
				return context_derived;
			},
			get state() {
				return context_state;
			},
			events: {
				onchange: () => {}
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

					data = values
						.map((d) => context_dropdown.derived.data.items.all.get(d)?.data)
						.filter(Boolean) as T[];

					return values;
				},
				unselect(vals) {
					const sequence = new Set(values);

					for (const value of vals) {
						sequence.delete(value);
					}

					values = [...sequence];
					value = values[0];

					data = values
						.map((d) => context_dropdown.derived.data.items.all.get(d)?.data)
						.filter(Boolean) as T[];

					return values;
				},
				selected(value) {
					return values.includes(value);
				}
			}
		});
	};

	const context_dropdown = context_builder();

	$effect(() => {
		if (!context) {
			context = context_dropdown;
		}
	});
</script>

<Popover.Root bind:open context={context_dropdown}>
	{@render children?.({ context: context_dropdown })}
</Popover.Root>
