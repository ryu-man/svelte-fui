<script lang="ts">
	import { circOut } from 'svelte/easing';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { animate } from '@svelte-fui/core/actions/animation';
	import { classnames } from '@svelte-fui/core/internal';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { Popover } from '@svelte-fui/core/popover';

	import { getDropdownContext } from './context-root';
	import type { DropdownMenuProps } from './types';

	const root_context = getFluentRootContext();
	const context_dropdown = getDropdownContext();

	if (!context_dropdown) {
		throw new Error('<dropdown-menu> dropdown context was not found!');
	}

	const open = $derived(context_dropdown.derived.data.open);
	const element_trigger = $derived(context_dropdown.state.elements.trigger);

	const { layouts } = root_context;

	let {
		class: klass = '',
		placements = ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
		offset = 8,
		alignment = undefined,
		children,
		onclickoutside
	}: DropdownMenuProps = $props();

	// export let float = false;
	// export let max = 0;

	let client_width = $state(0);

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
</script>

<Popover.Overlay
	class={classnames('fui-dropdown-menu-overlay')}
	{placements}
	{alignment}
	{offset}
	{onclickoutside}
>
	{#snippet children({ dx, dy })}
		<div
			class={classnames(
				'fui-dropdown-menu shadow-16 bg-neutral-background-1 w-fit rounded-lg flex flex-col',
				klass,
				'pointer-events-auto absolute left-0 top-0'
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
				minWidth: (element_trigger?.clientWidth ?? 0) + 'px',
				duration: DURATION.QUICK
			}}
		>
			{@render children?.({ context: context_dropdown })}
		</div>
	{/snippet}
</Popover.Overlay>

<style lang="postcss">
	.fui-dropdown-menu {
		& > div {
			overflow: visible;
			&.overflow {
				overflow-y: scroll;
				overflow-y: overlay;
			}
		}
	}
</style>
