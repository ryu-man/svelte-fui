<script lang="ts">
	import type { SpinnerLabelProps } from './types';
	import { classnames } from '../internal';
	import { Label, type LabelProps } from '../label';

	let { class: klass = '', children, ...restProps }: LabelProps & SpinnerLabelProps = $props();
</script>

<Label class={classnames('fui-spinner-label', klass)} {...restProps}>
	{@render children?.()}
</Label>
