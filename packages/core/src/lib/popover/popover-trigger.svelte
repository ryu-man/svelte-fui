<script lang="ts">
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
		onclick,
		children = undefined
	}: PopoverTriggerProps = $props();

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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={as}
	class={classnames('popover-trigger', klass)}
	bind:this={context.state.elements.trigger}
	bind:clientWidth
	onclick={onclick_}
	data-open={open}
	data-owner-id={context.id}
>
	{@render children?.({ context })}
</svelte:element>
