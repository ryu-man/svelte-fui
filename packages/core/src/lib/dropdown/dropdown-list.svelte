<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { Popover } from '@svelte-fui/core/popover';

	import { getDropdownContext } from './context-root';
	import type { DropdownMenuProps } from './types';

	import { List } from '../list';

	const dropdownContext = getDropdownContext();

	if (!dropdownContext) {
		throw new Error('<dropdown-menu> dropdown context was not found!');
	}

	const open = $derived(dropdownContext?.state.open ?? false);
	const triggerElement = $derived(dropdownContext?.state.dom.trigger);

	let {
		element = $bindable(),
		class: klass = '',
		children,
		onclickoutside,
		...restProps
	}: DropdownMenuProps = $props();

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
	class={classnames(
		'fui-dropdown-menu shadow-16 bg-neutral-background-1 w-fit rounded-lg flex flex-col'
	)}
	shell={List.Root}
	{onclickoutside}
	{...restProps}
>
	{@render children?.({ context: dropdownContext })}
</Popover.Overlay>
