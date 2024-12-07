import { default as DialogActions } from './dialog-actions.svelte';
import { default as DialogBody } from './dialog-body.svelte';
import { default as DialogHeader } from './dialog-header.svelte';
import { default as DialogRoot } from './dialog-root.svelte';

export * from './types';
export * from './context';

export const Dialog = {
	Root: DialogRoot,
	Actions: DialogActions,
	Body: DialogBody,
	Header: DialogHeader
};
