<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { nanoid } from 'nanoid';
	import { classnames } from '../internal';
	import { getPopoverContext } from '../popover';
	import type { TooltipTriggerProps } from './types';

	const context_popover = getPopoverContext();

	let {
		class: klass = '',
		id = nanoid(),
		delay = 200,
		children,
		onpointerenter,
		onpointerleave,
		...restProps
	}: HTMLAttributes<HTMLElement> & TooltipTriggerProps = $props();

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

<div
	bind:this={context_popover.state.elements.trigger}
	class={classnames('fui-toolip-container relative inline-flex', klass)}
	onpointerenter={onpointerenter_}
	onpointerleave={onpointerleave_}
	{...restProps}
>
	{@render children?.()}
</div>
