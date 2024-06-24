import type { HTMLInputAttributes } from 'svelte/elements';

export type DropdownProps<T> = HTMLInputAttributes & {
	open?: boolean;
	value?: string;
	data?: T;
	class?: string;
	id?: string;
};

export type DropdownTriggerProps = {
	class?: string;
};
