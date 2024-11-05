<script lang="ts" generics="T">
	import { onMount, tick } from 'svelte';
	// import { derived } from 'svelte/store';
	import { nanoid } from 'nanoid';
	import { setTableRowContext, type TableRowContext } from './context';
	import { classnames } from '../../internal';
	import { getTableContext } from '../context';
	// import { rowStore } from '../store';
	import type { TrProps } from '../types';

	const context_table = getTableContext();
	const size = $derived(context_table.derived.data.size);

	// export let header = false;
	// export let key = header ? 'fui-table-header-row-' + nanoid(4) : nanoid();
	// export let data: any = undefined;
	// export let appearance: 'none' | 'neutral' | 'brand' = 'none';
	// let klass = '';
	// export { klass as class };

	let { class: klass = '', id = nanoid(8), appearance = 'none', data, children }: TrProps<T> = $props();

	const is_selected = $derived(context_table.derived.data.values.includes(id));
	const is_header = $derived(false);

	const context_state: TableRowContext<T>['state'] = $state({
		data: {},
		elements: {}
	});

	const context_derived: TableRowContext<T>['derived'] = $derived({
		data: {
			id,
			data,
			header: false
		},
		elements: {}
	});

	const context_tr = setTableRowContext({
		id: nanoid(),
		type: 'table-tr',
		get state() {
			return context_state;
		},
		get derived() {
			return context_derived;
		}
	});
	// context_tr.id = key;
	// context_tr.header = header;

	// const row$ = rowStore(key, data);
	// const isSelected$ = derived(row$.selected$, (val) => val);

	// if (!header) {
	// 	onMount(() => mountRow(row$));
	// }

	$effect(() => {
		return context_table.methods.mount(id, data);
	});
</script>

<tr
	class={classnames(
		'fui-table-row',
		size,
		appearance !== 'none' ? appearance : '',
		{ header: is_header, brand: is_selected },
		klass
	)}
>
	{#await tick() then _}
		{@render children?.({ context: context_table })}
	{/await}
</tr>

<style lang="postcss">
	.interactive {
		&:hover {
			@apply bg-subtle-background-hover text-neutral-foreground-1-hover;
			& :global(.fui-table-cell-actions) {
				@apply opacity-100;
			}
			& :global(.fui-table-selection-cell) {
				@apply opacity-100;
			}
		}

		&:active {
			@apply bg-subtle-background-pressed text-neutral-foreground-1-pressed;

			& :global(.fui-table-cell-actions) {
				@apply opacity-100;
			}

			& :global(.fui-table-selection-cell) {
				@apply opacity-100;
			}
		}
	}

	.md {
		@apply border-thin border-neutral-stroke-2 h-[44px] border-b;
	}

	.sm {
		@apply border-thin border-neutral-stroke-2 h-[34px] border-b;
	}
	.xs {
		@apply text-base-200 h-[24px];
	}

	.brand {
		@apply bg-brand-background-2 border-transparent-stroke-interactive;

		& :active {
			@apply bg-brand-background-inverted-selected;
		}

		@media (forced-colors: active) {
			@apply box-border rounded-md border-2 border-solid border-transparent;
			&:focus-visible {
				outline-offset: -4px;
			}
		}
	}

	.neutral {
		@media (forced-colors: active) {
			@apply box-border rounded-md border-2 border-solid border-transparent;

			&:focus-visible {
				outline-offset: -4px;
			}
		}

		@apply bg-subtle-background-selected text-neutral-foreground-1-hover border-neutral-stroke-on-brand;

		&:hover {
			@apply bg-subtle-background-selected;
		}
		&:active {
			@apply bg-subtle-background-selected;
		}
	}

	.fui-table-row {
		@apply border-b-thin border-b-neutral-stroke-2 text-neutral-foreground-1 box-border;

		&:global(:not(.header)) {
			@apply interactive;
		}
	}
</style>
