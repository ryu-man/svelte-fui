<script lang="ts">
	import { classnames } from '../internal';
	import type { CardFooterProps } from './types';

	let { class: klass = '', children }: CardFooterProps = $props();
</script>

<div class={classnames('fui-card-footer', klass)}>
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-card-footer {
		@apply flex gap-m;

		flex-shrink: 0;
	}
</style>
