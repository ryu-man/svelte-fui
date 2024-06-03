import { tick } from 'svelte';

export type PortalParams = {
	target: HTMLElement;
	onMount?: () => void;
	onUpdate?: () => void;
};
export function portal(node: HTMLElement, { target = document.body, onMount = () => {}, onUpdate = () => {} }: PortalParams) {
	tick().then(() => {
		port(node, target);
		onMount();
	});

	return {
		destroy() {
			node.remove();
		},
		update(target: HTMLElement = document.body) {
			tick().then(() => {
				port(node, target);
				onUpdate();
			});
		}
	};
}

function port(node: HTMLElement, target: HTMLElement = document.body) {
	if (!target) {
		throw Error('[actions] portal: Target element is undefined.');
	}

	if (node.parentElement === target) {
		// Element is already mounted on target
		return;
	}

	node.hidden = true;

	target.appendChild(node);
    
	node.hidden = false;
}
