<script lang="ts" generics="T extends Component">
	import type { Component } from 'svelte';
	import { classnames } from '../internal';
	import { getPopoverContext } from './context';
	import type { PopoverTriggerProps } from './types';

	const context = getPopoverContext();

	const open = $derived(context?.derived.data.open);
	const controller = context?.methods;

	let {
		class: klass = '',
		as = 'button',
		element = $bindable(),
		clientWidth = $bindable(),
		componentAs = undefined,
		onclick,
		children = undefined
	}: PopoverTriggerProps<T> = $props();

	$effect(() => {
		element = context.state.elements.trigger;
	});

	function onclick_(ev: Event) {
		onclick?.(ev, { context });

		if (!ev.defaultPrevented) {
			controller.toggle();
		}
	}
</script>

{#if typeof as === 'string'}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={as}
		bind:this={context.state.elements.trigger}
		bind:clientWidth
		class={classnames('popover-trigger', klass)}
		onclick={onclick_}
		data-open={open}
		data-owner-id={context.id}
	>
		{@render children?.({ context })}
	</svelte:element>
{:else}
	{@const Component = as}

	<Component
		bind:element={context.state.elements.trigger}
		class={classnames('popover-trigger', klass)}
		as={componentAs}
		onclick={onclick_}
		data-open={open}
		data-owner-id={context.id}
	>
		{@render children?.({ context })}
	</Component>
{/if}
