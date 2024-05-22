<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { clickOutside } from '@svelte-fui/core/actions/dom';
	import { popover } from '@svelte-fui/core/actions/popover';
	import { classnames } from '@svelte-fui/core/internal';
	import { getSharedContext } from '@svelte-fui/core/internal/context';
	import { type Alignment, type Placement } from '@floating-ui/dom';
	import { type PopoverContext, setPopoverContext } from './context';

	const dispatch = createEventDispatcher();

	const { overlayElement } = getFluentRootContext();

	export let id: string | undefined = undefined;
	export let open = false;
	export let referenceElement: HTMLElement | undefined = undefined;

	const popoverContext = Object.assign(
		setPopoverContext({
			open: writable(open),
			referenceElement: writable(referenceElement)
		}),
		getSharedContext<PopoverContext>('popover', id ?? '')
	);

	export let placements: Placement[] | undefined = undefined;
	export let alignment: Alignment | undefined = undefined;
	export let offset = 8;
	let klass = '';
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

{#if $overlayElement && $reference_element_store && open}
	<div
		class={classnames('fui-popover pointer-events-auto h-min w-min', klass)}
		data-dx={dx}
		data-dy={dy}
		use:popover={{
			reference: referenceElement,
			target: $overlayElement,
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
