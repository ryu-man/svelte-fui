<script lang="ts" generics="T">
	import { getAccordionItemContext } from './context';
	import type { AccordionItemHeaderProps } from './types';
	import { classnames } from '../internal';

	let {
		class: klass = '',
		as = 'button',
		element = $bindable(undefined),
		children,
		onclick
	}: AccordionItemHeaderProps<T> = $props();

	const contextAccordionItem = getAccordionItemContext();

	const active = $derived(contextAccordionItem.derived.active);

	const disabled = $derived(contextAccordionItem.derived.disabled);

	const contextAccordionRoot = contextAccordionItem.parent();

	const multiple = $derived(contextAccordionRoot.derived.data.multiple);
	const collapsible = $derived(contextAccordionRoot.derived.data.collapsible);

	function onclick_(ev: Event) {
		if (disabled) return;

		onclick?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		if (multiple) {
			contextAccordionItem.methods.toggle();
		} else {
			const state = active;

			contextAccordionRoot.methods.close(contextAccordionRoot.derived.data.values);

			if (collapsible) {
				if (state) {
					contextAccordionItem.methods.close();
				} else {
					contextAccordionItem.methods.open();
				}
			} else {
				contextAccordionItem.methods.open();
			}
		}
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={as}
	bind:this={element}
	class={classnames(
		'fui-accordion-header pr-m pl-mNudge body-1 relative box-border flex items-center w-full cursor-pointer',
		{ disabled },
		klass
	)}
	aria-expanded={active}
	type="button"
	onclick={onclick_}
>
	{#if children}
		{@render children({
			context: {
				item: contextAccordionItem,
				root: contextAccordionRoot
			}
		})}
	{/if}
</svelte:element>

<style lang="postcss">
	.fui-accordion-header {
		@apply text-neutral-foreground-1 bg-transparent-background m-0 rounded-md;

		&.disabled {
			@apply text-neutral-foreground-disabled;
			background-image: none;
		}
	}
</style>
