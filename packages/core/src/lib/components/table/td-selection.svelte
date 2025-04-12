<script lang="ts">
	import { getTableRowContext } from './tr';
	import { getTableContext } from './context';
	import { Checkbox } from '../checkbox';
	import { classnames } from '@svelte-fui/core/internal';
	import { Radio } from '../radio';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	const contextTable = getTableContext();
	const contextRow = getTableRowContext();

	// const row$ = $allRows$.find((d) => d.id === contextRow.id) as RowStore;

	// let checked$: Readable<boolean>;

	// if (contextRow.header) {
	// 	checked$ = derived([allRows$, selectedKeys$], ([rows, selected]) => {
	// 		return selected.length > 0 && rows.length === selected.length;
	// 	});
	// } else {
	// 	checked$ = row$.selected$;
	// }

	const element = contextRow.header ? 'th' : 'td';

	// export let checked: boolean | 'mixed' = false;
	// export let type: 'checkbox' | 'radio' = 'checkbox';
	// export let subtle = false;
	// export let hidden = contextRow.header;

	let {
		class: klass = '',
		type = 'checkbox',
		subtle = false,
		header = false,
		checked = $bindable(false),
		ref = undefined
	} = $props();

	function onchangeCheckbox(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLInputElement;
		// console.log(currentTarget.checked);
		// if (contextRow.header) {
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

	function onchangeRadio(ev: Event) {
		const currentTarget = ev.currentTarget as HTMLInputElement;
		// $allRows$.forEach((d) => d.selected$.set(false));
		// if (row$) {
		// 	row$.selected$.set(currentTarget.checked);
		// }

		contextTable.methods.unselect(contextTable.derived.data.values);
		contextTable.methods.select([contextRow.derived.data.id]);
	}
</script>

<svelte:element
	this={element}
	use:reference={ref}
	class={classnames('fui-table-cell-selection', { subtle, header }, klass)}
>
	{#if type === 'checkbox'}
		<Checkbox bind:checked onchange={onchangeCheckbox} />
	{:else}
		<Radio bind:checked name="selected-row" onchange={onchangeRadio} />
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
