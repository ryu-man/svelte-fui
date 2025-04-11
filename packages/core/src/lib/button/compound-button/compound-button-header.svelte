<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { CompoundButtonHeaderProps } from './types';

	let { class: klass = '', children, ...restProps }: CompoundButtonHeaderProps = $props();
</script>

<div class={classnames('fui-compound-button-header', klass)} {...restProps}>
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-compound-button-header {
		grid-area: header;
	}
</style>
