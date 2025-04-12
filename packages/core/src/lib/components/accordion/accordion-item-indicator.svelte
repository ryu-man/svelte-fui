<script lang="ts">
	import { Icon } from '@svelte-fui/core';
	import ChevronDownRegularIcon from '@svelte-fui/core/components/icons/chevron-down-regular.svelte';
	import { getAccordionItemContext } from './context';
	import { animate } from '@svelte-fui/core/actions/animation.svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import type { AccordionItemIndicatorProps } from './types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	const contextAccordionItem = getAccordionItemContext();
	const active = $derived(contextAccordionItem?.state?.active ?? false);

	let {
		element = $bindable(),
		class: klass = '',
		children = undefined,
		ref = undefined
	}: AccordionItemIndicatorProps = $props();
</script>

<div
	bind:this={element}
	use:reference={ref}
	class={classnames('fui-accordion-item-indicator pointer-events-none', klass)}
>
	{#if children}
		<!-- content here -->
		{@render children({ active })}
	{:else}
		<Icon>
			<div
				class="h-full"
				use:animate={() => ({ rotate: 180 * +active, duration: 0.3, ease: 'circ.out' })}
			>
				<ChevronDownRegularIcon />
			</div>
		</Icon>
	{/if}
</div>
