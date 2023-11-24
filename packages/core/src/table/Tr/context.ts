import { getContext, setContext } from 'svelte';

export const SVELTE_FUI_TABLE_ROW_CONTEXT_KEY = 'svelte-fui::table-row-context-key';

export type TableContext = {
	id: string | undefined;
	header: boolean;
};

export function getTableRowContext(): TableContext {
	return getContext(SVELTE_FUI_TABLE_ROW_CONTEXT_KEY);
}

export function setTableRowContext() {
	const context: TableContext = {
		id: undefined,
		header: false
	};

	return setContext(SVELTE_FUI_TABLE_ROW_CONTEXT_KEY, context);
}
