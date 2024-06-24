import type { HTMLAttributes } from 'svelte/elements';
import type { Placement } from '@floating-ui/dom';

export type MenuRootProps = HTMLAttributes<HTMLDivElement> & {
	open?: boolean;
	discover?: boolean;
	offset?: number;
	placements?: Placement[];
};

export type MenuItemProps = HTMLAttributes<HTMLButtonElement> & {
	open?: boolean;
};

export type MenuGroupProps = HTMLAttributes<HTMLDivElement>;

export type MenuDividerProps = HTMLAttributes<HTMLDivElement>;
