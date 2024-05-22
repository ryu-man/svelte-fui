<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<div class={classnames('fui-dialog-body px-6', klass)}>
	<slot />
</div>

<style lang="postcss">
	.fui-dialog-body {
		@apply body-1 box-border overflow-y-auto;
		min-height: 32px;
		grid-row-start: 2;
		grid-row-end: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		/* ...shorthands.padding(tokens.strokeWidthThick),
    ...shorthands.margin(`calc(${tokens.strokeWidthThick} * -1)`),
    ...typographyStyles.body1, */
	}
</style>
