<script lang="ts">
	import { circOut } from 'svelte/easing';
	import type { Alignment, Placement } from '@floating-ui/dom';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { animate } from '@svelte-fui/core/actions/animation';
	import { classnames } from '@svelte-fui/core/internal';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { Popover } from '@svelte-fui/core/popover';
	import { popover } from '@svelte-fui/core/actions/popover';
	import { clickOutside } from '@svelte-fui/core/actions/dom';
	import { getDropdownContext } from './context';

	const root_context = getFluentRootContext();

	if (!root_context.overlayElement) {
		console.error(
			'Overlay element is necessary for the Dropdown menu to work properly, make sure to use Dropdown component within a CAS App'
		);
	}

	const { layouts } = root_context;

	export let placements: Placement[] = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
	export let float = false;
	export let max = 0;
	export let offset = 6;
	export let alignment: Alignment | undefined = undefined;

	let klass = '';
	export { klass as class };

	const dropdown_context = getDropdownContext();

	if (!dropdown_context) {
		throw new Error('<dropdown-menu> dropdown context was not found!');
	}

	const open_store = dropdown_context.open;
	const reference_element_store = dropdown_context.triggerElement;
	const fid = dropdown_context.id;
	// const mounted = mount();

	let client_width = 0;

	let dx = 0;
	let dy = 0;

	$: open = $open_store;
	$: referenceElement = $reference_element_store;

	type SetWidthActionParams = {
		referenceElement: HTMLElement;
		float: boolean;
	};

	function set_width_action(
		node: HTMLDivElement,
		{ referenceElement, float = false }: SetWidthActionParams
	) {
		const observer = new ResizeObserver(() => {
			if (!float) {
				node.style.maxWidth = `${referenceElement.clientWidth}px`;
				node.style.width = `${referenceElement.clientWidth}px`;
			} else {
				node.style.maxWidth = 'auto';
				node.style.width = 'min-content';
			}
		});

		observer.observe(referenceElement, {});

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	function onclick_outside(ev: CustomEvent) {
		ev.preventDefault();

		const inner_event = ev.detail as Event;
		const target = inner_event.target as HTMLElement;

		if ($reference_element_store.contains(target)) {
			return;
		}

		// if ($menu_trigger_element_parent.contains(target)) {
		// 	return;
		// }

		close();
	}
</script>

<!-- <Menu.Root discover={false}>
	<div
		class={classnames('flex flex-col rounded-md', max && 'overflow')}
		use:set_width_action={{ referenceElement, float }}
		use:animate={{
			opacity: +open,
			x: `${(1 - +open) * dx * 12}px`,
			y: `${(1 - +open) * dy * 12}px`,
			duration: DURATION.FAST / 1000,
			display: open ? 'flex' : 'none',
			ease: circOut
		}}
	>
		<slot />
	</div>
</Menu.Root> -->

{#if $layouts['overlay'].element && $reference_element_store}
	<div
		class={classnames('fui-popover pointer-events-auto h-min w-min', max && 'overflow', klass)}
		style:max-height={!max ? 'auto' : `${40 * max}px`}
		data-dx={dx}
		data-dy={dy}
		data-offset={offset}
		data-id={$fid}
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
				// mounted = true;
			}
		}}
		use:clickOutside={{
			callback: onclick_outside,
			exclude: [referenceElement ?? '', '']
		}}
	>
		<div
			class={classnames(
				'fui-menu shadow-16 bg-neutral-background-1 w-fit rounded-lg flex flex-col'
			)}
			bind:clientWidth={client_width}
			use:animate={{
				opacity: +open,
				x: `${(1 - +open) * dx * 12}px`,
				y: `${(1 - +open) * dy * 12}px`,
				duration: DURATION.FAST / 1000,
				display: open ? 'flex' : 'none',
				ease: circOut
			}}
			use:animate={{
				minWidth: $reference_element_store.clientWidth + 'px',
				duration: DURATION.QUICK
			}}
		>
			<slot />
		</div>
	</div>
{/if}

<style lang="postcss">
	.fui-dropdown-menu {
		@apply pointer-events-auto absolute left-0 top-0;

		& > div {
			overflow: visible;
			&.overflow {
				overflow-y: scroll;
				overflow-y: overlay;
			}
		}
	}
</style>
