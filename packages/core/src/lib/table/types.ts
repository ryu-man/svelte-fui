import type { Snippet } from 'svelte';
import type { TableContext } from './context';

export type TableSize = 'xs' | 'sm' | 'md';
export type SortingDirection = 'ascending' | 'descending';

export type RowItem<T = any> = {
	id: string;
	selected: boolean;
	data: T;
};

export type TableRoot<T> = {
	class?: string;
	size?: TableSize;
	values?: string[];
	selections?: T[];
	element?: HTMLElement
	children?: Snippet<
		[
			{
				context: TableContext<T>;
			}
		]
	>;
};

export type TrProps<T> = {
	class?: string;
	id?: string;
	data?: T;
	appearance?: 'none' | 'neutral' | 'brand';
	element?: HTMLElement
	children?: Snippet<
		[
			{
				context: TableContext<T>;
			}
		]
	>;
};
