<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { Popover } from '@svelte-fui/core/popover';

	import { getMenuContext } from './context';
	import type { MenuListProps } from './types';

	import { List } from '../list';

	const menuContext = getMenuContext();

	if (!menuContext) {
		throw new Error('<MenuList /> menu context was not found!');
	}

	const open = $derived(menuContext?.state.open ?? false);
	const triggerElement = $derived(menuContext?.state.dom.trigger);

	let {
		element = $bindable(),
		class: klass = '',
		children,
		onclickoutside,
		...restProps
	}: MenuListProps = $props();

	// Sync trigger with with dropdown list's min-width;
	// Only start observation when dropdown is open
	$effect(() => {
		if (!open) {
			return;
		}

		if (!triggerElement) {
			return;
		}

		if (!element) {
			return;
		}

		const callback = () => {
			element!.style.minWidth = triggerElement.clientWidth + 'px';
		};

		const observer = new ResizeObserver(callback);

		observer.observe(triggerElement);

		callback();

		return () => {
			observer.disconnect();
		};
	});
</script>

<Popover.Overlay
	bind:element
	class={classnames('fui-menu shadow-16 bg-neutral-background-1 w-fit rounded-lg flex flex-col')}
	shell={List.Root}
	{onclickoutside}
	{...restProps}
>
	{@render children?.({ context: menuContext })}
</Popover.Overlay>
