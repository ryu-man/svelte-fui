import { getContext, setContext } from 'svelte';
import type { Layout } from './types';
import type { FluentContext } from '../internal/context';

export const FUI_RADIO_GROUP_CONTEXT_KEY = 'radio-group';

export type RadioGroupContext = FluentContext & {
	readonly state: {};
	readonly derived: {
		data: {
			disabled: boolean;
			required: boolean;
			name?: string;
			value?: string;
			layout: Layout;
		};
	};
	methods: {
		select: (value: string) => void;
		unselect: () => void;
	};
};

export function getRadioGroupContext(): RadioGroupContext {
	return getContext(FUI_RADIO_GROUP_CONTEXT_KEY);
}

export function setRadioGroupContext(context: RadioGroupContext): RadioGroupContext {
	return setContext(FUI_RADIO_GROUP_CONTEXT_KEY, context);
}
