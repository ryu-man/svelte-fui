<script lang="ts" generics="T extends Component">
	import { type Component } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { nanoid } from 'nanoid';
	import type { TooltipTriggerProps } from './types';
	import { classnames } from '../internal';
	import { getPopoverContext } from '../popover';

	const context_popover = getPopoverContext();
	const element_trigger = $derived(context_popover.state.elements.trigger);

	let {
		class: klass = '',
		id = nanoid(),
		delay = 200,
		as = 'div',
		element = $bindable(undefined),
		children,
		onpointerenter,
		onpointerleave,
		...restProps
	}: HTMLAttributes<HTMLElement> & TooltipTriggerProps<T> = $props();

	const element_middleware = $derived({
		get current() {
			return element;
		},
		set current(val: HTMLElement) {
			element = val;
			context_popover.state.elements.trigger = val;
		}
	});

	$effect(() => {
		if (typeof as === 'string') {
			return;
		}

		if (!element_trigger) {
			return;
		}

		element_trigger.addEventListener('pointerenter', onpointerenter_);
		element_trigger.addEventListener('pointerleave', onpointerleave_);

		return () => {
			element_trigger.removeEventListener('pointerenter', onpointerenter_);
			element_trigger.removeEventListener('pointerleave', onpointerleave_);
		};
	});

	// Ensure showing tooltip only when cursor settles for an amount of time
	let timeout_id: NodeJS.Timeout | undefined = $state(undefined);

	function onpointerenter_(ev: PointerEvent) {
		clearTimeout(timeout_id);

		onpointerenter?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		timeout_id = setTimeout(() => {
			context_popover.methods.open();
		}, delay);
	}

	function onpointerleave_(ev: PointerEvent) {
		clearTimeout(timeout_id);

		onpointerleave?.(ev);
		if (ev.defaultPrevented) {
			return;
		}

		context_popover.methods.close();
	}
</script>

{#if typeof as === 'string'}
	<svelte:element
		this={as}
		bind:this={element_middleware.current}
		class={classnames('fui-toolip-container relative inline-flex', klass)}
		{...restProps}
	>
		{@render children?.()}
	</svelte:element>
{:else}
	{@const Cmp = as}

	<Cmp
		bind:element={element_middleware.current}
		class={classnames('fui-toolip-container relative inline-flex', klass)}
		{...restProps}
	>
		{@render children?.()}
	</Cmp>
{/if}
