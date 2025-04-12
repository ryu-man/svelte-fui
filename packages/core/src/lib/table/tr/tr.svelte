<script lang="ts" generics="T">
	import { onMount, tick } from 'svelte';
	// import { derived } from 'svelte/store';
	import { nanoid } from 'nanoid';
	import { setTableRowContext, type TableRowContext } from './context';
	import { classnames } from '../../internal';
	import { getTableContext } from '../context';
	// import { rowStore } from '../store';
	import type { TrProps } from '../types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	const contextTable = getTableContext();
	const size = $derived(contextTable.derived.data.size);

	// export let header = false;
	// export let key = header ? 'fui-table-header-row-' + nanoid(4) : nanoid();
	// export let data: any = undefined;
	// export let appearance: 'none' | 'neutral' | 'brand' = 'none';
	// let klass = '';
	// export { klass as class };

	let {
		class: klass = '',
		id = nanoid(8),
		appearance = 'none',
		data,
		element = $bindable(),
		children = undefined,
		ref = undefined
	}: TrProps<T> = $props();

	const isSelected = $derived(contextTable.derived.data.values.includes(id));
	const isHeader = $derived(false);

	const contextState: TableRowContext<T>['state'] = $state({
		data: {},
		elements: {}
	});

	const contextDerived: TableRowContext<T>['derived'] = $derived({
		data: {
			id,
			data,
			header: false
		},
		elements: {}
	});

	const contextTr = setTableRowContext({
		id: nanoid(),
		type: 'table-tr',
		get state() {
			return contextState;
		},
		get derived() {
			return contextDerived;
		}
	});
	// contextTr.id = key;
	// contextTr.header = header;

	// const row$ = rowStore(key, data);
	// const isSelected$ = derived(row$.selected$, (val) => val);

	// if (!header) {
	// 	onMount(() => mountRow(row$));
	// }

	$effect(() => {
		return contextTable.methods.mount(id, data);
	});
</script>

<tr
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-table-row',
		size,
		appearance !== 'none' ? appearance : '',
		{ header: isHeader, brand: isSelected },
		klass
	)}
>
	{#await tick() then _}
		{@render children?.({ context: contextTable })}
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
