import { getContext, setContext } from 'svelte';
import { type Readable, type Writable, readonly, writable } from 'svelte/store';
import { type RowStore } from './store';
import type { SortingDirection, TableSize } from './type';

export const SVELTE_FUI_TABLE_CONTEXT_KEY = 'svelte-fui-table-context-key';

export type TableContext = {
	sortable$: Writable<boolean>;
	size$: Writable<TableSize>;
	sorting$: Writable<[key: (d: any) => any, direction: SortingDirection] | undefined>;
	allRows$: Readable<RowStore[]>;
	selectedKeys$: Readable<string[]>;
	mountRow: <T>(store: RowStore<T>) => () => void;
};

export function getTableContext(): TableContext {
	return getContext(SVELTE_FUI_TABLE_CONTEXT_KEY);
}

export function setTableContext() {
	const allRows$ = writable<any[]>([]);
	const selectedKeys$ = writable<string[]>([]);

	const context: TableContext = {
		sortable$: writable(false),
		size$: writable('md'),
		sorting$: writable(undefined),
		allRows$: readonly(allRows$),
		selectedKeys$: readonly(selectedKeys$),
		mountRow
	};

	return setContext(SVELTE_FUI_TABLE_CONTEXT_KEY, context);

	function mountRow<T>(store: RowStore<T>) {
		allRows$.update((old) => [...old, store]);

		const unsubscribe = store.selected$.subscribe((value) => {
			if (value) {
				selectedKeys$.update((old) => [...new Set([...old, store.id])]);
			} else {
				selectedKeys$.update((old) => old.filter((d) => d !== store.id));
			}
		});

		return () => {
			unsubscribe();
			destroyRow(store.id);
		};
	}

	function destroyRow(id: string) {
		allRows$.update((old) => old.filter((d) => d !== id));
	}
}
