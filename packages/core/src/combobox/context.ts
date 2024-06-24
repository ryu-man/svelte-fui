import type { DropdownContext } from '@svelte-fui/core/dropdown/context';
import { getFluentContext, setFluentContext } from '@svelte-fui/core/internal/context';

export const comboboxNamespace = 'dropdown';

export type ComboboxContext<T> = DropdownContext<T> & {};

export function getComboboxContext<T>() {
	return getFluentContext(comboboxNamespace) as ComboboxContext<T>;
}

export function setComboboxContext<T>(context: ComboboxContext<T>): ComboboxContext<T> {
	return setFluentContext<ComboboxContext<T>>(context, comboboxNamespace);
}
