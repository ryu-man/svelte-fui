<script lang="ts">
	import { Icon } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import type { AvatarProps } from './types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		element = $bindable(),
		class: klass = '',
		color = 'neutral',
		badge = false,
		shape = 'circular',
		active = 'unset',
		activeAppearance = 'ring',
		size = '12',
		alt,
		ariaLabel,
		src,
		id,
		ref = undefined
	}: AvatarProps = $props();

	const activeOrInactive = $derived(active === 'active' || active === 'inactive');
	const ringStyle = $derived(activeAppearance === 'ring' || activeAppearance === 'ring-shadow');
</script>

<span
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-avatar font-base text-base-300 relative inline-block rounded-full align-middle font-semibold',
		{ 'active-or-inactive': activeOrInactive, badge: badge },
		active === 'active' ? activeAppearance : '',
		shape === 'square' && ['12', '16', '20', '24'].includes(size) && 'rounded-sm',
		shape === 'square' && ['28', '32', '36', '40', '48'].includes(size) && 'rounded-md',
		shape === 'square' && ['56', '64', '72'].includes(size) && 'rounded-lg',
		shape === 'square' && ['96', '120', '128'].includes(size) && 'rounded-xl',
		shape === 'circular' && 'rounded-full',
		color,
		klass
	)}
	role="img"
	{id}
	aria-label={ariaLabel}
