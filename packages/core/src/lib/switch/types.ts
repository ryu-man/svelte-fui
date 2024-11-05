export type SwitchProps = {
	class?: string;
	id?: string;
	checked?: boolean;
	position: 'before' | 'after' | 'above';
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
    onchange?: HTMLDivElement['onchange']
};