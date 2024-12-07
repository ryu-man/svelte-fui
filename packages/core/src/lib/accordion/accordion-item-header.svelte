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

	const context_accordion_item = getAccordionItemContext();

	const active = $derived(context_accordion_item.derived.active);

	const disabled = $derived(context_accordion_item.derived.disabled);

	const context_accordion_root = context_accordion_item.parent();

	const multiple = $derived(context_accordion_root.derived.data.multiple);
	const collapsible = $derived(context_accordion_root.derived.data.collapsible);

	function onclick_(ev: Event) {
		if (disabled) return;

		onclick?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		if (multiple) {
			context_accordion_item.methods.toggle();
		} else {
			const state = active;

			context_accordion_root.methods.close(context_accordion_root.derived.data.values);

			if (collapsible) {
				if (state) {
					context_accordion_item.methods.close();
				} else {
					context_accordion_item.methods.open();
				}
			} else {
				context_accordion_item.methods.open();
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
				item: context_accordion_item,
				root: context_accordion_root
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
