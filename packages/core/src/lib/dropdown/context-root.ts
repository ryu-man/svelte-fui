import type { Alignment, Placement } from '@floating-ui/dom';
import { getPopoverContext, setPopoverContext, type PopoverContext } from '../popover';

export const dropdownNamespace = 'dropdown';

export type DropdownItem<T> = {
	readonly value?: string;
	readonly data?: T;
	readonly disabled: boolean;
	readonly selected: boolean;
	readonly text?: string;
};

export type DropdownState<T> = {
	readonly open: boolean;
	readonly multiple: boolean;
	readonly value?: string;
	readonly values: string[];
	readonly placements: Placement[];
	readonly placement: Placement;
	readonly alignment: Alignment;
	readonly offset: number;
	readonly data?: T;
	readonly items: {
		all: Map<string, DropdownItem<T>>;
		selected: DropdownItem<T>[];
	};

	dom: {
		root?: HTMLElement;
		trigger?: HTMLElement;
		indicator?: HTMLElement;
		overlay?: HTMLElement;
	};
};

export type DropdownContext<T> = Omit<PopoverContext<DropdownState<T>>, 'events' | 'methods'> & {
	parent: <R>() => DropdownContext<R> | undefined;

	events: {
		onchange: (params: DropdownContext<T>, type: string) => void;
	};
	methods: PopoverContext['methods'] & {
		mount: (id: string, item: DropdownItem<T>) => () => void;
		unmount: (id: string) => void;

		select: (values: string[]) => void;
		unselect: (values: string[]) => void;
		selected: (value: string) => boolean;
	};
};

export function getDropdownContext<T>(): DropdownContext<T> | undefined {
	const context = getPopoverContext() as DropdownContext<T> | undefined;

	if (context?.type !== 'dropdown') {
		return undefined;
	}

	return context;
}

export function setDropdownContext<T>(context: DropdownContext<T>): DropdownContext<T> {
	if (context.type !== 'dropdown') {
		return context;
	}

	return setPopoverContext(context) as unknown as DropdownContext<T>;
}
