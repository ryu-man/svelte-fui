<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import DropdownMenu from '../dropdown/dropdown-menu.svelte';
	import { getDropdownContext } from '../dropdown/context-root';
	import type { ComboboxMenuProps } from './types';

	const context_dropdown = getDropdownContext();

	let {
		class: klass = '',
		placements = ['top-end', 'bottom-end'],
		children,
		...restProps
	}: ComboboxMenuProps = $props();

	type SetWidthActionParams = {
		referenceElement: HTMLElement;
		float: boolean;
	};

	function set_width_action(
		node: HTMLDivElement,
		{ referenceElement, float = false }: SetWidthActionParams
	) {
		const observer = new ResizeObserver(() => {
			if (!float) {
				node.style.maxWidth = `${referenceElement.clientWidth}px`;
				node.style.width = `${referenceElement.clientWidth}px`;
			} else {
				node.style.maxWidth = 'auto';
				node.style.width = 'min-content';
			}
		});

		observer.observe(referenceElement, {});

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<DropdownMenu class={classnames('fui-combobox-menu', klass)} {...restProps}>
	{#snippet children({ dx, dy, open })}
		{@render children?.({ context: context_dropdown, dx, dy, open })}
	{/snippet}
</DropdownMenu>
