import {
	autoUpdate,
	computePosition,
	type ComputePositionConfig,
	type ComputePositionReturn,
	type Placement
} from '@floating-ui/dom';
import { port } from '@svelte-fui/core/actions/portal.svelte';

type PopoverElement = HTMLElement;

export type PopoverParams = Partial<ComputePositionConfig> & {
	target: HTMLElement;
	reference: HTMLElement;
	offset?: number;
	open?: boolean;
	padding?: number;
	animate?: (node: PopoverElement, params: ComputePositionReturn & { open: boolean }) => void;
	onMount?: () => void | (() => void);
	onDestroy?: () => void;
	onChange?: (
		params: ComputePositionReturn & {
			dx: number;
			dy: number;
		}
	) => void;
};

function animateDefault(node: PopoverElement, params: ComputePositionReturn) {
	node.style.transform = `translate(${params.x}px, ${params.y}px)`;
}

export function popover(node: HTMLElement, fn: () => PopoverParams) {
	let params = fn();

	// This function is used to keep a reference of the `autoUpdate` cleanup function
	let cleanup: () => void = () => {};
	let unport: () => void = () => {};

	// This function is responsible of applying position calculation on the element and notify caller
	const positionate = async (node: PopoverElement, params: PopoverParams) => {
		const { middleware, placement, strategy }: Partial<ComputePositionConfig> = params;

		const {
			reference,
			onChange,
			animate,
			open
		}: Exclude<PopoverParams, keyof ComputePositionConfig> = params;

		const result = await computePosition(reference, node, {
			middleware: middleware,
			placement,
			strategy
		});

		onChange?.({ ...result, ...direction(result.placement) });

		(animate ?? animateDefault)(node, {
			...result,
			...direction(result.placement),
			open: open ?? false
		});
	};

	$effect(() => {
		params = fn();
		const { reference, target, open } = params;

		if (!reference) {
			// throw new Error('<Popover> reference element is undefined');
			return;
		}

		if (!target) {
			// throw new Error('<Popover> target element is undefined');
			return;
		}

		unport = port(node, target);

		if (open) {
			positionate(node, params);
			cleanup = autoUpdate(params.reference, node, () => positionate(node, params), {
				elementResize: true
			});
		}

		// Transfer element to the target element

		return () => {
			params.onDestroy?.();
			cleanup?.();
			unport?.();
		};
	});
}

function direction(placement: Placement) {
	const dy = placement.startsWith('top') ? -1 : placement.startsWith('bottom') ? 1 : 0;
	const dx = placement.startsWith('left') ? -1 : placement.startsWith('right') ? 1 : 0;

	return { dx, dy };
}
