import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import type { Options as FocusTrapOptions } from 'focus-trap';

import { tabbable } from 'tabbable';
import { createFocusTrap } from 'focus-trap';

import { tailwindcssConfig, defaultTheme } from '@svelte-fui/tailwindcss';

// export { default as FlyoutSurface } from "./Flyout/FlyoutSurface.svelte";
// export { default as TooltipSurface } from "./Tooltip/TooltipSurface.svelte";
// export { default as MenuFlyoutSurface } from "./MenuFlyout/MenuFlyoutSurface.svelte";
// export { default as CalendarViewItem } from "./CalendarView/CalendarViewItem.svelte";

// Svelte action for handling outer mouse
interface ExternalMouseEventOptions {
	type?: string;
	stopPropagation?: boolean;
}
export function externalMouseEvents(
	node: HTMLElement,
	options: ExternalMouseEventOptions = { type: 'click', stopPropagation: false }
) {
	const { type, stopPropagation } = options;
	const handleEvent = (event: MouseEvent) => {
		if (stopPropagation) event.stopPropagation();
		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent(`outer${type}`, {
					detail: event
				})
			);
		}
	};

	document.addEventListener(type, handleEvent, true);

	return {
		destroy() {
			document.removeEventListener(type, handleEvent, true);
		}
	};
}

// Basic wrapper action around focus-trap
export function focusTrap(node: HTMLElement, options?: FocusTrapOptions) {
	const trap = createFocusTrap(node, (options = { ...options, fallbackFocus: node }));
	trap.activate();

	return {
		destroy() {
			trap.deactivate();
		}
	};
}

// ID generator for handling WAI-ARIA related attributes
export function uid(prefix: string) {
	return (
		prefix +
		String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
		Math.random().toString(16).slice(2) +
		Date.now().toString(16).split('.')[0]
	);
}

interface ArrowNavigationOptions {
	preventTab?: boolean;
	stopPropagation?: boolean;
}

// Controls the focus of a list of elements by using the arrow keys
export function arrowNavigation(
	node: HTMLElement,
	options: ArrowNavigationOptions = { preventTab: false, stopPropagation: false }
) {
	const handleKeyDown = (event: KeyboardEvent) => {
		const { key } = event;
		const { activeElement } = document;

		let tabOrder = <HTMLElement[]>tabbable(node);
		// if (directChildren) tabOrder = tabOrder.filter(child => child.parentElement === node);
		const activeIndex = tabOrder.indexOf(document.activeElement as HTMLElement);

		if (tabOrder.length < 0) return;
		if (
			key === 'ArrowUp' ||
			key === 'ArrowDown' ||
			key === 'Home' ||
			key === 'End' ||
			(key === 'Tab' && options.preventTab)
		) {
			event.preventDefault();
			if (options.stopPropagation) event.stopPropagation();
		}

		if (key === 'ArrowUp') {
			if (tabOrder[0] === activeElement) {
				tabOrder[tabOrder.length - 1].focus();
			} else if (tabOrder.includes(<HTMLElement>activeElement)) {
				tabOrder[activeIndex - 1].focus();
			}
		} else if (key === 'ArrowDown') {
			if (tabOrder[tabOrder.length - 1] === activeElement) {
				tabOrder[0].focus();
			} else if (tabOrder.includes(<HTMLElement>activeElement)) {
				tabOrder[activeIndex + 1].focus();
			}
		} else if (key === 'Home') {
			tabOrder[0].focus();
		} else if (key === 'End') {
			tabOrder[tabOrder.length - 1].focus();
		}
	};

	node.addEventListener('keydown', handleKeyDown);

	return {
		destroy: () => node.removeEventListener('keydown', handleKeyDown)
	};
}

// Returns a number representing the duration of a specified CSS custom property in ms
export function getCSSDuration(property) {
	const duration = window.getComputedStyle(document.documentElement).getPropertyValue(property);

	return parseFloat(duration) * (/\ds$/.test(duration) ? 1000 : 1) || 0;
}

const custom_tw_merge = extendTailwindMerge({
	extend: {
		theme: {
			spacing: [
				...new Set([
					...Object.keys(defaultTheme.spacing ?? {}),
					...Object.keys(tailwindcssConfig.theme.extend.spacing ?? {})
				])
			],
			borderWidth: Object.keys(tailwindcssConfig.theme.extend.borderWidth)
		}
	}
});

export function classnames(...args: ClassValue[]): string {
	return custom_tw_merge(clsx(...args));
}
