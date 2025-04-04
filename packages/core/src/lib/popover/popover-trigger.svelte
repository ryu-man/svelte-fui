<script lang="ts" generics="T extends Component">
	import type { Component } from 'svelte';
	import { classnames } from '../internal';
	import { getPopoverContext } from './context';
	import type { PopoverTriggerProps } from './types';

	const popoverContext = getPopoverContext();

	if (!popoverContext) {
		throw new Error('Popover context was not found');
	}

	const open = $derived(popoverContext?.state.open ?? false);
	const controller = $derived(popoverContext?.methods);

	let {
		class: klass = '',
		as = 'button',
		shell = undefined,
		element = $bindable(),
		onclick = undefined,
		children: internalChildren = undefined,
		...resteProps
	}: PopoverTriggerProps<T> = $props();

	const getElement = () => popoverContext.state.dom.trigger;
	const setElement = (el) => popoverContext.update((state) => (state.dom.trigger = element = el));

	function onclick_(ev: Event) {
		onclick?.(ev, { context: popoverContext });

		if (ev.defaultPrevented) {
			return;
		}

		controller.toggle();
	}
</script>

{#if !shell}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={as}
		bind:this={getElement, setElement}
		class={classnames('popover-trigger', klass)}
		onclick={onclick_}
		{...resteProps}
		data-open={open}
		data-owner-id={popoverContext.id}
	>
		{@render internalChildren?.({ context: popoverContext })}
	</svelte:element>
{:else}
	{@const Shell = shell}

	<Shell
		bind:element={getElement, setElement}
		class={classnames('popover-trigger', klass)}
		{...resteProps}
		{as}
		onclick={onclick_}
		data-open={open}
		data-owner-id={popoverContext.id}
	>
		{#snippet children(args)}
			{@render internalChildren?.({ ...(args ?? {}), context: popoverContext })}
		{/snippet}
	</Shell>
{/if}
