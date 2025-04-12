<script lang="ts">
	import {
		FUI_RADIO_GROUP_CONTEXT_KEY,
		setRadioGroupContext,
		type RadioGroupContext
	} from './context';
	import type { RadioGroupProps } from './types';
	import { classnames } from '@svelte-fui/core/internal';
	import { fid } from '@svelte-fui/core/internal/utils';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		class: klass = '',
		disabled = false,
		required = false,
		layout = 'vertical',
		value,
		name,
		children,
		ref = undefined,
		...restProps
	}: RadioGroupProps = $props();

	const contextState: RadioGroupContext['state'] = $derived({
		data: {}
	});
	const contextDerived: RadioGroupContext['derived'] = $derived({
		data: {
			disabled,
			required,
			value,
			name,
			layout
		}
	});
	const constext_radio_group = setRadioGroupContext({
		id: fid(FUI_RADIO_GROUP_CONTEXT_KEY),
		type: 'radio-group',
		get derived() {
			return contextDerived;
		},
		get state() {
			return contextState;
		},
		methods: {
			select(val) {
				value = val;
			},
			unselect() {
				value = undefined;
			}
		}
	});
</script>

<div
	use:reference={ref}
	class={classnames('fui-radio-group', layout)}
	role="radiogroup"
	{...restProps}
>
	{@render children?.({ context: constextRadioGroup })}
</div>

<style lang="postcss">
	.fui-radio-group {
		@apply flex items-start;

		&.vertical {
			@apply flex-col;
		}
	}
</style>
