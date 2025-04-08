<script lang="ts" generics="Shell extends Component">
	import { type Component } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { nanoid } from 'nanoid';
	import type { TooltipTriggerProps } from './types';
	import { classnames } from '../internal';
	import { getPopoverContext } from '../popover';

	const contextPopover = getPopoverContext();
	const elementTrigger = $derived(contextPopover.state.elements.trigger);

	let {
		class: klass = '',
		id = nanoid(),
		delay = 200,
		as = 'div',
		shell = undefined,
		element = $bindable(undefined),
		children,
		onpointerenter,
		onpointerleave,
		...restProps
	}: HTMLAttributes<HTMLElement> & TooltipTriggerProps<Shell> = $props();

	const elementMiddleware = $derived({
		get current() {
			return element;
		},
		set current(val: HTMLElement|undefined) {
			element = val;
			contextPopover.state.elements.trigger = val;
		}
	});

	$effect(() => {
		if (typeof as === 'string') {
			return;
		}

		if (!elementTrigger) {
			return;
		}

		elementTrigger.addEventListener('pointerenter', onpointerenter_);
		elementTrigger.addEventListener('pointerleave', onpointerleave_);

		return () => {
			elementTrigger.removeEventListener('pointerenter', onpointerenter_);
			elementTrigger.removeEventListener('pointerleave', onpointerleave_);
		};
	});

	// Ensure showing tooltip only when cursor settles for an amount of time
	let timeoutId: NodeJS.Timeout | undefined = $state(undefined);

	function onpointerenter_(ev: PointerEvent) {
		clearTimeout(timeoutId);

		onpointerenter?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		timeoutId = setTimeout(() => {
			contextPopover.methods.open();
		}, delay);
	}

	function onpointerleave_(ev: PointerEvent) {
		clearTimeout(timeoutId);

		onpointerleave?.(ev);
		if (ev.defaultPrevented) {
			return;
		}

		contextPopover.methods.close();
	}
</script>

{#if !shell}
	<svelte:element
		this={as}
		bind:this={elementMiddleware.current}
		class={classnames('fui-toolip-container relative inline-flex', klass)}
		{...restProps}
	>
		{@render children?.()}
	</svelte:element>
{:else}
	{@const Shell = shell}

	<Shell
		bind:element={elementMiddleware.current}
		class={classnames('fui-toolip-container relative inline-flex', klass)}
		{as}
		{...restProps}
	>
		{@render children?.()}
	</Shell>
{/if}
