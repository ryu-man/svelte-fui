<script lang="ts" generics="Shell extends Component">
	import { type Component } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { nanoid } from 'nanoid';
	import type { TooltipTriggerProps } from './types';
	import { classnames } from '@svelte-fui/core/internal';
	import { getPopoverContext } from '../popover';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	const contextPopover = getPopoverContext();
	const elementTrigger = $derived(contextPopover?.state?.dom?.trigger);

	let {
		element = $bindable(undefined),
		class: klass = '',
		id = nanoid(),
		delay = 200,
		as = 'div',
		shell = undefined,
		children,
		ref = undefined,
		onpointerenter,
		onpointerleave,
		...restProps
	}: HTMLAttributes<HTMLElement> & TooltipTriggerProps<Shell> = $props();

	const getElement = () => element;
	const setElement = (el) => {
		element = el;
		if (contextPopover) {
			contextPopover.state.dom.trigger = el;
		}
	};

	$effect(() => {
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
			contextPopover?.methods?.open();
		}, delay);
	}

	function onpointerleave_(ev: PointerEvent) {
		clearTimeout(timeoutId);

		onpointerleave?.(ev);
		if (ev.defaultPrevented) {
			return;
		}

		contextPopover?.methods?.close();
	}
</script>

{#if !shell}
	<svelte:element
		this={as ?? 'div'}
		use:reference={(el) => {
			setElement(el);

			return ref?.(el);
		}}
		class={classnames('fui-toolip-container relative inline-flex', klass)}
		{...restProps}
	>
		{@render children?.()}
	</svelte:element>
{:else}
	{@const Shell = shell}

	<Shell
		class={classnames('fui-toolip-container relative inline-flex', klass)}
		{as}
		ref={(el) => {
			setElement(el);

			return ref?.(el);
		}}
		{...restProps}
	>
		{@render children?.()}
	</Shell>
{/if}
