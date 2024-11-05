<script lang="ts">
	import { classnames } from '../internal';
	import type { CardPreviewProps } from './types';

	let {
		class: klass = '',
		src = undefined,
		alt = undefined,
		children
	}: CardPreviewProps = $props();
</script>

<div class={classnames('fui-card-preview', klass)}>
	<img {src} {alt} />
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-card-preview {
		position: relative;

		:global(> :not(.logo)) {
			display: block;
			height: 100%;
			width: 100%;
		}

		:global(.logo) {
			@apply absolute;
			bottom: 12px;
			left: 12px;
			width: 32px;
			height: 32px;
		}
	}
</style>
