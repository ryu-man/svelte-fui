<script lang="ts" generics="Shell extends Component">
	import type { Component } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import type { MenuTriggerProps } from './types';
	import { getMenuContext } from './context';
	import { Popover } from '../popover';

	const menuContext = getMenuContext();

	let {
		element = $bindable(),
		class: klass = '',
		as = 'button',
		shell = undefined,
		children: internalChildren = undefined,
		...restProps
	}: MenuTriggerProps<Shell> = $props();
</script>

<Popover.Trigger
	bind:element
	class={classnames('fui-menu-trigger flex', klass)}
	{as}
	{shell}
	{...restProps}
>
	{#snippet children(args)}
		{@render internalChildren?.({ ...(args ?? {}), context: menuContext })}
	{/snippet}
</Popover.Trigger>
