<script lang="ts">
	import { nanoid } from 'nanoid';
	import WarningFilled from '@svelte-fui/core/icons/warning-filled.svelte';
	import CheckmarkCircleFilled from '@svelte-fui/core/icons/checkmark-circle-filled.svelte';
	import ErrorCircleFilled from '@svelte-fui/core/icons/error-circle-filled.svelte';
	import { setFieldContext, type FieldContext } from './context';
	import type { FieldProps } from './types';
	import { classnames } from '../internal';
	import { reference } from '../internal/dom.svelte';

	let {
		class: klass = '',
		orientation = 'vertical',
		size = 'md',
		state: fieldState = 'none',
		labeless = false,
		open = false,
		disabled = false,
		readonly = false,
		children = undefined,
		ref = undefined,
		...restProps
	}: FieldProps = $props();

	const validationMessageIcons = {
		error: ErrorCircleFilled,
		warning: WarningFilled,
		success: CheckmarkCircleFilled,
		none: undefined
	};

	const contextState: FieldContext['state'] = $state({
		data: {},
		elements: {}
	});

	const contextDerived: FieldContext['derived'] = $derived({
		data: {
			icon: validationMessageIcons[fieldState || 'none'],
			state: fieldState,
			open,
			disabled,
			readonly
		},
		elements: {}
	});

	const contextField = setFieldContext({
		id: nanoid(),
		type: 'field',
		get state() {
			return contextState;
		},
		get derived() {
			return contextDerived;
		},
		events: {},
		methods: {
			open: () => {},
			close: () => {},
			toggle: () => {}
		}
	});
</script>

<div
	use:reference={ref}
	class={classnames('fui-field', orientation, fieldState, size, { 'no-label': labeless })}
	{...restProps}
>
	{@render children?.({ context: contextField })}
</div>

<style lang="postcss">
	.fui-field {
		display: grid;

		&.horizontal {
			grid-template-columns: 33% 1fr;
			grid-template-rows: auto auto auto 1fr;

			&.no-label {
				padding-left: 33%;
				grid-template-columns: 1fr;
			}
		}
	}

	.fui-field :global(.fui-label) {
		@apply py-xxs;
	}
	.fui-field :global(.fui-label.lg) {
		@apply py-[1px];
	}
	.fui-field.vertical :global(.fui-label) {
		@apply mb-xxs;
	}
	.fui-field.vertical :global(.fui-label.lg) {
		@apply pb-xs;
	}
	.fui-field.horizontal :global(.fui-label) {
		@apply mr-m;
		grid-row-start: 1;
		grid-row-end: -1;
	}
</style>
