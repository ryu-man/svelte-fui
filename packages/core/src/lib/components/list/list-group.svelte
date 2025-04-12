<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let { class: klass = '', children = undefined, ref = undefined, ...restProps } = $props();
</script>

<div
	use:reference={ref}
	class={classnames(
		'fui-list-group w-full flex flex-col rounded-b-inherit rounded-t-inherit',
		klass
	)}
	{...restProps}
>
	{@render children?.()}
</div>
