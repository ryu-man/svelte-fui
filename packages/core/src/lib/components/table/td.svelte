<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';
	import { getTableContext } from './context';

	const contextTable = getTableContext();

	// export let truncate = false;
	// export let primary = false;
	// let klass = '';
	// export { klass as class };

	let {
		class: klass = '',
		primary = false,
		truncate = false,
		element = $bindable(),
		children = undefined,
		ref = undefined
	} = $props();
</script>

<td
	bind:this={element}
	use:reference={ref}
	class={classnames('fui-table-cell', { truncate, primary })}
>
	<div class={klass}>
		{@render children?.({ context: contextTable })}
	</div>
</td>

<style lang="postcss">
	/* Need to implement focus style */
	.fui-table-cell {
		@apply px-s relative table-cell h-full bg-inherit py-0 align-middle;

		--fui-icon-size: 20px;
	}

	.fui-table-cell.truncate {
		@apply overflow-x-hidden;
	}

	.fui-table-cell > div {
		/* @apply gap-s relative flex h-full min-h-[32px] w-full flex-1 items-center outline-none;
		flex: 1 1 0px; */
	}
</style>
