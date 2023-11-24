<script lang="ts">
	import { classnames } from '../internal';

	export let truncate = false;
	export let primary = false;
	let klass = '';
	export { klass as class };
</script>

<td class={classnames('fui-table-cell', { truncate, primary })}>
	<div class={klass}>
		<slot />
	</div>
</td>

<style lang="postcss">
	/* Need to implement focus style */
	.fui-table-cell {
		@apply px-s relative table-cell h-full bg-inherit py-0 align-middle;

		--fui-icon-size: 20px;
	}

	.fui-table-cell.truncate {
		@apply overflow-x-hidden;
	}

	.fui-table-cell > div {
		/* @apply gap-s relative flex h-full min-h-[32px] w-full flex-1 items-center outline-none;
		flex: 1 1 0px; */
	}
</style>
