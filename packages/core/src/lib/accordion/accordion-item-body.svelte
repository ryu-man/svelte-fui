<script lang="ts">
	import { slide } from 'svelte/transition';
	import { classnames } from '../internal';
	import { getAccordionItemContext } from './context';
	import type { AccordionItemBodyProps } from './types';
	import { reference } from '../internal/dom.svelte';

	const accordionItemContext = getAccordionItemContext();
	const active = $derived(accordionItemContext?.state?.active ?? false);

	let {
		element = $bindable(),
		class: klass = '',
		children = undefined,
		ref = undefined
	}: AccordionItemBodyProps = $props();
</script>

<div
	bind:this={element}
	use:reference={ref}
	class={classnames('fui-accordion-item-body m-m my-0', !active && 'hidden', klass)}
	transition:slide={{ duration: 100 }}
>
	{#if active}
		{@render children?.({})}
	{/if}
</div>
