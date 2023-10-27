<script lang="ts">
	import { setTableContext } from './context';
	import type { TableSize } from './type';

	export let size: TableSize = 'md';
	export let sortable = false;
	export let data: any[] = [];

	const { sortable$ } = setTableContext({ sortable, size });
	
	$: sortable$.set(sortable);
</script>

<table class="fui-table">
	<slot {data} />
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
