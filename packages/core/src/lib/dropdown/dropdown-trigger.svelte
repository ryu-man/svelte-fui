<script lang="ts" generics="T = any">
	import { classnames } from '@svelte-fui/core/internal';
	import { getDropdownContext } from './context-root';
	import type { DropdownTriggerProps } from './types';
	import { Popover } from '../popover';

	const context_dropdown = getDropdownContext<T>();

	let { class: klass = '', as = 'button', children, onclick }: DropdownTriggerProps<T> = $props();

	function onclick_(ev: Event) {
		onclick?.(ev, { context: context_dropdown });
	}
</script>

<Popover.Trigger class={classnames('fui-dropdown-trigger flex', klass)} {as} onclick={onclick_}>
	{@render children?.({ context: context_dropdown })}
</Popover.Trigger>
