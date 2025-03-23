<script lang="ts">
	import { classnames } from '../internal';

	let { class: klass = '', children = undefined, ...restProps } = $props();
</script>

<ul class={classnames('fui-list flex flex-col rounded-inherit', klass)} {...restProps}>
	{@render children?.()}
</ul>
