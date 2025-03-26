export function clickoutside(node: Element, callback: (ev?: MouseEvent) => void) {
	$effect(() => {
		const handler = (ev: MouseEvent) => {
			const target = ev.target as HTMLElement | undefined;

			if (target && !node.contains(target)) {
				callback(ev);

				return;
			}
		};

		document.addEventListener('click', handler, { capture: true });
		document.addEventListener('contextmenu', handler, { capture: true });

		return () => {
			document.removeEventListener('click', handler);
			document.removeEventListener('contextmenu', handler);
		};
	});
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

	$effect(() => {
		return () => {
			observer.disconnect();
		};
	});
}
