<script lang="ts" generics="Shell extends Component">
	import type { Component } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import type { MenuTriggerProps } from './types';
	import { getMenuContext } from './context';
	import { Popover } from '../popover';

	const context_menu = getMenuContext();

	let {
		class: klass = '',
		as = 'button',
		shell,
		children,
		onclick,
		...restProps
	}: MenuTriggerProps<Shell> = $props();
</script>

<Popover.Trigger
	class={classnames('fui-menu-trigger flex', klass)}
	{as}
	{shell}
	onclick={(ev, {context})=>{
		ev.preventDefault();

		context?.methods.toggle();
	}}
	{...restProps}
>
	{@render children?.({ context: context_menu })}
</Popover.Trigger>
