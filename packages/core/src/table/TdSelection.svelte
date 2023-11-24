<script lang="ts">
	import { type Readable, derived } from 'svelte/store';
	import { getTableRowContext } from './Tr';
	import { getTableContext } from './context';
	import type { RowStore } from './store';
	import { Checkbox } from '../checkbox';
	import { classnames } from '../internal';
	import { Radio } from '../radio';

	const { size$, allRows$, selectedKeys$ } = getTableContext();
	const rowContext = getTableRowContext();

	const row$ = $allRows$.find((d) => d.id === rowContext.id) as RowStore;

	let checked$: Readable<boolean>;

	if (rowContext.header) {
		checked$ = derived([allRows$, selectedKeys$], ([rows, selected]) => {
			return selected.length > 0 && rows.length === selected.length;
		});
	} else {
		checked$ = row$.selected$;
	}

	// export let checked: boolean | 'mixed' = false;
	export let type: 'checkbox' | 'radio' = 'checkbox';
	export let subtle = false;

	function onChange(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLInputElement;

		if (rowContext.header) {
			if (currentTarget.checked) {
				$allRows$.forEach((d) => d.selected$.set(true));
			} else {
				$allRows$.forEach((d) => d.selected$.set(false));
			}
			return;
		}

		if (row$) {
			row$.selected$.set(currentTarget.checked);
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
