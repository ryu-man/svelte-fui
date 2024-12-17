<script lang="ts">
	import { Menu } from '@svelte-fui/core/menu';

	let { open = false, children } = $props();
</script>

<Menu.Root bind:open>
	{#snippet children(args)}
		{@render children?.(args)}
	{/snippet}
</Menu.Root>
