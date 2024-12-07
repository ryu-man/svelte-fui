import {
	getFluentContext,
	setFluentContext,
	type FluentContext
} from '@svelte-fui/core/internal/context';

export const FUI_MENU_NAMESPACE = 'menu';

export type ContextMenuItem<T> = {
	value: () => string;
	data: () => T | undefined;
	isSelected: () => boolean;
	isDisabled: () => boolean;
	innerText: () => string;
};

export type MenuContext = FluentContext & {
	parent: () => MenuContext | undefined;
	readonly state: {
		data: {};
		elements: {
			trigger?: HTMLElement;
			indicator?: HTMLElement;
			overlay?: HTMLElement;
		};
	};
	readonly derived: {
		data: {
			open: boolean;
		};
		elements: {
			trigger?: HTMLElement;
			indicator?: HTMLElement;
			overlay?: HTMLElement;
		};
	};
	events: {
		onchange: <T = MenuContext>(params: { context: T }) => void;
	};
	methods: {
		open: () => void;
		close: () => void;
		toggle: () => void;
	};
};

export function getMenuContext() {
	return getFluentContext<MenuContext>(FUI_MENU_NAMESPACE);
}

export function setMenuContext(context: MenuContext) {
	return setFluentContext(context, FUI_MENU_NAMESPACE);
}
