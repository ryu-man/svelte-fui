<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let { class: klass = '', children = undefined, ref = undefined, ...restProps } = $props();
</script>

<div use:reference={ref} class={classnames('list-divider my-1', klass)} {...restProps}></div>
