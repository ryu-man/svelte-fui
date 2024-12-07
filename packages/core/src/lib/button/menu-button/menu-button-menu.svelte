<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { Menu } from '@svelte-fui/core/menu';

	let { class: klass = '', children } = $props();
</script>

<Menu.Overlay class={classnames('menu-button-menu', klass)}>
	{#snippet children(args)}
		{@render children?.(args)}
	{/snippet}
</Menu.Overlay>
