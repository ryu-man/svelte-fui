<script lang="ts">
	import { onDestroy } from 'svelte';
	import { type Writable, writable } from 'svelte/store';
	import { classnames } from '@svelte-fui/core/internal';
	import { getSharedContext, setSharedContext } from '@svelte-fui/core/internal/context';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { Popover } from '@svelte-fui/core/popover';
	import { getMenuContext, setMenuContext } from './context-root';
	import type { MenuOverlayProps, MenuRootProps } from './types';
	import { animate } from '../actions/animation';
	import { getFluentRootContext } from '../app';
	import { getDropdownContext } from '../dropdown/context-root';

	const root_context = getFluentRootContext();
	const context_menu = getMenuContext();

	if (!context_menu) {
		throw new Error('<dropdown-menu> dropdown context was not found!');
	}

	const open = $derived(context_menu.derived.data.open);

	let {
		class: klass = '',
		placements = ['bottom-start', 'bottom-end', 'top-end', 'top-start'],
		alignment = 'start',
		offset = 8,
		children,
		onclickoutside
	}: MenuOverlayProps = $props();
</script>

<Popover.Overlay class="fui-menu-overlay" {placements} {offset} {alignment} {onclickoutside}>
	{#snippet children({ dx, dy })}
		<div
			class={classnames('fui-menu shadow-16 bg-neutral-background-1 w-fit rounded-lg', klass)}
			use:animate={{
				opacity: +open,
				x: dx * (offset ?? 0) * +!open,
				y: dy * (offset ?? 0) * +!open,
				duration: DURATION.FAST / 1000
			}}
		>
			{@render children?.({ context: context_menu })}
		</div>
	{/snippet}
</Popover.Overlay>

<style lang="postcss">
</style>
