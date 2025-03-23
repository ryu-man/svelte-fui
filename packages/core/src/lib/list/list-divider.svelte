<script lang="ts">
	import { classnames } from "../internal";

	let { class: klass = '', children = undefined, ...restProps } = $props();
</script>

<div class={classnames('list-divider my-1', klass)} />
