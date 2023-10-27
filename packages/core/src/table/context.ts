import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';
import type { TableSize } from './type';

// import type { State } from './types,';

export const SVELTE_FUI_TABLE_CONTEXT_KEY = 'svelte-fui-table-context-key';

export type TableContext = {
	sortable$: Writable<boolean>;
	size$: Writable<TableSize>;
};

export function getTableContext(): TableContext {
	return getContext(SVELTE_FUI_TABLE_CONTEXT_KEY);
}

export function setTableContext(values: { sortable: boolean; size: TableSize }) {
	const context: TableContext = {
		sortable$: writable(values.sortable),
		size$: writable(values.size)
	};

	return setContext(SVELTE_FUI_TABLE_CONTEXT_KEY, context);
}
