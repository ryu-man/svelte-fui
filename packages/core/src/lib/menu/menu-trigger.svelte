<script lang="ts" generics="Shell extends Component">
	import type { Component } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import type { MenuTriggerProps } from './types';
	import { getMenuContext } from './context';
	import { Popover } from '../popover';

	const menuContext = getMenuContext();

	let {
		class: klass = '',
		as = 'button',
		shell = undefined,
		children = undefined,
		...restProps
	}: MenuTriggerProps<Shell> = $props();
</script>

<Popover.Trigger class={classnames('fui-menu-trigger flex', klass)} {as} {shell} {...restProps}>
	{@render children?.({ context: menuContext })}
</Popover.Trigger>
