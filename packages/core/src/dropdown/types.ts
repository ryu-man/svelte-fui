import type { HTMLInputAttributes } from 'svelte/elements';

export type DropdownProps = HTMLInputAttributes & {
	open?: boolean;
	value?: string;
	data?: unknown;
	class?: string;
	id?: string
};

export type DropdownTriggerProps = {
	class?: string;
};
