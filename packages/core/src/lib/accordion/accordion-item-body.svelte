<script lang="ts">
	import { slide } from 'svelte/transition';
	import { classnames } from '../internal';
	import { getAccordionItemContext } from './context';
	import type { AccordionItemBodyProps } from './types';

	const context_accordion_root = getAccordionItemContext();
	const active = $derived(context_accordion_root.derived.active);

	let { class: klass = '', children }: AccordionItemBodyProps = $props();
</script>

{#if active}
	<div
		class={classnames('fui-accordion-item-body m-m my-0', klass)}
		transition:slide={{ duration: 100 }}
	>
		{#if children}
			<!-- content here -->
			{@render children({})}
		{/if}
	</div>
{/if}
