import type { FieldState } from './types';
import { getFluentContext, setFluentContext, type FluentContext } from '../internal/context';

export const fieldPathSegments = ['field'];

export type FieldContext = FluentContext & {
	readonly state: {
		data: {};
		elements: {};
	};
	readonly derived: {
		data: {
			open: boolean;
			icon: any;
			state: FieldState;
			disabled: boolean;
			readonly: boolean;
		};
		elements: {};
	};
	events: {};
	methods: {
		open: () => void;
		close: () => void;
		toggle: () => void;
	};
};

export function getFieldContext(): FieldContext {
	return getFluentContext(...fieldPathSegments);
}

export function setFieldContext(context: FieldContext) {
	return setFluentContext(context, ...fieldPathSegments);
}
