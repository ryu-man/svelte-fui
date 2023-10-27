<script lang="ts">
	import { spring } from 'svelte/motion';
	import { ArrowUpRegular } from '@svelte-fui/icons';
	import { getTableContext } from './context';
	import { Icon } from '../icon';
	import { classnames } from '../internal';

	const { sortable$ } = getTableContext();

	export let key: string | ((d: any) => any) | undefined = undefined;
	export let direction: 'ascending' | 'descending' = 'ascending';
	let klass = '';
	export { klass as class };

	let d = direction === 'ascending' ? 0 : 1;
	const rotate$ = spring(d);

	$: handler = sortHandler(direction);
	$: sortable = $sortable$ && key;

	function sortHandler(direction: 'ascending' | 'descending') {
		return () => {};
	}

	function onClickHandler() {
		if (!$sortable$ || !key) return;

		rotate$.update((val) => (d = Math.abs(val - 1)));
		direction = d === 0 ? 'ascending' : 'descending';
	}
</script>

<th class={classnames('fui-table-header-cell', klass)} class:sortable on:click={onClickHandler}>
	<div>
		<slot sortHandler={handler} />

		{#if sortable}
			<div style:transform="rotate({$rotate$ * 180}deg)">
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
