export type PortalParams = {
	target: HTMLElement;
	onMount?: () => void;
	onUpdate?: () => void;
	onDestroy?: () => void;
};

export function portal(node: HTMLElement, fn: () => PortalParams) {
	let unport: () => void = () => {};

	const { onMount = () => {} } = fn();

	onMount?.();

	$effect(() => {
		const { target = document.body, onUpdate = () => {}, onDestroy = () => {} } = fn();

		if (!target) {
			return;
		}

		unport = port(node, target);

		onUpdate();

		return () => {
			onDestroy();
			unport?.();
		};
	});
}

export function port(node: HTMLElement, target: HTMLElement = document.body) {
	if (!target) {
		throw Error('[actions] portal: Target element is undefined !');
	}

	node.hidden = true;

	// Check if element is already mounted on target
	if (node.parentElement !== target) {
		target.appendChild(node);
		node.hidden = false;
	}

	return () => {
		node.hidden = true;
		node.remove();
	};
}
