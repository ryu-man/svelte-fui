import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DialogContext } from './context';

export type DialogType = 'modal' | 'non-modal' | 'alert';

export type DialogRootProps = HTMLAttributes<HTMLElement> & {
	class?: string;
	open: boolean;
	type: DialogType;
	element?: HTMLElement;
	children?: Snippet<
		[
			{
				context: DialogContext;
			}
		]
	>;

	onchange?: (params: { open: boolean; type: DialogType }) => void;
	onbackdropclick?: (params: { open: boolean; type: DialogType }) => void;
};

export type DialogHeaderProps = {
	class?: string;
	as?: 'div';
	element?: HTMLElement;
	children?: Snippet<[{ context: DialogContext }]>;
};

export type DialogBodyProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[{ context: DialogContext }]>;
};

export type DialogFooterProps = {
	class?: string;
	element?: HTMLElement;
	children?: Snippet<[{ context: DialogContext }]>;
};
