<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { Menu } from '@svelte-fui/core/menu';

	let { class: klass = '', children } = $props();
</script>

<Menu.Item class={classnames('menu-button-item', klass)}>
	{#snippet children(args)}
		{@render children?.(args)}
	{/snippet}
</Menu.Item>
