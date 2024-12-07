<script lang="ts">
	import { nanoid } from 'nanoid';
	import type { TooltipOverlayProps } from './types';
	import { classnames } from '../internal';
	import { Popover } from '../popover';
	import { animate } from '../actions/animation';
	import { getTooltipContext } from './context';

	const context_tooltip = getTooltipContext();

	let {
		class: klass = '',
		appearance = 'normal',
		offset = 8,
		id = nanoid(),
		children
	}: TooltipOverlayProps = $props();

	const open = $derived(context_tooltip.derived.data.open);
</script>

<Popover.Overlay
	class={classnames('fui-tooltip-overlay')}
	placements={['bottom', 'top']}
	role="tooltip"
>
	{#snippet children({ dy })}
		<div
			class={classnames(
				'fui-tooltip-content w-auto font-base text-base-200 leading-base-200 pointer-events-none box-border cursor-default whitespace-nowrap rounded-md',
				{
					inverted: appearance === 'inverted'
				},
				klass
			)}
			{id}
			use:animate={{
				opacity: +open,
				y: offset * dy * +!open,
				duration: 0.2
			}}
		>
			{@render children?.({ context: context_tooltip })}
		</div>
	{/snippet}
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
