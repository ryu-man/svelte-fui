<script lang="ts">
	export let as = 'div';
</script>

<svelte:element this={as} class="fui-dialog-title px-6 pt-6" id="dialog-title-277">
	<slot />
</svelte:element>

<style lang="postcss">
	.fui-dialog-title {
		@apply subtitle-1 m-0;

		grid-row-start: 1;
		grid-row-end: 1;
		grid-column-start: 1;
		grid-column-end: 3;
	}
</style>
