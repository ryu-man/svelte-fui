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
	// let orderBy: typeof _orderBy | undefined = undefined;

	const rows = new SvelteMap<string, TableRow<T>>([]);

	const contextState: TableContext<T>['state'] = $state({
		data: {},
		elements: {}
	});

	const contextDerived: TableContext<T>['derived'] = $derived({
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

	const contextTable = setTableContext<T>({
		id: nanoid(),
		type: 'table',
		get state() {
			return contextState;
		},
		get derived() {
			return contextDerived;
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
	// orderBy && key ? orderBy(data, key, direction === 'ascending' ? 'asc' : 'desc') : data;

	// $: if ($selectedKeys$) {
	// selectedItems = $allRows$.filter((d) => d.selected$.value).map((d) => d.data);
	// }
</script>

<table bind:this={element} class={classnames('fui-table', klass)}>
	{@render children?.({ context: contextTable })}
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
