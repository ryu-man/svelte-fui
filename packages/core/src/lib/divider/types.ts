import type { HTMLAttributes } from 'svelte/elements';

export type DividerAppearance = 'strong' | 'brand' | 'subtl' | 'default';
export type DividerAlignContent = 'center' | 'start' | 'end';

export type DividerProps = HTMLAttributes<HTMLButtonElement> & {
	appearance?: DividerAppearance;
	vertical?: boolean;
	inset?: boolean;
	alignContent?: DividerAlignContent;
};
