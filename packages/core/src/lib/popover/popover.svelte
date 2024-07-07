<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { clickOutside } from '@svelte-fui/core/actions/dom';
	import { popover } from '@svelte-fui/core/actions/popover';
	import { classnames } from '@svelte-fui/core/internal';
	import { getSharedContext } from '@svelte-fui/core/internal/context';
	import { type PopoverContext, setPopoverContext } from './context';
	import type { PopoverProps } from './types';

	type $$Props = PopoverProps;

	const dispatch = createEventDispatcher();

	const { layouts } = getFluentRootContext();

	export let id: $$Props['id'] = undefined;
	export let open: $$Props['open'] = false;
	export let referenceElement: $$Props['referenceElement'] = undefined;

	const popoverContext = Object.assign(
		setPopoverContext({
			open: writable(open),
			referenceElement: writable(referenceElement)
		}),
		getSharedContext<PopoverContext>('popover', id ?? '')
	);

	export let placements: $$Props['placements'] = undefined;
	export let alignment: $$Props['alignment'] = undefined;
	export let offset: $$Props['offset'] = 8;
	let klass: $$Props['class'] = '';
	export { klass as class };

	const open_store = popoverContext.open;
	$: open_store.set(open);

	const reference_element_store = popoverContext.referenceElement;
	$: reference_element_store.set(referenceElement);

	let dx = 0;
	let dy = 0;

	let mounted = false;

	$: if (!open) {
		mounted = false;
	}

	function onclick_outside(ev: MouseEvent) {
		const prevented = dispatch('click-outside', ev);
		if (!prevented) {
			open = false;
		}
	}
</script>

{#if $layouts['overlay'].element && $reference_element_store && open}
	<div
		class={classnames('fui-popover pointer-events-auto h-min w-min', klass)}
		data-dx={dx}
		data-dy={dy}
		use:popover={{
			reference: referenceElement,
			target: $layouts['overlay'].element,
			allowedPlacements: placements,
			alignment,
			offset,
			onReferenceChange: (new_reference) => {
				referenceElement = new_reference;
			},
			onChange: (params) => {
				dx = params.dx;
				dy = params.dy;
			},
			onMount: () => {
				mounted = true;
			}
		}}
		use:clickOutside={{
			callback: onclick_outside,
			exclude: [referenceElement ?? '', '']
		}}
	>
		{#if mounted}
			<slot {dx} {dy} />
		{/if}
	</div>
{/if}

<style lang="postcss">
	.fui-popover {
		@apply absolute left-0 top-0;
	}
</style>
