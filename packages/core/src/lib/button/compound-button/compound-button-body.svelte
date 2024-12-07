<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { CompoundButtonBody } from './types';

	let { class: klass = '', children, ...restProps }: CompoundButtonBody = $props();
</script>

<p class={classnames('fui-compound-button-body', klass)} {...restProps}>
	{@render children?.()}
</p>

<style lang="postcss">
	.fui-compound-button-body {
		@apply font-regular leading-none;

		grid-area: body;

		color: var(--fui-compound-body-secondary-color, theme('colors.neutral-foreground-2'));
		font-size: var(--fui-compound-body-secondary-font-size, 1em);
	}
</style>
