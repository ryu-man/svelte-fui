<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';

	import type { ComboboxTriggerProps } from './types';

	import DropdownTrigger from '../dropdown/dropdown-trigger.svelte';
	import { getDropdownContext } from '../dropdown/context-root';

	const context_dropdown = getDropdownContext();

	let { class: klass = '', children, ...restProps }: ComboboxTriggerProps = $props();
</script>

<DropdownTrigger class={classnames('relative w-[250px]', klass)} {...restProps}>
	{@render children?.({ context: context_dropdown })}
</DropdownTrigger>
