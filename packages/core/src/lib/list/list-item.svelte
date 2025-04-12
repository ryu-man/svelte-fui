<script lang="ts">
	import { classnames } from '../internal';
	import { reference } from '../internal/dom.svelte';

	let { class: klass = '', children = undefined, ref = undefined, ...restProps } = $props();
</script>

<li
	use:reference={ref}
	class={classnames('fui-list-item flex w-full gap-2 px-6 py-2', klass)}
	{...restProps}
>
	{@render children?.()}
</li>
