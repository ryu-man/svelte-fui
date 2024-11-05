<script lang="ts" generics="T = any">
	import { classnames } from '@svelte-fui/core/internal';
	import type { MenuTriggerProps } from './types';
	import { Popover } from '../popover';
	import { getMenuContext } from './context-root';

	const context_menu = getMenuContext();

	let { class: klass = '', as = 'button', children, onclick }: MenuTriggerProps = $props();
</script>

<Popover.Trigger class={classnames('fui-menu-trigger flex', klass)} {as} {onclick}>
	{@render children?.({ context: context_menu })}
</Popover.Trigger>
