import { getFluentContext, setFluentContext } from '../internal/context';
import type { PopoverContext } from '../popover';

export const dropdownNamespace = 'dropdown';

export type ContextDropdownItem<T> = {
	value: () => string;
	data: () => T | undefined;
	isSelected: () => boolean;
	isDisabled: () => boolean;
	innerText: () => string;
};

export type DropdownContext<T> = PopoverContext & {
	parent: <R>() => DropdownContext<R> | undefined;

	readonly state: {
		data: {};
		elements: {
			root?: HTMLElement;
			trigger?: HTMLElement;
			indicator?: HTMLElement;
			overlay?: HTMLElement;
		};
	};

	readonly derived: {
		data: {
			open: boolean;
			multiple: boolean;
			value?: string;
			values: string[];
			items: {
				all: Map<string, ContextDropdownItem<T>>;
				active: ContextDropdownItem<T>[];
			};
			data: T[];
		};
		elements: {
			root?: HTMLElement;
			trigger?: HTMLElement;
			indicator?: HTMLElement;
			overlay?: HTMLElement;
		};
	};
	events: {
		onchange: (params: DropdownContext<T>, type: string) => void;
	};
	methods: {
		mount: (id: string, item: ContextDropdownItem<T>) => () => void;
		unmount: (id: string) => void;

		select: (values: string[]) => void;
		unselect: (values: string[]) => void;
		selected: (value: string) => boolean;
	};
};

export function getDropdownContext<T>() {
	return getFluentContext<DropdownContext<T>>(dropdownNamespace);
}

export function setDropdownContext<T>(context: DropdownContext<T>) {
	return setFluentContext(context, dropdownNamespace);
}
