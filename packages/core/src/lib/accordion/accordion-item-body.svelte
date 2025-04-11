<script lang="ts">
	import { slide } from 'svelte/transition';
	import { classnames } from '../internal';
	import { getAccordionItemContext } from './context';
	import type { AccordionItemBodyProps } from './types';

	const accordionItemContext = getAccordionItemContext();
	const active = $derived(accordionItemContext?.state?.active ?? false);

	let {
		element = $bindable(),
		class: klass = '',
		children = undefined,
		ref = undefined
	}: AccordionItemBodyProps = $props();

	$effect(() => ref?.(element!));
</script>

<div
	bind:this={element}
	class={classnames('fui-accordion-item-body m-m my-0', !active && 'hidden', klass)}
	transition:slide={{ duration: 100 }}
>
	{#if active}
		{@render children?.({})}
	{/if}
</div>
