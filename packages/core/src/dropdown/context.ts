import type { Writable } from 'svelte/store';
import { getFluentContext, setFluentContext } from '../internal/context';

export const dropdownNamespace = 'dropdown';

type OnChangeProps<T> = {
	value: string;
	text: string;
	data: T;
};
export type DropdownContext<T> = {
	id: Writable<string>;
	open: Writable<boolean>;
	value: Writable<string | undefined>;
	data: Writable<T | undefined>;
	text: Writable<string | undefined>;
	triggerElement: Writable<HTMLElement>;
	openMenu: (delay?: number) => void;
	closeMenu: (delay?: number) => void;
	onChange: (props: OnChangeProps<T>) => void;
};

export function getDropdownContext<T>() {
	return getFluentContext<DropdownContext<T>>(dropdownNamespace);
}

export function setDropdownContext<T>(context: DropdownContext<T>) {
	return setFluentContext(context, dropdownNamespace);
}
