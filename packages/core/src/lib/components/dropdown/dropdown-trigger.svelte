<script lang="ts" generics="Shell extends Component, Context">
	import type { Component } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import { getDropdownContext } from './context-root';
	import type { DropdownTriggerProps } from './types';
	import DropdownInput from './dropdown-input.svelte';
	import { Menu } from '../menu';

	const dropdownContext = getDropdownContext<Context>();

	let {
		class: klass = '',
		as = 'button',
		shell,
		children,
		onclick,
		...resteProps
	}: DropdownTriggerProps<Shell, Context> = $props();

	function onclick_(ev: Event) {
		onclick?.(ev, { context: dropdownContext });
	}
</script>

<Menu.Trigger
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
</Menu.Trigger>
