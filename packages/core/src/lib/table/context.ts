import { getContext, setContext } from 'svelte';
import { type Readable, type Writable, readonly, writable } from 'svelte/store';
import { type RowStore } from './store';
import type { SortingDirection, TableSize } from './types';
import { getFluentContext, setFluentContext, type FluentContext } from '../internal/context';

export const pathSegments = ['table'];

export type TableRow<T = any> = {
	id: string;
	data?: T;
};

export type TableContext<T = any> = FluentContext & {
	readonly state: {};

	readonly derived: {
		data: {
			size: TableSize;
			values: string[];
			rows: {
				all: Map<string, TableRow<T>>;
				selections: TableRow<T>[];
			};
		};
	};

	events: {
		onchange: (ev: undefined, params: { context: TableContext<T> }) => any;
	};

	methods: {
		select: (values: string[]) => void;
		unselect: (values: string[]) => void;

		mount: (id: string, data?: T) => () => void;
		unmount: (id: string) => void;
	};
};

export function getTableContext<T>(): TableContext<T> {
	return getFluentContext(...pathSegments);
}

export function setTableContext<T>(context: TableContext<T>) {
	return setFluentContext(context, ...pathSegments);
}
