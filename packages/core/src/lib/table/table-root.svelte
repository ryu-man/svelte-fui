<script lang="ts">
	import type { orderBy as _orderBy } from 'lodash-es';
	import { setTableContext } from './context';
	import type { TableSize } from './type';

	export let size: TableSize = 'md';
	export let sortable = false;
	export let data: any[] = [];
	export let selectedItems: any[] = [];

	let sorted: any[] = [];
	let order_By: typeof _orderBy | undefined = undefined;

	if (sortable) {
		import('lodash-es/orderBy').then((module) => {
			order_By = module.default;
		});
	}

	const { sortable$, sorting$, size$, allRows$, selectedKeys$ } = setTableContext();
	sortable$.set(sortable);
	size$.set(size);

	$: sortable$.set(sortable);

	$: [key, direction] = $sorting$ || [];

	$: sorted = order_By && key ? order_By(data, key, direction === 'ascending' ? 'asc' : 'desc') : data;

	$: if ($selectedKeys$) {
		selectedItems = $allRows$.filter((d) => d.selected$.value).map((d) => d.data);
	}
</script>

<table class="fui-table">
	<slot data={sorted} />
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
