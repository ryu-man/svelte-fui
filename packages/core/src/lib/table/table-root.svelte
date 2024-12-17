<script lang="ts" generics="T">
	import { nanoid } from 'nanoid';
	// import type { orderBy as _orderBy } from 'lodash-es';
	import { setTableContext, type TableContext, type TableRow } from './context';
	import type { TableRoot, TableSize } from './types';
	import { SvelteMap } from 'svelte/reactivity';
	import { classnames } from '../internal';

	// export let selectedItems: any[] = [];

	let {
		class: klass = '',
		selections = $bindable([]),
		size = 'md',
		values = $bindable([]),
		element = $bindable(undefined),
		children
	}: TableRoot<T> = $props();

	// let sorted: any[] = [];
	// let order_By: typeof _orderBy | undefined = undefined;

	const rows = new SvelteMap<string, TableRow<T>>([]);

	const context_state: TableContext<T>['state'] = $state({
		data: {},
		elements: {}
	});

	const context_derived: TableContext<T>['derived'] = $derived({
		data: {
			rows: {
				all: rows,
				selections: values.map((value) => rows.get(value)).filter(Boolean) as TableRow<T>[]
			},
			size,
			values
		},
		elements: {}
	});

	const context_table = setTableContext<T>({
		id: nanoid(),
		type: 'table',
		get state() {
			return context_state;
		},
		get derived() {
			return context_derived;
		},
		events: {
			onchange: (ev, params) => {}
		},
		methods: {
			mount(id, data) {
				rows.set(id, {
					id,
					data
				});

				return () => this.unmount(id);
			},
			unmount(id) {
				rows.delete(id);
			},
			select(vals) {
				const selections = new Set(values);

				for (const value of values) {
					selections.add(value);
				}

				values = [...selections];
			},
			unselect(values) {
				const selections = new Set(values);

				for (const value of values) {
					selections.delete(value);
				}

				values = [...selections];
			}
		}
	});

	// $: sortable$.set(sortable);

	// $: [key, direction] = $sorting$ || [];

	// $: sorted =
	// order_By && key ? order_By(data, key, direction === 'ascending' ? 'asc' : 'desc') : data;

	// $: if ($selectedKeys$) {
	// selectedItems = $allRows$.filter((d) => d.selected$.value).map((d) => d.data);
	// }
</script>

<table bind:this={element} class={classnames('fui-table', klass)}>
	{@render children?.({ context: context_table })}
</table>

<style lang="postcss">
	.fui-table {
		@apply bg-subtle-background w-full table-fixed border-collapse align-middle;
	}

	.fui-table :global(thead) {
		@apply table-row-group;
	}

	.fui-table :global(tbody) {
		@apply table-row-group;
	}
</style>
