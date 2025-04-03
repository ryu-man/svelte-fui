<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import MenuList from '../menu/menu-list.svelte';
	import type { ComboboxMenuProps } from './types';
	import { getComboboxContext } from './context';

	const context_dropdown = getComboboxContext();

	let { class: klass = '', children, ...restProps }: ComboboxMenuProps = $props();
</script>

<MenuList class={classnames('fui-combobox-menu', klass)} {...restProps}>
	{@render children?.({ context: context_dropdown })}
</MenuList>
