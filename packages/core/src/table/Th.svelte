<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { derived } from 'svelte/store';
	import { ArrowUpRegular } from '@svelte-fui/icons';
	import { getTableContext } from './context';
	import type { SortingDirection } from './type';
	import { Icon } from '../icon';
	import { classnames } from '../internal';

	const { sortable$, sorting$ } = getTableContext();

	export let key: (d: any) => any | undefined = undefined;
	export let direction: SortingDirection = 'ascending';
	let klass = '';
	export { klass as class };

	const activeSort$ = derived(sorting$, (val) => val && val[0] === key);

	const rotate$ = spring(0);

	if (key) {
		sorting$.update((val) => {
			if (!val) {
				return [key, direction];
			}

			return val;
		});
	}

	$: sortable = $sortable$ && key;

	onMount(() =>
		sorting$.subscribe((val) => {
			if (val) {
				const [_key] = val;
				if (key === _key) {
					if (direction === 'ascending') {
						rotate$.set(0);
					} else {
						rotate$.set(1);
					}
				}
			}
		})
	);

	function onClickHandler() {
		if (!$sortable$ || !key) return;

		// rotate$.update((val) => (d = Math.abs(val - 1)));

		if (key) {
			// If the current Th is active sorting then we would switch the direct
			// Else we would activate the sorting
			if ($activeSort$) {
				if (direction === 'ascending') {
					direction = 'descending';
				} else {
					direction = 'ascending';
				}
			}

			// Update sorting infos
			sorting$.set([key, direction]);
		}
	}
</script>

<th class={classnames('fui-table-header-cell', klass)} class:sortable on:click={onClickHandler}>
	<div>
		<slot />

		{#if sortable && $activeSort$}
			<div class="fui-table-header-cell-sorting-icon" style:transform="rotate({$rotate$ * 180}deg)">
				<Icon class="sort-icon" src={ArrowUpRegular} />
			</div>
		{/if}
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
