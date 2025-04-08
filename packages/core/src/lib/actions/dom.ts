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
export function dropzone(
	node: HTMLElement,
	{ onDrop, onDragEnter, onDragLeave, onDragOver }: DropzoneParams
) {
	const onDragEnter_ = (ev: DragEvent) => {
		ev.preventDefault();
		onDragEnter?.(ev);
	};
	const onDragOver_ = (ev: DragEvent) => {
		ev.preventDefault();
		onDragOver?.(ev);
	};
	const onDragLeave_ = (ev: DragEvent) => {
		onDragLeave?.(ev);
	};
	const onDrop_ = (ev: DragEvent) => {
		ev.preventDefault();
		onDrop?.(ev);
	};

	node.addEventListener('dragenter', onDragEnter_);
	node.addEventListener('dragleave', onDragLeave_);
	node.addEventListener('dragover', onDragOver_);
	node.addEventListener('drop', onDrop_);

	return {
		destroy() {
			node.removeEventListener('dragenter', onDragEnter_);
			node.removeEventListener('dragleave', onDragLeave_);
			node.removeEventListener('dragover', onDragOver_);
			node.removeEventListener('drop', onDrop_);
		}
	};
}

export function frame(node: HTMLElement) {
	const resize = (node: HTMLElement) => {
		const parentElement = node.parentElement;

		if (!parentElement) return;

		parentElement.style.width = `${node.clientWidth}px`;
		parentElement.style.height = `${node.clientHeight}px`;
	};

	const observer = new ResizeObserver(() => resize(node));
	observer.observe(node);

	resize(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

export function mount<T extends HTMLElement>(node: T, callback: (node: T) => (() => void) | void) {
	const destroy = callback(node);

	return {
		destroy: () => destroy?.()
	};
}
