<script lang="ts">
	import { classnames } from '../internal';

	let { class: klass = '', children = undefined, ...restProps } = $props();
</script>

<li class={classnames('fui-list-item flex w-full gap-2 px-6 py-2', klass)} {...restProps}>
	{@render children?.()}
</li>
