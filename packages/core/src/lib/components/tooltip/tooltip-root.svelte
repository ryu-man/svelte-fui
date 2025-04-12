<script lang="ts">
	import type { TooltipRootProps } from './types';
	import { Popover } from '../popover';

	let { open = $bindable(false), offset = 4, children, ...restProps }: TooltipRootProps = $props();
</script>

<Popover.Root bind:open {offset} {...restProps}>
	{@render children?.()}
</Popover.Root>
