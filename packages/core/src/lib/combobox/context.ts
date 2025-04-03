import { type DropdownContext } from '../dropdown/context-root';
import { getMenuContext, setMenuContext } from '../menu';

export const comboboxNamespace = 'combobox';

export type ComboboxItem<T> = {
	value: string;
	data?: T;
	selected: boolean;
	disabled: boolean;
	text: string;
};

export type ComboboxExtension = {
	query?: string;
};

export type ComboboxContext<Data> = DropdownContext<Data, ComboboxExtension> & {
	methods: {
		setQuery: (query: string)=> void
	}
};

export type ComboboxState<Data> = ComboboxContext<Data>['state'];

export function getComboboxContext<T>(): ComboboxContext<T> | undefined {
	return getMenuContext() as ComboboxContext<T> | undefined;
}

export function setComboboxContext<T>(context: ComboboxContext<T>): ComboboxContext<T> {
	return setMenuContext(context) as unknown as ComboboxContext<T>;
}
