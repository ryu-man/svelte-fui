<script lang="ts">
	import { Popover } from '@svelte-fui/core/popover';
	import { getMenuContext } from './context';
	import type { MenuOverlayProps } from './types';
	import { classnames } from '../internal';

	const menuContext = getMenuContext();

	if (!menuContext) {
		throw new Error('<dropdown-menu> dropdown context was not found!');
	}

	let {
		element = $bindable(),
		class: klass = '',
		children,
		...restProps
	}: MenuOverlayProps = $props();
</script>

<Popover.Overlay
	class={classnames('fui-menu shadow-16 bg-neutral-background-1 w-fit rounded-lg', klass)}
	{...restProps}
>
	{#snippet children({ dx, dy })}
		{@render children?.({ context: menuContext })}
	{/snippet}
</Popover.Overlay>

<style lang="postcss">
</style>
