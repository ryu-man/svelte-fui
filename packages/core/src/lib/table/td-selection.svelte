<script lang="ts">
	import { type Readable, derived } from 'svelte/store';
	import { getTableRowContext } from './tr';
	import { getTableContext } from './context';
	import type { RowStore } from './store';
	import { Checkbox } from '../checkbox';
	import { classnames } from '../internal';
	import { Radio } from '../radio';

	const context_table = getTableContext();
	const context_row = getTableRowContext();

	// const row$ = $allRows$.find((d) => d.id === context_row.id) as RowStore;

	// let checked$: Readable<boolean>;

	// if (context_row.header) {
	// 	checked$ = derived([allRows$, selectedKeys$], ([rows, selected]) => {
	// 		return selected.length > 0 && rows.length === selected.length;
	// 	});
	// } else {
	// 	checked$ = row$.selected$;
	// }

	const element = context_row.header ? 'th' : 'td';

	// export let checked: boolean | 'mixed' = false;
	// export let type: 'checkbox' | 'radio' = 'checkbox';
	// export let subtle = false;
	// export let hidden = context_row.header;

	let {
		class: klass = '',
		type = 'checkbox',
		subtle = false,
		header = false,
		checked = $bindable(false)
	} = $props();

	function onchange_checkbox(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLInputElement;
		// console.log(currentTarget.checked);
		// if (context_row.header) {
		// 	if (currentTarget.checked) {
		// 		$allRows$.forEach((d) => d.selected$.set(true));
		// 	} else {
		// 		$allRows$.forEach((d) => d.selected$.set(false));
		// 	}
		// 	return;
		// }
		// if (row$) {
		// 	row$.selected$.set(currentTarget.checked);
		// }
	}

	function onchange_radio(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLInputElement;
		// $allRows$.forEach((d) => d.selected$.set(false));
		// if (row$) {
		// 	row$.selected$.set(currentTarget.checked);
		// }

		context_table.methods.unselect(context_table.derived.data.values);
		context_table.methods.select([context_row.derived.data.id]);
	}
</script>

<svelte:element this={element} class={classnames('fui-table-cell-selection', { subtle, header })}>
	{#if type === 'checkbox'}
		<Checkbox bind:checked onchange={onchange_checkbox} />
	{:else}
		<Radio bind:checked name="selected-row" onchange={onchange_radio} />
	{/if}
</svelte:element>

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
		display: table-cell;
	}
</style>
