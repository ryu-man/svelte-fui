import { getFluentContext, setFluentContext, type FluentContext } from '../internal/context';

export const dropdownItemNamespaceSegments = ['dropdown', 'item'];
export const dropdownItemNamespace = dropdownItemNamespaceSegments.join('/');

export type ContextDropdownItem<T> = {
	value: () => string;
	data: () => T | undefined;
	isSelected: () => boolean;
	isDisabled: () => boolean;
	innerText: () => string;
};

export type DropdownItemContext<T> = FluentContext & {
	readonly state: {
		data: {};
		elements: {};
	};

	readonly derived: {
		data: {
			active: boolean;
			value: string;
			data?: T;
		};
		elements: {};
	};
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
