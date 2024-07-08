import { type Writable } from 'svelte/store';
import { getFluentContext, setFluentContext } from '../internal/context';

const FUI_POPOVER_CONTEXT_ID = 'popover';

export type PopoverContext = {
	open: Writable<boolean>;
	referenceElement: Writable<HTMLElement | undefined>;
};

export function getPopoverContext(): PopoverContext | undefined {
	return getFluentContext(FUI_POPOVER_CONTEXT_ID);
}

export function setPopoverContext(context: PopoverContext) {
	return setFluentContext(context, FUI_POPOVER_CONTEXT_ID);
}