>
	{#if typeof src === 'string'}
		<span class="fui-avatar-initials">KA</span>
		<img class="fui-avatar-image" {alt} role="presentation" aria-hidden="true" {src} />
	{:else}
		{@const Component = src}

		<Icon aria-hidden="true" class="fui-avatar-icon text-current p-[6px]">
			<Component />
		</Icon>
	{/if}
</span>

<style lang="postcss">
	/* .square-sm {
		@apply rounded-sm;
	}
	.square-md {
		@apply rounded-md;
	}
	.square-lg {
		@apply rounded-lg;
	}
	.square-xl {
		@apply rounded-xl;
	} */

	/** Shadow **********************************************************/

	/* .shadow-4 {
		@apply shadow-none;
		&::before {
			box-shadow: theme(boxShadow.4);
		}
	}
	.shadow-8 {
		@apply shadow-none;
		&::before {
			box-shadow: theme(boxShadow.8);
		}
	}
	.shadow-16 {
		@apply shadow-none;
		&::before {
			box-shadow: theme(boxShadow.16);
		}
	}
	.shadow-28 {
		@apply shadow-none;
		&::before {
			box-shadow: theme(boxShadow.28);
		}
	} */

	.ring-thick {
		margin: calc(-2 * var(--border-width-thick));
		border-width: var(--border-width-thick);
	}

	.ring-thicker {
		margin: calc(-2 * var(--border-width-thicker));
		border-width: var(--border-width-thicker);
	}

	.ring-thickest {
		margin: calc(-2 * var(--border-width-thickest));
		border-width: var(--border-width-thickest);
	}

	.fui-avatar {
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		font-size: var(--fui-avatar-icon-size);
	}

	/** Size ************************************************************/

	.fui-avatar.size-12 {
		--fui-avatar-icon-size: 12px;
		width: 12px;
		height: 12px;
	}
	.fui-avatar.size-16 {
		--fui-avatar-icon-size: 12px;
		width: 16;
		height: 16px;
	}
	.fui-avatar.size-20 {
		--fui-avatar-icon-size: 16px;
		width: 20px;
		height: 20px;
	}
	.fui-avatar.size-24 {
		--fui-avatar-icon-size: 20px;
		width: 24px;
		height: 24px;
	}
	.fui-avatar.size-28 {
		--fui-avatar-icon-size: 24px;
		width: 28px;
		height: 28px;
	}
	.fui-avatar.size-32 {
		--fui-avatar-icon-size: 28px;
		width: 32px;
		height: 32px;
	}
	.fui-avatar.size-36 {
		--fui-avatar-icon-size: 32px;
		width: 36px;
		height: 36px;
	}
	.fui-avatar.size-40 {
		--fui-avatar-icon-size: 36px;
		width: 40px;
		height: 40px;
	}
	.fui-avatar.size-48 {
		--fui-avatar-icon-size: 44px;
		width: 48;
		height: 48;
	}
	.fui-avatar.size-56 {
		--fui-avatar-icon-size: 52px;
		width: 56px;
		height: 56px;
	}
	.fui-avatar.size-64 {
		--fui-avatar-icon-size: 60px;
		width: 64px;
		height: 64px;
	}
	.fui-avatar.size-72 {
		--fui-avatar-icon-size: 68px;
		width: 72px;
		height: 72px;
	}
	.fui-avatar.size-96 {
		--fui-avatar-icon-size: 96px;
		width: 96px;
		height: 96px;
	}
	.fui-avatar.size-120 {
		--fui-avatar-icon-size: 120px;
		width: 120px;
		height: 120px;
	}
	.fui-avatar.size-128 {
		--fui-avatar-icon-size: 120px;
		width: 128px;
		height: 128px;
	}

	/* .fui-avatar.square {
		&:is(.size-12, .size-16, .size-20, .size-24) {
			@apply square-sm;
		}
		&:is(.size-28, .size-32, .size-36, .size-40, .size-48) {
			@apply square-md;
		}
		&:is(.size-56, .size-64, .size-72) {
			@apply square-lg;
		}
		&:is(.size-96, .size-120, .size-128) {
			@apply square-xl;
		}
	} */

	/** Color ***********************************************************/

	.fui-avatar.neutral {
		color: var(--fui-colorNeutralForeground3);
		background-color: var(--fui-colorNeutralBackground6);
		/* The ::before element is the ring when active */
		&::before {
			color: var(--fui-colorBrandStroke1);
		}
	}
	.fui-avatar.brand {
		color: var(--fui-colorNeutralForegroundStaticInverted);
		background-color: var(--fui-colorBrandBackgroundStatic);
		&::before {
			color: var(--fui-colorBrandStroke1);
		}
	}
	.fui-avatar.dark-red {
		color: var(--fui-colorPaletteDarkRedForeground2);
		background-color: var(--fui-colorPaletteDarkRedBackground2);
		&::before {
			color: var(--fui-colorPaletteDarkRedBorderActive);
		}
	}
	.fui-avatar.cranberry {
		color: var(--fui-colorPaletteCranberryForeground2);
		background-color: var(--fui-colorPaletteCranberryBackground2);
		&::before {
			color: var(--fui-colorPaletteCranberryBorderActive);
		}
	}
	.fui-avatar.red {
		color: var(--fui-colorPaletteRedForeground2);
		background-color: var(--fui-colorPaletteRedBackground2);
		&::before {
			color: var(--fui-colorPaletteRedBorderActive);
		}
	}
	.fui-avatar.pumpkin {
		color: var(--fui-colorPalettePumpkinForeground2);
		background-color: var(--fui-colorPalettePumpkinBackground2);
		&::before {
			color: var(--fui-colorPalettePumpkinBorderActive);
		}
	}
	.fui-avatar.peach {
		color: var(--fui-colorPalettePeachForeground2);
		background-color: var(--fui-colorPalettePeachBackground2);
		&::before {
			color: var(--fui-colorPalettePeachBorderActive);
		}
	}
	.fui-avatar.marigold {
		color: var(--fui-colorPaletteMarigoldForeground2);
		background-color: var(--fui-colorPaletteMarigoldBackground2);
		&::before {
			color: var(--fui-colorPaletteMarigoldBorderActive);
		}
	}
	.fui-avatar.gold {
		color: var(--fui-colorPaletteGoldForeground2);
		background-color: var(--fui-colorPaletteGoldBackground2);
		&::before {
			color: var(--fui-colorPaletteGoldBorderActive);
		}
	}
	.fui-avatar.brass {
		color: var(--fui-colorPaletteBrassForeground2);
		background-color: var(--fui-colorPaletteBrassBackground2);
		&::before {
			color: var(--fui-colorPaletteBrassBorderActive);
		}
	}
	.fui-avatar.brown {
		color: var(--fui-colorPaletteBrownForeground2);
		background-color: var(--fui-colorPaletteBrownBackground2);
		&::before {
			color: var(--fui-colorPaletteBrownBorderActive);
		}
	}
	.fui-avatar.forest {
		color: var(--fui-colorPaletteForestForeground2);
		background-color: var(--fui-colorPaletteForestBackground2);
		&::before {
			color: var(--fui-colorPaletteForestBorderActive);
		}
	}
	.fui-avatar.seafoam {
		color: var(--fui-colorPaletteSeafoamForeground2);
		background-color: var(--fui-colorPaletteSeafoamBackground2);
		&::before {
			color: var(--fui-colorPaletteSeafoamBorderActive);
		}
	}
	.fui-avatar.dark-green {
		color: var(--fui-colorPaletteDarkGreenForeground2);
		background-color: var(--fui-colorPaletteDarkGreenBackground2);
		&::before {
			color: var(--fui-colorPaletteDarkGreenBorderActive);
		}
	}
	.fui-avatar.light-teal {
		color: var(--fui-colorPaletteLightTealForeground2);
		background-color: var(--fui-colorPaletteLightTealBackground2);
		&::before {
			color: var(--fui-colorPaletteLightTealBorderActive);
		}
	}
	.fui-avatar.teal {
		color: var(--fui-colorPaletteTealForeground2);
		background-color: var(--fui-colorPaletteTealBackground2);
		&::before {
			color: var(--fui-colorPaletteTealBorderActive);
		}
	}
	.fui-avatar.steel {
		color: var(--fui-colorPaletteSteelForeground2);
		background-color: var(--fui-colorPaletteSteelBackground2);
		&::before {
			color: var(--fui-colorPaletteSteelBorderActive);
		}
	}
	.fui-avatar.blue {
		color: var(--fui-colorPaletteBlueForeground2);
		background-color: var(--fui-colorPaletteBlueBackground2);
		&::before {
			color: var(--fui-colorPaletteBlueBorderActive);
		}
	}
	.fui-avatar.royal-blue {
		color: var(--fui-colorPaletteRoyalBlueForeground2);
		background-color: var(--fui-colorPaletteRoyalBlueBackground2);
		&::before {
			color: var(--fui-colorPaletteRoyalBlueBorderActive);
		}
	}
	.fui-avatar.cornflower {
		color: var(--fui-colorPaletteCornflowerForeground2);
		background-color: var(--fui-colorPaletteCornflowerBackground2);
		&::before {
			color: var(--fui-colorPaletteCornflowerBorderActive);
		}
	}
	.fui-avatar.navy {
		color: var(--fui-colorPaletteNavyForeground2);
		background-color: var(--fui-colorPaletteNavyBackground2);
		&::before {
			color: var(--fui-colorPaletteNavyBorderActive);
		}
	}
	.fui-avatar.lavender {
		color: var(--fui-colorPaletteLavenderForeground2);
		background-color: var(--fui-colorPaletteLavenderBackground2);
		&::before {
			color: var(--fui-colorPaletteLavenderBorderActive);
		}
	}
	.fui-avatar.purple {
		color: var(--fui-colorPalettePurpleForeground2);
		background-color: var(--fui-colorPalettePurpleBackground2);
		&::before {
			color: var(--fui-colorPalettePurpleBorderActive);
		}
	}
	.fui-avatar.grape {
		color: var(--fui-colorPaletteGrapeForeground2);
		background-color: var(--fui-colorPaletteGrapeBackground2);
		&::before {
			color: var(--fui-colorPaletteGrapeBorderActive);
		}
	}
	.fui-avatar.lilac {
		color: var(--fui-colorPaletteLilacForeground2);
		background-color: var(--fui-colorPaletteLilacBackground2);
		&::before {
			color: var(--fui-colorPaletteLilacBorderActive);
		}
	}
	.fui-avatar.pink {
		color: var(--fui-colorPalettePinkForeground2);
		background-color: var(--fui-colorPalettePinkBackground2);
		&::before {
			color: var(--fui-colorPalettePinkBorderActive);
		}
	}
	.fui-avatar.magenta {
		color: var(--fui-colorPaletteMagentaForeground2);
		background-color: var(--fui-colorPaletteMagentaBackground2);
		&::before {
			color: var(--fui-colorPaletteMagentaBorderActive);
		}
	}
	.fui-avatar.plum {
		color: var(--fui-colorPalettePlumForeground2);
		background-color: var(--fui-colorPalettePlumBackground2);
		&::before {
			color: var(--fui-colorPalettePlumBorderActive);
		}
	}
	.fui-avatar.beige {
		color: var(--fui-colorPaletteBeigeForeground2);
		background-color: var(--fui-colorPaletteBeigeBackground2);
		&::before {
			color: var(--fui-colorPaletteBeigeBorderActive);
		}
	}
	.fui-avatar.mink {
		color: var(--fui-colorPaletteMinkForeground2);
		background-color: var(--fui-colorPaletteMinkBackground2);
		&::before {
			color: var(--fui-colorPaletteMinkBorderActive);
		}
	}
	.fui-avatar.platinum {
		color: var(--fui-colorPalettePlatinumForeground2);
		background-color: var(--fui-colorPalettePlatinumBackground2);
		&::before {
			color: var(--fui-colorPalettePlatinumBorderActive);
		}
	}
	.fui-avatar.anchor {
		color: var(--fui-colorPaletteAnchorForeground2);
		background-color: var(--fui-colorPaletteAnchorBackground2);
		&::before {
			color: var(--fui-colorPaletteAnchorBorderActive);
		}
	}

	/**  ****************************************************************/

	.fui-avatar.active-or-inactive {
		transform: perspective(
			1px
		); /* Work-around for text pixel snapping at        the end of the animation */
		transition-property: transform, opacity;
		transition-duration: var(--transition-duration-ultra-slow), var(--transition-duration-faster);
		transition-timing-function:
			var(--transitionTimingFunction.easy-ease-max), var(--transitionTimingFunction.linear);

		@media screen and (prefers-reduced-motion: reduce) {
			transition-duration: 0.01ms;
		}

		&::before {
			position: absolute;
			inset: 0;
			content: '';
			border-radius: inherit;
			transition-property: margin, opacity;
			transition-duration: var(--transition-duration-ultra-slow), var(--transition-duration-slower);
			transition-timing-function:
				var(--transitionTimingFunction.easy-ease-max), var(--transitionTimingFunction.linear);

			@media screen and (prefers-reduced-motion: reduce) {
				transition-duration: 0.01ms;
			}
		}

		/** Ring ************************************************************/

		.fui-avatar.ring,
		.fui-avatar.ring-shadow {
			/* @apply ring-0; */

			&::before {
				border-style: solid;
				border-color: currentColor;

				/* &:is(
						.size-12,
						.size-16,
						.size-20,
						.size-24,
						.size-28,
						.size-32,
						.size-36,
						.size-40,
						.size-48
					) {
					@apply ring-thick;
				} */
				&:is(.size-56, .size-64) {
					/* @apply ring-thicker; */
				}
				&:is(.size-72, .size-96, .size-120, .size-128) {
					/* @apply ring-thickest; */
				}
			}
		}

		.fui-avatar.shadow,
		.fui-avatar.ring-shadow {
			&::before {
				border-style: solid;
				border-color: currentColor;

				&:is(.size-12, .size-16, .size-20, .size-24, .size-28) {
					/* @apply shadow-4; */
				}
				&:is(.size-32, .size-36, .size-40, .size-48) {
					/* @apply shadow-8; */
				}
				&:is(.size-56, .size-64) {
					/* @apply shadow-16; */
				}
				&:is(.size-72, .size-96, .size-120, .size-128) {
					/* @apply shadow-28; */
				}
			}
		}
	}

	.fui-avatar.inactive {
		opacity: 0.8;
		transform: scale(0.875);
		transition-timing-function:
			var(--transitionTimingFunction.decelerate-min), var(--transitionTimingFunction.linear);

		&::before {
			margin: 0;
			opacity: 0;
			transition-timing-function:
				var(--transitionTimingFunction.decelerate-min), var(--transitionTimingFunction.linear);
		}
	}

	.fui-avatar.badge {
		/* @apply absolute bottom-0 right-0; */
		position: absolute;
		bottom: 0;
		right: 0;
		box-shadow: 0 0 0 var(--border-width-thin) var(--fui-colorNeutralBackground1);
	}
	.fui-avatar.badge-lg {
		box-shadow: 0 0 0 var(--border-width-thick) var(--fui-colorNeutralBackground1);
	}

	.fui-avatar > :global(.fui-avatar-amage) {
		/* @apply absolute left-0 top-0 h-full w-full; */
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		object-fit: cover;
		vertical-align: top;
	}

	.fui-avatar > :global(.fui-avatar-initials) {
		/* @apply absolute left-0 top-0 box-border flex h-full w-full select-none items-center justify-center text-center; */
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
		text-align: center;
		line-height: 1;
		border: var(--border-width-thin) solid var(--fui-colorTransparentStroke);
		vertical-align: center;
		border-radius: inherit;
	}

	.fui-avatar > :global(.fui-avatar-icon) {
		/* @apply absolute left-0 top-0 box-border flex h-full w-full select-none items-center justify-center text-center; */
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
		text-align: center;
		line-height: 1;
		border: var(--border-width-thin) solid var(--fui-colorTransparentStroke);
		vertical-align: center;
		border-radius: inherit;
	}
</style>
