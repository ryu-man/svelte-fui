<script lang="ts">
</script>

<div class="fui-dialog-body">
	<slot />
</div>

<style lang="postcss">
	.fui-dialog-body {
		@apply box-border grid;
		&::backdrop {
			background-color: rgba(0, 0, 0, 0.4);
		}
		max-height: calc(var(--dialog-height) - 2 * 24px);
		overflow: unset;
		gap: 8px;
		grid-template-rows: auto 1fr;
	}

	@media screen and (max-width: 480px) {
		.fui-dialog-body {
			max-width: 100vw;
			grid-template-rows: auto 1fr auto;
		}
	}
</style>
