import { tick } from 'svelte';
import type { DragEventHandler } from 'svelte/elements';

export type ClickOUtsideParams = {
	exclude: (string | Element)[];
	callback: (ev?: MouseEvent) => void;
};

export function clickOutside(node: Element, { callback, exclude = [] }: ClickOUtsideParams) {
	document.addEventListener('click', handler);

	return {
		destroy() {
			document.removeEventListener('click', handler);
		}
	};

	function handler(ev: MouseEvent) {
		const target = ev.target as HTMLElement | undefined;
		if (target && !node.contains(target)) {
			// user clicked outside the current element

			// Check wethere the target is excluded or not
			const excludedElements = exclude
				.filter(Boolean)
				.map((d) => {
					if (d instanceof Element) return d;

					return [...document.querySelectorAll(`[data-${d}]`).values()];
				})
				.flat();

			if (excludedElements.some((d) => d.contains(target))) {
				// Do not fire click outside, target element excluded
				return;
			}

			callback(ev);
			return;
		}
	}
}

export type DropzoneParams = {
	onDragEnter?: DragEventHandler<HTMLElement>;
	onDragLeave?: DragEventHandler<HTMLElement>;
	onDragOver?: DragEventHandler<HTMLElement>;
	onDrop?: DragEventHandler<HTMLElement>;
};
export function dropzone(node: HTMLElement, { onDrop, onDragEnter, onDragLeave, onDragOver }: DropzoneParams) {
	const on_drag_enter = (ev: DragEvent) => {
		ev.preventDefault();
		onDragEnter?.(ev);
	};
	const on_drag_over = (ev: DragEvent) => {
		ev.preventDefault();
		onDragOver?.(ev);
	};
	const on_drag_leave = (ev: DragEvent) => {
		onDragLeave?.(ev);
	};
	const on_drop = (ev: DragEvent) => {
		ev.preventDefault();
		onDrop?.(ev);
	};

	node.addEventListener('dragenter', on_drag_enter);
	node.addEventListener('dragleave', on_drag_leave);
	node.addEventListener('dragover', on_drag_over);
	node.addEventListener('drop', on_drop);

	return {
		destroy() {
			node.removeEventListener('dragenter', on_drag_enter);
			node.removeEventListener('dragleave', on_drag_leave);
			node.removeEventListener('dragover', on_drag_over);
			node.removeEventListener('drop', on_drop);
		}
	};
}
