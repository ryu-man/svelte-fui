import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';
import type { SortingDirection, TableSize } from './type';

export const SVELTE_FUI_TABLE_CONTEXT_KEY = 'svelte-fui-table-context-key';

export type TableContext = {
	sortable$: Writable<boolean>;
	size$: Writable<TableSize>;
	sorting$: Writable<[key: (d: any) => any, direction: SortingDirection] | undefined>;
	allRows$: Writable<Set<string>>;
	selectedRows$: Writable<Set<string>>;
};

export function getTableContext(): TableContext {
	return getContext(SVELTE_FUI_TABLE_CONTEXT_KEY);
}

export function setTableContext() {
	const context: TableContext = {
		sortable$: writable(false),
		size$: writable('md'),
		sorting$: writable(undefined),
		allRows$: writable(new Set()),
		selectedRows$: writable(new Set())
	};

	return setContext(SVELTE_FUI_TABLE_CONTEXT_KEY, context);
}
