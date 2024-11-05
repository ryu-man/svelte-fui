<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { clickOutside } from '@svelte-fui/core/actions/dom';
	import { popover } from '@svelte-fui/core/actions/popover';
	import { classnames } from '@svelte-fui/core/internal';
	import { getPopoverContext } from './context';
	import type { PopoverOverlayProps } from './types';

	const context_root = getFluentRootContext();
	const context_popover = getPopoverContext();

	const open = $derived(context_popover.derived.data.open);

	const element_overlay = $derived(context_root?.derived?.elements?.layouts?.['overlay']?.element);
	const element_trigger = $derived(context_popover?.derived?.elements?.trigger);

	let {
		class: klass = '',
		placements,
		alignment,
		offset = 8,
		children,
		onmount = (node, params) => ({}),
		onclickoutside,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & PopoverOverlayProps = $props();

	let dx = $state(0);
	let dy = $state(0);

	function onclick_outside(ev: MouseEvent) {
		onclickoutside?.(ev, { context: context_popover });

		if (ev.defaultPrevented) {
			return;
		}

		context_popover?.methods.close();
	}
</script>

{#if element_overlay && element_trigger}
	<div
		class={classnames('fui-popover pointer-events-auto h-min w-min', klass)}
		data-dx={dx}
		data-dy={dy}
		use:popover={{
			reference: element_trigger,
			target: element_overlay,
			allowedPlacements: placements,
			alignment,
			offset,
			onReferenceChange: (new_reference) => {},
			onChange: (params) => {
				dx = params.dx;
				dy = params.dy;
			},
			onMount: () => {}
		}}
		use:clickOutside={{
			callback: onclick_outside,
			exclude: [element_trigger ?? '', '']
		}}
		use:onmount={{ open }}
		{...restProps}
	>
		{@render children?.({ dx, dy, open })}
	</div>
{/if}

<style lang="postcss">
	.fui-popover {
		@apply absolute left-0 top-0;
	}
</style>
