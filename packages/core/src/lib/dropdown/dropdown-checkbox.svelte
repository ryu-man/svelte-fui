<script lang="ts">
	import { getDropdownItemContext } from './context-item';
	import type { DropdownCheckboxProps } from './types';
	import { Icon } from '../icon';
	import { classnames } from '../internal';
	import CheckmarkRegular from '../icons/checkmark-regular.svelte';

	const context_item = getDropdownItemContext();

	const is_active = $derived(context_item.derived.data.active);

	let { class: klass = '' }: DropdownCheckboxProps = $props();
</script>

<div class={classnames('fui-dropdown-item-checkbox h-5 flex aspect-square', klass)}>
	{#if is_active}
		<Icon class="h-full">
			<CheckmarkRegular />
		</Icon>
	{/if}
</div>
