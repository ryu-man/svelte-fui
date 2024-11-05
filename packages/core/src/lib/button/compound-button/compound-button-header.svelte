<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { CompoundButtonHeader } from './types';

	let { class: klass = '', children, ...restProps }: CompoundButtonHeader = $props();
</script>

<div class={classnames('fui-compound-button-header', klass)} {...restProps}>
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-compound-button-header {
		grid-area: header;
	}
</style>
