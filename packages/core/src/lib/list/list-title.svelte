<script lang="ts">
	import { classnames } from "../internal";

	let { class: klass = '', children = undefined, ...restProps } = $props();
</script>

<div class={classnames('fui-list-group-title w-full', klass)} {...restProps}>
	{@render children?.()}
</div>
