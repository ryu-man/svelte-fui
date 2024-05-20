<script lang="ts">
	import { setFieldContext } from './context';
	import type { State } from './types,';
	import { setSharedContext } from '../context';
	import { CheckmarkCircleFilled, ErrorCircleFilled, WarningFilled } from '../icons';
	import { classnames } from '../internal';
	import { Label } from '../label';

	export let label: string = '';
	export let orientation: 'horizontal' | 'vertical' = 'vertical';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let validationMessage = '';
	export let state: State = validationMessage ? 'error' : 'none';

	const validation_message_icons = {
		error: ErrorCircleFilled,
		warning: WarningFilled,
		success: CheckmarkCircleFilled,
		none: undefined
	};

	const sharedContext$ = setSharedContext({ input: { invalid: state === 'error', size }, label: { size } });
	$: sharedContext$.set({ input: { invalid: state === 'error', size }, label: { size } });

	const { icon$, state$ } = setFieldContext({ state, icon: validation_message_icons[state || 'none'] });

	$: icon$.set(validation_message_icons[state || 'none']);
	$: state$.set(state);
</script>

<div class={classnames('fui-field', orientation, state, size, { 'no-label': !label })}>
	<Label>{label}</Label>
	<slot />
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
