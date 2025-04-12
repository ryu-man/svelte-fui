import type { ReferenceFunction } from '../types';

export function reference(node: Element, fn?: ReferenceFunction) {
	const destroy = fn?.(node);

	$effect(() => {
		return destroy;
	});
}
