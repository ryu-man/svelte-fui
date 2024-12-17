import PopoverIndicator from './popover-indicator.svelte';
import PopoverOverlay from './popover-overlay.svelte';
import PopoverTrigger from './popover-trigger.svelte';
import PopoverRoot from './popover-root.svelte';

export * from './context';
export * from './types';

export const Popover = {
	Root: PopoverRoot,
	Overlay: PopoverOverlay,
	Trigger: PopoverTrigger,
	Indicator: PopoverIndicator
};
