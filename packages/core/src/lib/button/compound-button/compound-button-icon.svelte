<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import { classnames } from '@svelte-fui/core/internal';
	import type { CompoundButtonIcon } from './types';

	let { class: klass = '', children, ...restProps }: CompoundButtonIcon = $props();
</script>

<Icon class={classnames('fui-compound-button-icon h-full', klass)} {...restProps}>
	{@render children?.()}
</Icon>

<style lang="postcss">
	:global(.fui-compound-button-icon) {
		grid-area: icon;
	}
</style>
