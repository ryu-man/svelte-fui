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
import { port } from '../actions/portal.svelte';

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
	open?: boolean;
	animate?: (node: PopoverElement, params: ComputePositionReturn) => void;
	onMount?: () => void | (() => void);
	onDestroy?: () => void;
	onChange?: OnMountCallback;
};

function animate_default(node: PopoverElement, params: ComputePositionReturn) {
	node.style.transform = `translate(${params.x}px, ${params.y}px)`;
}

export function popover(node: HTMLElement, fn: () => PopoverParams) {
	let params = fn();

	// This function is used to keep a reference of the `autoUpdate` cleanup function
	let cleanup: () => void = () => {};
	let unport: () => void = () => {};

	// This function is responsible of applying position calculation on the element and notify caller
	const positionate = async (node: PopoverElement, params: PopoverParams) => {
		const d = await calculate_position(node, params);

		params?.onChange?.({ ...d, ...direction(d.placement) });

		(params?.animate ?? animate_default)(node, d);
	};

	$effect(() => {
		params = fn();

		if (!params.reference) {
			throw new Error('<Popover> reference element is undefined');
		}

		if (!params.target) {
			throw new Error('<Popover> target element is undefined');
		}

		unport = port(node, params.target);

		if (params.open) {
			cleanup = autoUpdate(params.reference, node, async () => {
				await positionate(node, params);
			});
		} else {
			positionate(node, params);
		}

		// Transfer element to the target element

		return () => {
			params.onDestroy?.();
			cleanup?.();
			unport?.();
		};
	});
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
				elementContext: 'floating',
				rootBoundary: 'viewport'
			})
		]
	});
}

function direction(placement: Placement) {
	const dy = placement.startsWith('top') ? -1 : placement.startsWith('bottom') ? 1 : 0;
	const dx = placement.startsWith('left') ? -1 : placement.startsWith('right') ? 1 : 0;

	return { dx, dy };
}
