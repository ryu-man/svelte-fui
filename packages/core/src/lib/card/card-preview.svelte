<script lang="ts">
	import { classnames } from '../internal';

	export let src: string | undefined = undefined;
	export let alt: string | undefined = undefined;

	export let style = '';
	let klass = '';
	export { klass as class };
</script>

<div class={classnames('fui-card-preview', klass)} {style}>
	<img {src} {alt} />
	<slot />
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
