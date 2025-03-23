<script lang="ts" generics="T extends Component">
	import type { Component } from 'svelte';
	import { classnames } from '../internal';
	import { getPopoverContext } from './context';
	import type { PopoverTriggerProps } from './types';

	const popoverContext = getPopoverContext();

	if (!popoverContext) {
		throw new Error('Popover context was not found');
	}

	const open = $derived(popoverContext?.state.open);
	const controller = popoverContext?.methods;

	let {
		class: klass = '',
		as = 'button',
		shell = undefined,
		element = $bindable(),
		onclick,
		children = undefined,
		...resteProps
	}: PopoverTriggerProps<T> = $props();

	$effect(() => {
		element = popoverContext.state.dom.trigger;
	});

	function onclick_(ev: Event) {
		onclick?.(ev, { context: popoverContext });

		if (!ev.defaultPrevented) {
			controller.toggle();
		}
	}
</script>

{#if !shell}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={as}
		bind:this={() => popoverContext.state.dom.trigger,
		(v) => popoverContext.update((state) => (state.dom.trigger = v))}
		class={classnames('popover-trigger', klass)}
		onclick={onclick_}
		{...resteProps}
		data-open={open}
		data-owner-id={popoverContext.id}
	>
		{@render children?.({ context: popoverContext })}
	</svelte:element>
{:else}
	{@const Shell = shell}

	<Shell
		bind:this={() => popoverContext.state.dom.trigger,
		(v) => popoverContext.update((state) => (state.dom.trigger = v))}
		class={classnames('popover-trigger', klass)}
		{...resteProps}
		{as}
		onclick={onclick_}
		data-open={open}
		data-owner-id={popoverContext.id}
	>
		{@render children?.({ context: popoverContext })}
	</Shell>
{/if}
