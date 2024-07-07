import type { HTMLAttributes } from 'svelte/elements';
import type { Alignment, Placement } from '@floating-ui/dom';

export type PopoverProps = HTMLAttributes<HTMLDivElement> & {
	open?: boolean;
	referenceElement?: HTMLElement;
	placements?: Placement[];
	alignment?: Alignment;
	offset?: number;
};
