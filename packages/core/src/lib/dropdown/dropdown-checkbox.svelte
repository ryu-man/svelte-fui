<script lang="ts">
	import { getDropdownItemContext } from './context-item';
	import type { DropdownCheckboxProps } from './types';
	import { Icon } from '../icon';
	import { classnames } from '../internal';
	import CheckmarkRegular from '../icons/checkmark-regular.svelte';

	const dropdownItemContext = getDropdownItemContext();

	const isActive = $derived(dropdownItemContext.state.active);

	let { class: klass = '' }: DropdownCheckboxProps = $props();
</script>

<div class={classnames('fui-dropdown-item-checkbox h-5 flex aspect-square', klass)}>
	{#if isActive}
		<Icon class="h-full">
			<CheckmarkRegular />
		</Icon>
	{/if}
</div>
