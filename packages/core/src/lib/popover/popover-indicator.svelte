<script lang="ts">
	import { getPopoverContext } from './context';
	import type { PopoverIndicatorProps } from './types';
	import { classnames } from '../internal';
	import { Icon } from '../icon';
	import ChevronDownRegular from '../icons/chevron-down-regular.svelte';
	import { animate } from '../actions/animation';
	import { reference } from '../internal/dom.svelte';

	const context = getPopoverContext();

	const open = $derived(context?.state.open ?? false);

	let {
		class: klass = '',
		children = undefined,
		ref = undefined
	}: PopoverIndicatorProps = $props();
</script>

<div
	bind:this={context.state.dom.indicator}
	use:reference={ref}
	class={classnames('popover-indicator h-full', klass)}
	data-owner-id={context.id}
>
	{#if children}
		{@render children({ open })}
	{:else}
		<div
			class="h-full aspect-square flex items-center justify-center"
			use:animate={{ rotate: 180 * +open, duration: 0.4, ease: 'circ.out' }}
		>
			<Icon class="h-full aspect-square">
				<ChevronDownRegular />
			</Icon>
		</div>
	{/if}
</div>
