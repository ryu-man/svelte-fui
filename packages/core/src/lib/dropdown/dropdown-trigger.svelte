<script lang="ts" generics="Shell extends Component, Context">
	import type { Component } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import { getDropdownContext } from './context-root';
	import type { DropdownTriggerProps } from './types';
	import { Popover } from '../popover';

	const context_dropdown = getDropdownContext<Context>();

	let {
		class: klass = '',
		as = 'button',
		shell,
		element = $bindable(),
		children,
		onclick,
		...resteProps
	}: DropdownTriggerProps<Shell, Context> = $props();

	function onclick_(ev: Event) {
		onclick?.(ev, { context: context_dropdown });
	}
</script>

<Popover.Trigger
	bind:element
	class={classnames('fui-dropdown-trigger flex', klass)}
	{...resteProps}
	{as}
	shell={shell}
	onclick={onclick_}
>
	{@render children?.({ context: context_dropdown })}
</Popover.Trigger>
