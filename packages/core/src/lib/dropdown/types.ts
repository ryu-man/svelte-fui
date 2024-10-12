import type { Placement } from '@floating-ui/dom';
import type { HTMLInputAttributes } from 'svelte/elements';

export type DropdownProps<T> = HTMLInputAttributes & {
	open?: boolean;
	value?: string;
	data?: T;
	class?: string;
	id?: string;
	discover?: boolean;
	offset?: number;
};

export type DropdownTriggerProps = {
	class?: string;
};
