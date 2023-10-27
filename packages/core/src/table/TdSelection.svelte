<script lang="ts">
	import { getTableContext } from './context';
	import { Checkbox } from '../checkbox';
	import { classnames } from '../internal';
	import { Radio } from '../radio';

	const { size$ } = getTableContext();

	export let checked: boolean | 'mixed' = false;
	export let type: 'checkbox' | 'radio' = 'checkbox';
	export let subtle = false;
</script>

<td class={classnames('fui-table-cell-selection', $size$, { subtle })}>
	{#if type === 'checkbox'}
		<Checkbox bind:checked />
	{:else}
		<Radio bind:checked />
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

	.fui-table-cell-selection > div {
		/* @apply gap-s relative flex h-full min-h-[32px] w-full flex-1 items-center outline-none;
		flex: 1 1 0px; */
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
