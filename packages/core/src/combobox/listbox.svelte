<script lang="ts">
	import { autoPlacement, computePosition } from '@floating-ui/dom';
	import { tick } from 'svelte';
	import { classnames } from '../internal';

	export let top = '0px';
	export let left = '0px';
	export let translateX = '0px';
	export let translateY = '0px';
	export let width = '248px';
	export let collapsed = false;
	export let reference: HTMLElement;

	export let id: string | undefined = undefined;
	let klass = '';
	export { klass as class };

	function computePositionAction(node: HTMLDivElement, { collapsed = false } = {}) {
		if (!collapsed) {
			tick().then(calculate);
		}

		return {
			update({ collapsed = false }) {
				if (!collapsed) {
					tick().then(calculate);
				}
			},
			destroy() {}
		};

		function calculate() {
			return computePosition(reference, node, {
				middleware: [
					autoPlacement({
						alignment: 'start',
						allowedPlacements: ['bottom-start', 'top-start']
					})
				]
			}).then(({ x, y, placement }) => {
				const k = placement.includes('top') ? -1 : 1;
				node.style.transform = `translate(${x}px, ${y}px) translateY(${k * 2}px)`;
			});
		}
	}

	function clickOutsideAction(node: HTMLDivElement, eventHandler = (e: Event) => {}) {
		const clickHandler = (e: Event) => {
			if (!reference.contains(e.target) && !node.contains(e.target)) {
				eventHandler(e);
			}
		};
		document.addEventListener('click', clickHandler);

		return {
			destroy() {
				document.removeEventListener('click', clickHandler);
			}
		};
	}

	function clickOutsideHandler(e: Event) {
		collapsed = true;
	}
</script>

<div
	use:clickOutsideAction={clickOutsideHandler}
	{id}
	role="listbox"
	class={classnames('fui-listbox', { collapsed }, klass)}
	style:width
	use:computePositionAction={{ collapsed }}
>
	<div class="flex flex-col">
		<slot />
	</div>
</div>

<style lang="postcss">
	.fui-listbox {
		@apply shadow-16 bg-neutral-background-1 absolute box-border flex flex-col overflow-y-auto rounded-md;

		top: 0px;
		left: 0px;

		min-width: 160px;
		max-height: 80vh;
		outline: 1px solid var(--fui-colorTransparentStroke);
		padding: theme(spacing.xs);
		margin: 0;
		row-gap: theme(spacing.xxs);

		&.collapsed {
			display: none;
		}
	}
</style>
