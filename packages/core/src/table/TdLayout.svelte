<script lang="ts">
	import { getTableContext } from './context';
	import { classnames } from '../internal';

	export let truncate = false;
	export let primary = false;

	const { size$ } = getTableContext();
</script>

<div class="fui-table-cell-layout">
	<span class="fui-table-cell-layout-media"
		><svg
			fill="currentColor"
			class="___12fm75w f1w7gpdv fez10in fg4l7m0"
			aria-hidden="true"
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6ZM5 4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm9.8 3h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Z"
				fill="currentColor"
			/></svg
		></span
	>

	<div class="fui-table-cell-layout-content">
		<span class="fui-table-cell-layout-main">Meeting notes</span>
		<span class="fui-table-cell-layout-description">My Organization</span>
	</div>
</div>

<style lang="postcss">
	.fui-table-cell-layout {
		@apply gap-s flex items-center;

		flex: 1 1 0px;
	}
</style>
