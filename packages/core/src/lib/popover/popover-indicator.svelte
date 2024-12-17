<script lang="ts">
	import { getPopoverContext } from './context';
	import type { PopoverIndicatorProps } from './types';
	import { classnames } from '../internal';
	import { Icon } from '../icon';
	import ChevronDownRegular from '../icons/chevron-down-regular.svelte';
	import { animate } from '../actions/animation';

	const context = getPopoverContext();

	const open = $derived(context?.derived.data.open ?? false);

	let { class: klass = '', children }: PopoverIndicatorProps = $props();
</script>

<div
	class={classnames('popover-indicator h-full', klass)}
	data-owner-id={context.id}
	bind:this={context.state.elements.indicator}
>
	{#if children}
		{@render children({ open })}
	{:else}
		<div
			class="h-full aspect-square"
			use:animate={{ rotate: 180 * +open, duration: 0.4, ease: 'circ.out' }}
		>
			<Icon class="h-full aspect-square">
				<ChevronDownRegular />
			</Icon>
		</div>
	{/if}
</div>
