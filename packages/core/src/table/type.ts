export type TableSize = 'xs' | 'sm' | 'md';
export type SortingDirection = 'ascending' | 'descending';
export type RowItem<T = any> = {
	selected: boolean;
	data: T;
};
