<script lang="ts">
	import type { orderBy as _orderBy } from 'lodash-es';
	import { setTableContext } from './context';
	import type { TableSize } from './type';

	export let size: TableSize = 'md';
	export let sortable = false;
	export let data: any[] = [];

	let sorted: any[] = [];
	let orderBy: typeof _orderBy | undefined = undefined;

	if (sortable) {
		import('lodash-es/orderBy').then((module) => {
			orderBy = module.default;
		});
	}

	const { sortable$, sorting$, size$ } = setTableContext();
	sortable$.set(sortable);
	size$.set(size);

	$: sortable$.set(sortable);

	$: [key, direction] = $sorting$ || [];
	$: sorted = orderBy && key ? orderBy(data, key, direction === 'ascending' ? 'asc' : 'desc') : data;
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
