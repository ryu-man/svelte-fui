<script lang="ts">
	import { nanoid } from 'nanoid';
	import type { TooltipOverlayProps } from './types';
	import { classnames } from '@svelte-fui/core/internal';
	import { getPopoverContext, Popover } from '../popover';

	const contextTooltip = getPopoverContext();

	let {
		class: klass = '',
		appearance = 'normal',
		id = nanoid(),
		children = undefined,
		...restProps
	}: TooltipOverlayProps = $props();
</script>

<Popover.Overlay
	class={classnames(
		'fui-tooltip-overlay fui-tooltip-content w-auto font-base text-base-200 leading-base-200 pointer-events-none box-border cursor-default whitespace-nowrap rounded-md',
		{
			inverted: appearance === 'inverted'
		},
		klass
	)}
	placements={['bottom', 'top']}
	role="tooltip"
	{...restProps}
>
	{@render children?.({ context: contextTooltip })}
</Popover.Overlay>

<style lang="postcss">
	:global(.fui-tooltip-content) {
		border: 1px solid var(--fui-colorTransparentStroke);
		background-color: var(--fui-colorNeutralBackground1);
		color: var(--fui-colorNeutralForeground1);
		padding: theme(spacing.xs) theme(spacing.m) theme(spacing.sNudge) theme(spacing.m);
		filter: drop-shadow(0 0 2px var(--fui-colorNeutralShadowAmbient))
			drop-shadow(0 4px 8px var(--fui-colorNeutralShadowKey));

		&.inverted {
			background-color: var(--fui-colorNeutralBackgroundStatic);
			color: var(--fui-colorNeutralForegroundStaticInverted);
		}
	}
</style>
