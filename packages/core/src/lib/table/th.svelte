<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { derived } from 'svelte/store';
	import { Icon } from '@svelte-fui/core/icon';
	import { classnames } from '@svelte-fui/core/internal';
	import ArrowUpRegular from '@svelte-fui/core/icons/arrow-up-regular.svelte';
	import { getTableContext } from './context';
	import type { SortingDirection } from './types';

	const context_table = getTableContext();

	// export let sortBy: ((d: any) => any) | undefined = undefined;
	// export let direction: SortingDirection = 'ascending';
	// let klass = '';
	// export { klass as class };

	let { class: klass = '', direction = 'asc', element = $bindable(undefined), children } = $props();

	// const activeSort$ = derived(sorting$, (val) => val && val[0] === sortBy);

	// const rotate$ = spring(0);

	// if (sortBy) {
	// 	sorting$.update((val) => {
	// 		if (!val) {
	// 			return [sortBy, direction];
	// 		}

	// 		return val;
	// 	});
	// }

	// $: sortable = $sortable$ && sortBy;

	// onMount(() =>
	// 	sorting$.subscribe((val) => {
	// 		if (val) {
	// 			const [_key] = val;
	// 			if (sortBy === _key) {
	// 				if (direction === 'ascending') {
	// 					rotate$.set(0);
	// 				} else {
	// 					rotate$.set(1);
	// 				}
	// 			}
	// 		}
	// 	})
	// );

	function onclick() {
		// if (!$sortable$ || !sortBy) return;
		// rotate$.update((val) => (d = Math.abs(val - 1)));
		// if (sortBy) {
		// If the current Th is active sorting then we would switch the direct
		// Else we would activate the sorting
		// if ($activeSort$) {
		// if (direction === 'ascending') {
		// direction = 'descending';
		// } else {
		// direction = 'ascending';
		// }
		// }
		// Update sorting infos
		// sorting$.set([sortBy, direction]);
		// }
	}
</script>

<th bind:this={element} class={classnames('fui-table-header-cell', klass)} {onclick}>
	<div>
		{@render children?.({ context: context_table })}

		<!-- {#if sortable && $activeSort$}
			<div class="fui-table-header-cell-sorting-icon" style:transform="rotate({$rotate$ * 180}deg)">
				<Icon>
					<ArrowUpRegular />
				</Icon>
			</div>
		{/if} -->
	</div>
</th>

<style lang="postcss">
	.fui-table-header-cell {
		@apply font-regular px-s relative table-cell py-0 align-middle;

		&.sortable {
			@apply cursor-pointer;
			&:hover {
				@apply bg-subtle-background-hover;
			}

			&:active {
				@apply bg-subtle-background-pressed;
			}
		}
	}

	.fui-table-header-cell > div {
		@apply gap-xs relative flex h-full min-h-[32px] w-full flex-1 items-center outline-none;
		flex: 1 1 0px;
	}

	.fui-table-header-cell :global(.sort-icon) {
		@apply pt-xxs flex items-center;
	}
</style>
