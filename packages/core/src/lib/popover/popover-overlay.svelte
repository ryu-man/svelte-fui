<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { clickoutside } from '@svelte-fui/core/actions/dom.svelte';
	import { popover } from './actions.svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import { getPopoverContext } from './context';
	import type { PopoverOverlayProps } from './types';
	import { animate } from '../actions/animation.svelte';
	import { DURATION } from '../internal/transition';
	import { getLayerContext } from '../app/layer/context';
	import { flip, offset } from '@floating-ui/dom';

	const rootContext = getFluentRootContext();
	const popoverContext = getPopoverContext();

	if (!popoverContext) {
		throw new Error('Cannot be used outside popover context');
	}

	const open = $derived(popoverContext.state.open);
	const placements = $derived(popoverContext.state.placements);
	const placement = $derived(popoverContext.state.placement);
	const alignment = $derived(popoverContext.state.alignment);
	const offsetValue = $derived(popoverContext.state.offset ?? 0);

	const defaultLayer = getLayerContext();
	$inspect(defaultLayer);

	const targetLayer = getLayerContext();

	const layerElement = $derived(targetLayer?.state.dom.inner);
	const triggerElement = $derived(popoverContext?.state?.dom?.trigger);

	let {
		element = $bindable(),
		class: klass = '',
		as = 'div',
		shell = undefined,
		children,
		onmount = (node, params) => ({}),
		onclickoutside,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & PopoverOverlayProps = $props();

	let dx = $state(0);
	let dy = $state(0);

	let canRender = $state(false);

	const onpointerenter = (ev) => {
		console.log(ev);
		canRender = true;
	};

	const onpointerexit = () => {};

	$effect(() => {
		const element = triggerElement?.addEventListener
			? triggerElement
			: triggerElement?.contextElement;

		if (element) {
			element.addEventListener('pointerenter', onpointerenter);
			element.addEventListener('pointerexit', onpointerexit);

			return () => {
				element.removeEventListener('pointerenter', onpointerenter);
				element.removeEventListener('pointerexit', onpointerexit);
			};
		}
	});

	function onclickoutside_(ev?: MouseEvent) {
		if (!open) {
			return;
		}

		if (triggerElement?.contains(ev?.target)) {
			return;
		}

		onclickoutside?.(ev, { context: popoverContext });

		if (ev?.defaultPrevented) {
			return;
		}

		popoverContext?.methods.close();
	}

	function pos(open: number, offset: number) {
		return 2 * offset * open - offset;
	}
</script>

{#if layerElement && triggerElement && canRender}
	{@const x = `${pos(+open, offsetValue) * dx}px`}
	{@const y = `${pos(+open, offsetValue) * dy}px`}

	<div
		class={classnames('fui-popover-overlay w-full md:w-fit')}
		data-owner-id={popoverContext.id}
		use:popover={() => ({
			open,
			target: layerElement,
			reference: triggerElement,
			alignment: alignment,
			placement: placement,
			middleware: [
				offset(offsetValue),
				flip({
					fallbackPlacements: placements,
					mainAxis: true,
					crossAxis: true,
					padding: 24
				})
			],
			onChange: (params) => {
				dx = params.dx;
				dy = params.dy;
			}
		})}
		style:pointer-events={open ? 'auto' : 'none'}
	>
		{#if as && !shell}
			<!-- content here -->
			<svelte:element
				this={as}
				bind:this={() => element,
				(el) => {
					popoverContext.update((s) => (s.dom.overlay = element = el));
				}}
				class={classnames('popover-overlay-inner w-fit z-[1] overflow-hidden', klass)}
				use:animate={() => ({
					x,
					y,
					opacity: +open,
					duration: DURATION.FAST / 1000,
					ease: 'circ.inOut'
				})}
				use:clickoutside={onclickoutside_}
				{...restProps}
			>
				{@render children?.({ dx, dy, context: popoverContext })}
			</svelte:element>
		{:else}
			<!-- else content here -->
			{@const Shell = shell}

			<Shell
				bind:element={() => element,
				(el) => {
					popoverContext.update((s) => (s.dom.overlay = element = el));
				}}
				class={classnames('popover-overlay-inner w-full md:w-fit z-[1] overflow-hidden', klass)}
				{as}
				animate={() => ({
					x,
					y,
					opacity: +open,
					duration: DURATION.FAST / 1000,
					ease: 'circ.inOut'
				})}
				{onclickoutside}
				{...restProps}
			>
				{@render children?.({ dx, dy, context: popoverContext })}
			</Shell>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.fui-popover-overlay {
		@apply absolute left-0 top-0;
	}
</style>
