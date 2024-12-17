<script lang="ts">
	import {
		FUI_RADIO_GROUP_CONTEXT_KEY,
		setRadioGroupContext,
		type RadioGroupContext
	} from './context';
	import type { RadioGroupProps } from './types';
	import { classnames } from '../internal';
	import { fid } from '../internal/utils';

	let {
		class: klass = '',
		disabled = false,
		required = false,
		layout = 'vertical',
		value,
		name,
		children,
		...restProps
	}: RadioGroupProps = $props();

	const context_state: RadioGroupContext['state'] = $derived({
		data: {}
	});
	const context_derived: RadioGroupContext['derived'] = $derived({
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
			return context_derived;
		},
		get state() {
			return context_state;
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

<div class={classnames('fui-radio-group', layout)} role="radiogroup" {...restProps}>
	{@render children?.({ context: constext_radio_group })}
</div>

<style lang="postcss">
	.fui-radio-group {
		@apply flex items-start;

		&.vertical {
			@apply flex-col;
		}
	}
</style>
