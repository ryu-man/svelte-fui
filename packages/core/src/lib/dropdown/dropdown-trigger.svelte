<script lang="ts" generics="Shell extends Component, Context">
	import type { Component } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import { getDropdownContext } from './context-root';
	import type { DropdownTriggerProps } from './types';
	import { Popover } from '../popover';
	import DropdownInput from './dropdown-input.svelte';

	const dropdownContext = getDropdownContext<Context>();

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
		onclick?.(ev, { context: dropdownContext });
	}
</script>

<Popover.Trigger
	bind:element
	class={classnames('fui-dropdown-trigger flex', klass)}
	{...resteProps}
	{as}
	{shell}
	onclick={onclick_}
>
	{#if children}
		<!-- content here -->
		{@render children?.({ context: dropdownContext })}
	{:else}
		<DropdownInput {...resteProps} />
	{/if}
</Popover.Trigger>
