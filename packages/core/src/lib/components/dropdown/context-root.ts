import type { Alignment, Placement } from '@floating-ui/dom';
import { getPopoverContext, setPopoverContext, type PopoverContext } from '../popover';
import type { DropdownItem } from './context-item';

export const dropdownNamespace = 'dropdown';

export type DropdownState<Data, Extension = Record<string, any>> = {
	readonly open: boolean;
	readonly multiple: boolean;
	readonly value?: string;
	readonly values: string[];
	readonly placements: Placement[];
	readonly placement: Placement;
	readonly alignment: Alignment;
	readonly offset: number;
	readonly data?: Data;
	readonly items: {
		all: Map<string, DropdownItem<Data>>;
		selected: DropdownItem<Data>[];
	};

	extension: Extension;

	dom: {
		root?: HTMLElement;
		trigger?: HTMLElement;
		indicator?: HTMLElement;
		overlay?: HTMLElement;
	};
};

export type DropdownContext<Data, Extension = Record<string, any>> = Omit<
	PopoverContext<DropdownState<Data, Extension>>,
	'events' | 'methods'
> & {
	parent: <R>() => DropdownContext<R> | undefined;

	events: {
		onchange: (event: CustomEvent, params?: { context: DropdownContext<Data, Extension> }) => void;
	};
	methods: PopoverContext['methods'] & {
		mount: (id: string, item: DropdownItem<Data>) => () => void;
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
