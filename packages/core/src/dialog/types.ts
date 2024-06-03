import type { HTMLAttributes } from 'svelte/elements';

export type DialogType = 'modal' | 'non-modal' | 'alert';

export type DialogProps = HTMLAttributes<HTMLElement> & {
	open: boolean;
	type: DialogType;
};
