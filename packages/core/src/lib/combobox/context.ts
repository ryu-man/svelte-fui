import type { DropdownContext } from '../dropdown/context-root';
import { getFluentContext, setFluentContext } from '../internal/context';

export const comboboxNamespace = 'combobox';

export type ContextDropdownItem<T> = {
	value: () => string;
	data: () => T | undefined;
	isSelected: () => boolean;
	isDisabled: () => boolean;
	innerText: () => string;
};

export type ComboboxContext<T> = DropdownContext<T> & {
	parent: <R>() => ComboboxContext<R> | undefined;

	readonly state: {
		data: {
			input: {
				value: string;
			};
		};
	};

	readonly derived: {
		data: {};
	};
};

export function getComboboxContext<T>() {
	return getFluentContext<ComboboxContext<T>>(comboboxNamespace);
}

export function setComboboxContext<T>(context: ComboboxContext<T>) {
	return setFluentContext(context, comboboxNamespace);
}
