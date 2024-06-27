<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { classnames } from '@svelte-fui/core/internal';

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let klass: $$Props['class'] = '';
	export { klass as class };
</script>

<span class={classnames('fui-icon h-6 text-current', klass)} {...$$restProps}>
	<slot />
</span>

<style lang="postcss">
	.fui-icon {
		display: inline-block;
	}
	.fui-icon {
		@apply flex aspect-square items-center justify-center leading-none;
	}

	.fui-icon :global(svg) {
		@apply aspect-square h-full w-auto leading-none;
	}
</style>
