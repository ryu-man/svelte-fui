<script lang="ts">
	import { classnames } from '../internal';

	let { class: klass = '', children = undefined, ...restProps } = $props();
</script>

<div
	class={classnames(
		'fui-list-group w-full flex flex-col rounded-b-inherit rounded-t-inherit',
		klass
	)}
	{...restProps}
>
	{@render children?.()}
</div>
