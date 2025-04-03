import { getFluentContext, setFluentContext, type FluentContext } from '../internal/context';

const dropdownItemNamespaceSegments = ['dropdown', 'item'];

export type DropdownItem<T> = {
	readonly value?: string;
	readonly data?: T;
	readonly disabled: boolean;
	readonly selected: boolean;
	readonly text?: string;
};

export type DropdownItemState<T = any> = {
	active: boolean;
	value: string;
	data?: T;
};

export type DropdownItemContext<T> = FluentContext<DropdownItemState<T>> & {
	methods: {
		select: () => void;
		unselect: () => void;
	};
};

export function getDropdownItemContext<T>() {
	return getFluentContext<DropdownItemContext<T>>(...dropdownItemNamespaceSegments);
}

export function setDropdownItemContext<T>(context: DropdownItemContext<T>) {
	return setFluentContext(context, ...dropdownItemNamespaceSegments);
}
