
export type DividerAppearance = 'strong' | 'brand' | 'subtl' | 'default';
export type DividerAlignContent = 'center' | 'start' | 'end';

export type DividerProps = {
	appearance?: DividerAppearance;
	vertical?: boolean;
	inset?: boolean;
	alignContent?: DividerAlignContent;
};
