<script lang="ts" generics="Shell extends Component">
	import type { Component } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import type { MenuTriggerProps } from './types';
	import { getMenuContext } from './context-root';
	import { Popover } from '../popover';

	const context_menu = getMenuContext();

	let {
		class: klass = '',
		as = 'button',
		shell,
		children,
		onclick,
		...resteProps
	}: MenuTriggerProps<Shell> = $props();
</script>

<Popover.Trigger
	class={classnames('fui-menu-trigger flex', klass)}
	{...resteProps}
	{as}
	{shell}
	{onclick}
>
	{@render children?.({ context: context_menu })}
</Popover.Trigger>
