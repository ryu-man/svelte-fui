<script lang="ts" generics="T">
	import { getAccordionItemContext } from './context';
	import type { AccordionItemHeaderProps } from './types';
	import { classnames } from '../internal';

	let {
		class: klass = '',
		as = 'button',
		element = $bindable(undefined),
		children = undefined,
		ref = undefined,
		onclick = undefined
	}: AccordionItemHeaderProps<T> = $props();

	const accordionItemContext = getAccordionItemContext();

	const active = $derived(accordionItemContext?.state?.active ?? false);
	const disabled = $derived(accordionItemContext?.state?.disabled ?? false);

	const contextAccordionRoot = accordionItemContext.rootContext();

	const multiple = $derived(contextAccordionRoot?.state?.multiple ?? false);
	const collapsible = $derived(contextAccordionRoot?.state?.collapsible ?? false);

	$effect(() => ref?.(element!));

	function onclick_(ev: Event) {
		if (disabled) return;

		onclick?.(ev, { context: accordionItemContext });

		if (ev.defaultPrevented) {
			return;
		}

		if (multiple) {
			accordionItemContext.methods.toggle();
		} else {
			const state = active;

			contextAccordionRoot.methods.close(contextAccordionRoot.state.values);

			if (collapsible) {
				if (state) {
					accordionItemContext.methods.close();
				} else {
					accordionItemContext.methods.open();
				}
			} else {
				accordionItemContext.methods.open();
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
			context: accordionItemContext
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
