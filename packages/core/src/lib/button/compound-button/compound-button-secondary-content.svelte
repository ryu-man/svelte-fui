<script>
</script>

<div class="fui-compound-body-secondary">
	<slot />
</div>

<style lang="postcss">
	.fui-compound-body-secondary {
		@apply font-regular leading-none;

		color: var(--fui-compound-body-secondary-color, theme('colors.neutral-foreground-2'));
		font-size: var(--fui-compound-body-secondary-font-size, 1em);
	}
</style>
