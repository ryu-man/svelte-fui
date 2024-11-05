<script lang="ts">
	import { nanoid } from 'nanoid';
	import WarningFilled from '@svelte-fui/core/icons/warning-filled.svelte';
	import CheckmarkCircleFilled from '@svelte-fui/core/icons/checkmark-circle-filled.svelte';
	import ErrorCircleFilled from '@svelte-fui/core/icons/error-circle-filled.svelte';
	import { setFieldContext, type FieldContext } from './context';
	import type { FieldProps } from './types';
	import { classnames } from '../internal';

	let {
		class: klass = '',
		orientation = 'vertical',
		size = 'md',
		state: fieldState = 'none',
		labeless = false,
		open = false,
		disabled = false,
		readonly = false,
		children,
		...restProps
	}: FieldProps = $props();

	const validation_message_icons = {
		error: ErrorCircleFilled,
		warning: WarningFilled,
		success: CheckmarkCircleFilled,
		none: undefined
	};

	const context_state: FieldContext['state'] = $state({
		data: {},
		elements: {}
	});

	const context_derived: FieldContext['derived'] = $derived({
		data: {
			icon: validation_message_icons[fieldState || 'none'],
			state: fieldState,
			open,
			disabled,
			readonly
		},
		elements: {}
	});

	const context_field = setFieldContext({
		id: nanoid(),
		type: 'field',
		get state() {
			return context_state;
		},
		get derived() {
			return context_derived;
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
	class={classnames('fui-field', orientation, fieldState, size, { 'no-label': labeless })}
	{...restProps}
>
	{@render children?.({ context: context_field })}
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
