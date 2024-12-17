<script lang="ts" generics="T">
	import type { ComboboxRootProps } from './types';
	import DropdownRoot from '../dropdown/dropdown-root.svelte';
	import {
		comboboxNamespace,
		getComboboxContext,
		setComboboxContext,
		type ComboboxContext
	} from './context';
	import { fid } from '../internal/utils';
	import type { ContextDropdownItem } from '../dropdown/context-root';
	import { SvelteMap } from 'svelte/reactivity';

	let {
		disabled = false,
		multiple = false,
		value = $bindable(undefined),
		values = $bindable([]),
		open = $bindable(false),
		data = $bindable([]),
		context,
		children
	}: ComboboxRootProps<T> = $props();

	let items: Map<string, ContextDropdownItem<T>> = new SvelteMap([]);

	const context_state: ComboboxContext<T>['state'] = $state({
		data: {
			input: {
				value: ''
			}
		},
		elements: {}
	});

	const context_derived: ComboboxContext<T>['derived'] = $derived({
		data: {
			value,
			values: values ?? [],
			open: open ?? false,
			multiple: multiple,
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

	const context_parent = getComboboxContext();

	const context_combobox = setComboboxContext<T>({
		id: fid(comboboxNamespace),
		type: 'combobox',

		parent: <R,>() => context_parent as ComboboxContext<R>,
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
					.map((d) => context_combobox.derived.data.items.all.get(d)?.data)
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
					.map((d) => context_combobox.derived.data.items.all.get(d)?.data)
					.filter(Boolean) as T[];

				return values;
			},
			selected(value) {
				return values.includes(value);
			}
		}
	});
</script>

<DropdownRoot
	bind:open
	bind:value
	bind:values
	bind:data
	context={context_combobox}
	{multiple}
	{disabled}
>
	{#snippet children({ context })}
		{@render children?.({ context })}
	{/snippet}
</DropdownRoot>
