<script lang="ts">
</script>

<div class="fui-dialog-content">
	<slot />
</div>

<style lang="postcss">
	.fui-dialog-content {
		@apply body-1 box-border overflow-y-auto;
		min-height: 32px;
		grid-row-start: 2;
		grid-row-end: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		padding: theme(borderWidth.thin);
		margin: calc(theme(borderWidth.thin) * -1);

		/* ...shorthands.padding(tokens.strokeWidthThick),
    ...shorthands.margin(`calc(${tokens.strokeWidthThick} * -1)`),
    ...typographyStyles.body1, */
	}
</style>
