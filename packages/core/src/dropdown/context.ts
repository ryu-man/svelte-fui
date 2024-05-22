import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

const SVELTE_FUI_DROPDOWN_CONTEXT_KEY = 'svelte-fui-dropdown-context-key';

type OnChangeProps = {
	value: string;
	text: string;
	data: unknown;
};
export type DropdownContext = {
	id: Writable<string>;
	open: Writable<boolean>;
	value: Writable<string | undefined>;
	data: Writable<unknown>;
	text: Writable<string | undefined>;
	triggerElement: Writable<HTMLElement>;
	openDropdownMenu: () => void;
	closeDropdownMenu: () => void;
	onChange: (props: OnChangeProps) => void;
};

export function getDropdownContext<T = DropdownContext>(): T {
	return getContext(SVELTE_FUI_DROPDOWN_CONTEXT_KEY);
}

export function setDropdownContext<T = DropdownContext>(context: T) {
	return setContext(SVELTE_FUI_DROPDOWN_CONTEXT_KEY, context);
}
