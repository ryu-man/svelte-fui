import { getContext, setContext } from 'svelte';
import type { ComponentType } from 'svelte/internal';
import { type Writable, writable } from 'svelte/store';
import type { State } from './types,';

export const SVELTE_FUI_FIELD_CONTEXT_KEY = 'svelte-fui-field-context-key';

export type FieldContext = {
	state$: Writable<State>;
	icon$: Writable<ComponentType | undefined>;
};

export function getFieldContext(): FieldContext {
	return getContext(SVELTE_FUI_FIELD_CONTEXT_KEY);
}

export function setFieldContext(values: { state: State; icon: ComponentType | undefined }) {
	const context: FieldContext = {
		state$: writable(values.state),
		icon$: writable(values.icon)
	};

	return setContext(SVELTE_FUI_FIELD_CONTEXT_KEY, context);
}
