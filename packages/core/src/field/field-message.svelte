<script lang="ts">
	import type { ComponentType } from 'svelte/internal';
	import { Icon } from '../icon';
	import { classnames } from '../internal';
	import { getFieldContext } from './context';

	const { state$, icon$ } = getFieldContext();

	export let icon: ComponentType | undefined = $icon$;
	export let id: string | undefined = undefined;
	let klass = '';
	export { klass as class };

	let iconSize = '12px';
</script>

<div
	{id}
	class={classnames('fui-field-validation-message', $state$, { icon: !!icon, 'secondary-text': !!$$slots.default }, klass)}
	style:--icon-size={iconSize}
>
	{#if icon}
		<!-- content here -->
		<Icon class={classnames('fui-field-validation-message-icon', $state$)} src={icon} size={iconSize} ariaHidden />
	{/if}
	<slot><!-- optional fallback --></slot>
</div>

<style lang="postcss">
	.fui-field-validation-message {
		@apply font-regular text-base-200 flex items-center text-left;
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
	.fui-field-validation-message :global(.fui-field-validation-message-icon.error) {
		@apply !text-palette-red-foreground-1;
	}
	.fui-field-validation-message :global(.fui-field-validation-message-icon.warning) {
		@apply !text-palette-dark-orange-foreground-1;
	}
	.fui-field-validation-message :global(.fui-field-validation-message-icon.success) {
		@apply !text-palette-green-foreground-1;
	}
</style>
