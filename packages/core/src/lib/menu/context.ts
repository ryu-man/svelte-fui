import { type FluentContext } from '@svelte-fui/core/internal/context';
import {
	getPopoverContext,
	setPopoverContext,
	type PopoverContext,
	type PopoverState
} from '../popover';

export const FUI_MENU_NAMESPACE = 'menu';

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

export function getMenuContext() {
	const context = getPopoverContext();

	if (!['menu', 'sub-menu'].includes(context?.type)) {
		return undefined;
	}

	return context;
}

export function setMenuContext(context: MenuContext) {
	if (!['menu', 'sub-menu'].includes(context?.type)) {
		console.log('the context type should be = "menu"');
		return context;
	}

	return setPopoverContext(context);
}
