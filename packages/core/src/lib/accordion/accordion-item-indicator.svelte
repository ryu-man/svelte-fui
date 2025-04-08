<script lang="ts">
	import { Icon } from '@svelte-fui/core';
	import ChevronDownRegularIcon from '@svelte-fui/core/icons/chevron-down-regular.svelte';
	import { getAccordionItemContext } from './context';
	import { animate } from '../actions/animation';
	import { classnames } from '../internal';
	import type { AccordionItemIndicatorProps } from './types';

	const contextAccordionItem = getAccordionItemContext();
	const active = $derived(contextAccordionItem.derived.active);

	let {
		class: klass = '',
		element = $bindable(undefined),
		children
	}: AccordionItemIndicatorProps = $props();
</script>

<div
	bind:this={element}
	class={classnames('fui-accordion-item-indicator pointer-events-none', klass)}
>
	{#if children}
		<!-- content here -->
		{@render children({ active })}
	{:else}
		<Icon>
			<div class="h-full" use:animate={{ rotate: 180 * +active, duration: 0.3, ease: 'circ.out' }}>
				<ChevronDownRegularIcon />
			</div>
		</Icon>
	{/if}
</div>
