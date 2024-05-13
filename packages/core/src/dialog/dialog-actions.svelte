<script lang="ts">
	import { classnames } from '../internal';

	export let position: 'start' | 'end' = 'end';
	export let fluid = false;
</script>

<div class={classnames('fui-dialog-actions', position, { fluid })}>
	<slot />
</div>

<style lang="postcss">
	.fui-dialog-actions {
		@apply box-border flex h-fit gap-2;

		grid-row-start: 3;
		grid-row-snd: 3;

		&.end {
			justify-self: end;
			grid-column-start: 2;
			grid-column-end: 4;
		}
		&.start {
			justify-self: start;
			grid-column-start: 1;
			grid-column-end: 2;
		}
		&.fluid.start {
			grid-column-end: 4;
		}
		&.fluid.end {
			grid-column-start: 1;
		}
	}

	@media screen and (max-width: 480px) {
		.fui-dialog-actions {
			@apply flex-col self-stretch;
		}
	}
</style>
