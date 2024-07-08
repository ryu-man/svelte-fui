<script lang="ts">
	import { circOut } from 'svelte/easing';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { animate } from '@svelte-fui/core/actions/animation';
	import { classnames } from '@svelte-fui/core/internal';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { Menu } from '@svelte-fui/core/menu';
	import { type Placement } from '@floating-ui/dom';
	import { getComboboxContext } from './context';

	const root_context = getFluentRootContext();
	const overlay_element_store = root_context.overlayElement;

	if (!root_context.overlayElement) {
		console.error('Overlay element is necessary for the Dropdown menu to work properly, make sure to use Dropdown component within a CAS App');
	}

	export let allowedPlacements: Placement[] = ['top-end', 'bottom-end'];
	export let float = false;
	export let max = 0;
	let klass = '';
	export { klass as class };

	const dropdown_context = getComboboxContext();
	const open_store = dropdown_context.open;
	const reference_element_store = dropdown_context.triggerElement;

	let dx = 0;
	let dy = 0;

	$: open = $open_store;
	$: referenceElement = $reference_element_store;

	type SetWidthActionParams = {
		referenceElement: HTMLElement;
		float: boolean;
	};

	function set_width_action(node: HTMLDivElement, { referenceElement, float = false }: SetWidthActionParams) {
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
</script>

<Menu.Root discover={false}>
	<div
		class={classnames('flex flex-col rounded-md', max && 'overflow')}
		style:max-height={!max ? 'auto' : `${40 * max}px`}
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
</Menu.Root>
