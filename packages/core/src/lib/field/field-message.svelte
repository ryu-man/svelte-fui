<script lang="ts">
	import type { ComponentType } from 'svelte/internal';
	import { classnames } from '@svelte-fui/core/internal';
	import { getFieldContext } from './context';

	const { state$ } = getFieldContext();

	export let id: string | undefined = undefined;
	export let open = false;
	let klass = '';
	export { klass as class };
</script>

{#if open}
	<div
		{id}
		class={classnames('fui-field-validation-message font-regular text-base-200 gap-1', $state$, { 'secondary-text': !!$$slots.default }, klass)}
	>
		<slot />
	</div>
{/if}

<style lang="postcss">
	.fui-field-validation-message {
		@apply flex items-center text-left;
	}

	.fui-field-validation-message.secondary-text {
		@apply mt-xxs text-neutral-foreground-3 caption-1;

		&.error {
			@apply text-palette-red-foreground-1;
		}
		&.icon {
			/* Add a gutter for the icon, to allow multiple lines of text to line up to the right of the icon. */
			padding-left: calc(var(--icon-size) + theme(spacing.xs));
		}
	}

	.fui-field-validation-message :global(.fui-field-validation-message-icon) {
		@apply inline-block;
		font-size: var(--icon-size);
		margin-left: calc(-1 * var(--icon-size) - theme(spacing.xs));
		margin-right: theme(spacing.xs);

		line-height: 0;

		vertical-align: -1px;
	}
	.fui-field-validation-message:global(.error) {
		@apply !text-palette-red-foreground-1;
	}
	.fui-field-validation-message:global(.warning) {
		@apply !text-palette-dark-orange-foreground-1;
	}
	.fui-field-validation-message:global(.success) {
		@apply !text-palette-green-foreground-1;
	}
</style>
