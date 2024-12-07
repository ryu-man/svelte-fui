import { tick } from 'svelte';
import {
	type AutoPlacementOptions,
	type ComputePositionReturn,
	type Placement,
	autoPlacement,
	autoUpdate,
	computePosition,
	offset
} from '@floating-ui/dom';
import { portal } from './portal';

type PopoverElement = HTMLElement | SVGElement;

type OnChangeParams = ComputePositionReturn & {
	dx: number;
	dy: number;
};
type OnMountCallback = (p: OnChangeParams) => void;

type PopoverParams = AutoPlacementOptions & {
	target: HTMLElement;
	reference?: HTMLElement;
	offset?: number;
	animate?: (node: PopoverElement, params: ComputePositionReturn) => void;
	onMount?: () => void | (() => void);
	onDestroy?: () => void;
	onChange?: OnMountCallback;
	onReferenceChange?: (element: HTMLElement) => void;
};

function animate_default(node: PopoverElement, params: ComputePositionReturn) {
	node.style.transform = `translate(${params.x}px, ${params.y}px)`;
}

export function popover(
	node: HTMLElement,
	{ animate = animate_default, ...params }: PopoverParams
) {
	node.hidden = true;

	if (!params.reference) {
		if (!node.parentElement) {
			throw new Error('<Popover> reference element is undefined');
		}

		params.reference = node.parentElement;
		params?.onReferenceChange?.(params.reference);
	}

	// This function is used to keep a reference of the `autoUpdate` cleanup function
	let cleanup: () => void = () => {};
	let onmount_cleanup: (() => void) | void = undefined;

	// This function is responsible of applying position calculation on the element and notify caller
	const positionate = async (node: PopoverElement, params: PopoverParams) => {
		const d = await calculate_position(node, params);
		params?.onChange?.({ ...d, ...direction(d.placement) });
		animate(node, d);
	};

	// Transfer element to the target element
	const portal_action = portal(node, {
		target: params.target,
		onMount: async () => {
			await positionate(node, params);

			cleanup();
			// Keep position updated
			cleanup = autoUpdate(params.reference, node, async () => {
				portal_action.update(params.target);

				await tick();

				await positionate(node, params);
			});

			onmount_cleanup = params?.onMount?.();
		}
	});

	return {
		update(params: PopoverParams) {
			if (!node && !params.target) return;

			portal_action.update(params.target);
		},
		destroy() {
			cleanup?.();
			onmount_cleanup?.();
			params.onDestroy?.();
			portal_action.destroy();
		}
	};
}

type CalculatePositionParams = AutoPlacementOptions & {
	offset?: number;
	reference?: HTMLElement;
	onMount?: OnMountCallback;
};

async function calculate_position(node: PopoverElement, params: CalculatePositionParams) {
	if (!params.reference) {
		throw new Error('Reference element is not found');
	}

	return computePosition(params.reference, node, {
		middleware: [
			offset(params.offset),
			autoPlacement({
				autoAlignment: true,
				crossAxis: true,
				allowedPlacements: params.allowedPlacements,
				alignment: params.alignment,
			})
		]
	});
}

function direction(placement: Placement) {
	const dy = placement.startsWith('top') ? 1 : placement.startsWith('bottom') ? -1 : 0;
	const dx = placement.startsWith('left') ? 1 : placement.startsWith('right') ? -1 : 0;

	return { dx, dy };
}
