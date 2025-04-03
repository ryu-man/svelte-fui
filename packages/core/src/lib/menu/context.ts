import { getFluentContextPath, type FluentContext } from '@svelte-fui/core/internal/context';
import { setPopoverContext, type PopoverContext, type PopoverState } from '../popover';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = 'menu';

export type MenuState = PopoverState;

export type ContextMenuItem<T> = {
	readonly value: string;
	readonly data: T | undefined;
	readonly isSelected: boolean;
	readonly isDisabled: boolean;
	readonly innerText: string;
};

export type MenuContext = FluentContext<MenuState> & {
	events: PopoverContext['events'] & {
		onclickitem: <T = MenuContext>(params: { context: T }) => void;
	};
	methods: PopoverContext['methods'];
};

export function getMenuContext(): MenuContext | undefined {
	return getContext(getFluentContextPath(CONTEXT_KEY));
}

export function setMenuContext(context: MenuContext): MenuContext {
	return setContext(getFluentContextPath(CONTEXT_KEY), context);
}
