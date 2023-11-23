<script lang="ts">
	import { derived } from 'svelte/store';
	import { getTableRowContext } from './Tr';
	import { getTableContext } from './context';
	import { Checkbox } from '../checkbox';
	import { classnames } from '../internal';
	import { Radio } from '../radio';

	const { size$, selectedRows$, allRows$ } = getTableContext();

	const rowContext = getTableRowContext();

	const checked$ = derived([selectedRows$, allRows$], ([rows, all]) => {
		if (rowContext.header) {
			return rows.size === all.size;
		} else {
			return rows.has(rowContext.id);
		}
	});

	// export let checked: boolean | 'mixed' = false;
	export let type: 'checkbox' | 'radio' = 'checkbox';
	export let subtle = false;

	function onChange(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLInputElement;

		if (rowContext.header) {
			if (currentTarget.checked) {
				selectedRows$.set(new Set($allRows$));
			} else {
				selectedRows$.set(new Set());
			}
			return;
		}

		if (currentTarget.checked) {
			selectedRows$.update((rows) => rows.add(rowContext.id));
		} else {
			selectedRows$.update((rows) => {
				rows.delete(rowContext.id);
				return rows;
			});
		}
	}
</script>

<td class={classnames('fui-table-cell-selection', $size$, { subtle })}>
	{#if type === 'checkbox'}
		<Checkbox checked={$checked$} on:change={onChange} />
	{:else}
		<Radio checked={$checked$} />
	{/if}
</td>

<style lang="postcss">
	/* Need to implement focus style */
	.fui-table-cell-selection {
		@apply whitespace-nowrap p-0 text-center;

		--fui-cell-width: 44px;

		width: var(--fui-cell-width);

		&.md {
			@apply h-[44px];
		}
		&.sm {
			@apply h-[34px];
		}
		&.xs {
			@apply h-[24px];
		}
	}

	.fui-table-cell-selection.truncate {
		@apply overflow-x-hidden;
	}

	.radio-indicator {
		@apply flex grow-[1] items-center justify-center;
	}

	.subtle {
		@apply opacity-0;
	}

	.hidden {
		@apply invisible;
	}
</style>
