<script lang="ts">
	import { Popover } from '../popover';
	import type { TooltipRootProps } from './types';

	let { children }: TooltipRootProps = $props();
</script>

<Popover.Root open={false}>
	{#snippet children({ context })}
		{@render children?.({ context: context })}
	{/snippet}
</Popover.Root>
