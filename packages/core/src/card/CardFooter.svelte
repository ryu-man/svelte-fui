<script lang="ts">
	import { classnames } from '../internal';

	export let style = '';
	let klass = '';
	export { klass as class };
</script>

<div class={classnames('fui-card-footer', klass)} {style}>
	<slot />
</div>

<style lang="postcss">
	.fui-card-footer {
		@apply flex gap-m;

		flex-shrink: 0;
	}
</style>

