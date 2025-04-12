import { default as TableRoot } from './table-root.svelte';
import { default as Th } from './th.svelte';
import { default as Td } from './td.svelte';
import { default as Tr } from './tr/tr.svelte';
import { default as TdSelection } from './td-selection.svelte';

export * from './types';
export * from './context';

export const Table = {
	Root: TableRoot,
	Th: Th,
	Td: Td,
	TdSelection: TdSelection,
	Tr: Tr
};
