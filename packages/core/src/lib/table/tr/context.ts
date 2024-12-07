import {
	getFluentContext,
	setFluentContext,
	type FluentContext
} from '@svelte-fui/core/internal/context';

export const tableRowSegments = ['table', 'tr'];

export type TableRowContext<T> = FluentContext & {
	readonly state: {
		data: {};
	};

	readonly derived: {
		data: {
			id: string;
			header: boolean;
			data?: T;
		};
	};
};

export function getTableRowContext(): TableRowContext<T> {
	return getFluentContext(...tableRowSegments);
}

export function setTableRowContext(context: TableRowContext<T>) {
	return setFluentContext(context, ...tableRowSegments);
}
