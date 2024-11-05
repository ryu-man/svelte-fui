<script lang="ts">
	import { nanoid } from 'nanoid';
	import { classnames } from '../internal';
	import { getPopoverContext, Popover } from '../popover';
	import type { TooltipOverlayProps } from './types';
	import { animate } from '../actions/animation';

	const context_popover = getPopoverContext();

	let {
		class: klass = '',
		appearance = 'normal',
		offset = 8,
		id = nanoid(),
		children
	}: TooltipOverlayProps = $props();

	const open = $derived(context_popover.derived.data.open);
</script>

<Popover.Overlay
	class={classnames('fui-tooltip-overlay')}
	placements={['bottom', 'top']}
	role="tooltip"
>
	{#snippet children({ dy })}
		<div
			class={classnames(
				'fui-tooltip-body w-auto font-base text-base-200 leading-base-200 pointer-events-none box-border cursor-default whitespace-nowrap rounded-md',
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
			{@render children?.({ context: context_popover })}
		</div>
	{/snippet}
</Popover.Overlay>

<style lang="postcss">
	:global(.fui-tooltip-body) {
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
