<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { Icon } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';

	export let id: string | undefined = undefined;
	export let ariaLabel: string | undefined = undefined;
	export let alt: string | undefined = undefined;
	export let src: string | ComponentType;
	export let size: '16' | '20' | '24' | '28' | '32' | '36' | '40' | '48' | '56' | '64' | '72' | '96' | '120' | '128' = '32';

	export let color:
		| 'neutral'
		| 'brand'
		| 'dark-red'
		| 'cranberry'
		| 'red'
		| 'pumpkin'
		| 'peach'
		| 'marigold'
		| 'gold'
		| 'brass'
		| 'brown'
		| 'forest'
		| 'seafoam'
		| 'dark-green'
		| 'light-teal'
		| 'teal'
		| 'steel'
		| 'blue'
		| 'royal-blue'
		| 'cornflower'
		| 'navy'
		| 'lavender'
		| 'purple'
		| 'grape'
		| 'lilac'
		| 'pink'
		| 'magenta'
		| 'plum'
		| 'beige'
		| 'mink'
		| 'platinum'
		| 'anchor' = 'neutral';
	export let badge: boolean = false;
	export let shape: 'circular' | 'square' = 'circular';
	export let active: 'active' | 'inactive' | 'unset' = 'unset';
	export let activeAppearance: 'ring' | 'shadow' | 'ring-shadow' = 'ring';
	let klass = '';
	export { klass as class };

	$: active_or_inactive = active === 'active' || active === 'inactive';
	$: ring_style = activeAppearance === 'ring' || activeAppearance === 'ring-shadow';
	$: _badge = badge ? (+size > 64 ? 'lg' : true) : false;
</script>

<span
	class={classnames(
		'fui-avatar',
		{ size, 'active-or-inactive': active_or_inactive, badge: _badge },
		active === 'active' ? activeAppearance : '',
		shape,
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
		<Icon aria-hidden="true" class="fui-avatar-icon text-current p-[6px]">
			<svelte:component this={src} />
		</Icon>
	{/if}
</span>

<style lang="postcss">
	.square-sm {
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
	}

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

	.icon-12 {
		--fui-avatar-icon-size: 12px;
		font-size: var(--fui-avatar-icon-size);
	}
	.icon-16 {
		--fui-avatar-icon-size: 16px;
		font-size: var(--fui-avatar-icon-size);
	}
	.icon-20 {
		--fui-avatar-icon-size: 20px;
		font-size: var(--fui-avatar-icon-size);
	}
	.icon-24 {
		--fui-avatar-icon-size: 24px;
		font-size: var(--fui-avatar-icon-size);
	}
	.icon-28 {
		--fui-avatar-icon-size: 28px;
		font-size: var(--fui-avatar-icon-size);
	}
	.icon-32 {
		--fui-avatar-icon-size: 32px;
		font-size: var(--fui-avatar-icon-size);
	}
	.icon-48 {
		--fui-avatar-icon-size: 48px;
		font-size: var(--fui-avatar-icon-size);
	}

	.ring-thick {
		margin: calc(-2 * theme(borderWidth.thick));
		border-width: theme(borderWidth.thick);
	}

	.ring-thicker {
		margin: calc(-2 * theme(borderWidth.thicker));
		border-width: theme(borderWidth.thicker);
	}

	.ring-thickest {
		margin: calc(-2 * theme(borderWidth.thickest));
		border-width: theme(borderWidth.thickest);
	}

	.fui-avatar {
		@apply font-base text-base-300 relative inline-block rounded-full align-middle font-semibold;

		flex-shrink: 0;
		width: 32px;
		height: 32px;

		/** Size ************************************************************/

		&.size-12 {
			@apply icon-12 text-base-100;
			width: 16px;
			height: 16px;
		}
		&.size-16 {
			@apply icon-12 text-base-100;
			width: 16px;
			height: 16px;
		}
		&.size-20 {
			@apply icon-16 text-base-100;
			width: 20px;
			height: 20px;
		}
		&.size-24 {
			@apply icon-16 text-base-100;
			width: 24px;
			height: 24px;
		}
		&.size-28 {
			@apply icon-20 text-base-200;
			width: 28px;
			height: 28px;
		}
		&.size-32 {
			@apply icon-20;
			width: 32px;
			height: 32px;
		}
		&.size-36 {
			@apply icon-20;
			width: 36px;
			height: 36px;
		}
		&.size-40 {
			@apply icon-20;
			width: 40px;
			height: 40px;
		}
		&.size-48 {
			@apply icon-24 text-base-400;
			width: 48;
			height: 48;
		}
		&.size-56 {
			@apply icon-28 text-base-400;
			width: 56px;
			height: 56px;
		}
		&.size-64 {
			@apply icon-32 text-base-500;
			width: 64px;
			height: 64px;
		}
		&.size-72 {
			@apply icon-32 text-base-500;
			width: 72px;
			height: 72px;
		}
		&.size-96 {
			@apply icon-48 text-base-500;
			width: 96px;
			height: 96px;
		}
		&.size-120 {
			@apply icon-48;
			width: 120px;
			height: 120px;
		}
		&.size-128 {
			@apply icon-48;
			width: 128px;
			height: 128px;
		}

		&.square {
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
		}

		/** Color ***********************************************************/

		&.neutral {
			color: var(--fui-colorNeutralForeground3);
			background-color: var(--fui-colorNeutralBackground6);
			/* The ::before element is the ring when active */
			&::before {
				color: var(--fui-colorBrandStroke1);
			}
		}
		&.brand {
			color: var(--fui-colorNeutralForegroundStaticInverted);
			background-color: var(--fui-colorBrandBackgroundStatic);
			&::before {
				color: var(--fui-colorBrandStroke1);
			}
		}
		&.dark-red {
			color: var(--fui-colorPaletteDarkRedForeground2);
			background-color: var(--fui-colorPaletteDarkRedBackground2);
			&::before {
				color: var(--fui-colorPaletteDarkRedBorderActive);
			}
		}
		&.cranberry {
			color: var(--fui-colorPaletteCranberryForeground2);
			background-color: var(--fui-colorPaletteCranberryBackground2);
			&::before {
				color: var(--fui-colorPaletteCranberryBorderActive);
			}
		}
		&.red {
			color: var(--fui-colorPaletteRedForeground2);
			background-color: var(--fui-colorPaletteRedBackground2);
			&::before {
				color: var(--fui-colorPaletteRedBorderActive);
			}
		}
		&.pumpkin {
			color: var(--fui-colorPalettePumpkinForeground2);
			background-color: var(--fui-colorPalettePumpkinBackground2);
			&::before {
				color: var(--fui-colorPalettePumpkinBorderActive);
			}
		}
		&.peach {
			color: var(--fui-colorPalettePeachForeground2);
			background-color: var(--fui-colorPalettePeachBackground2);
			&::before {
				color: var(--fui-colorPalettePeachBorderActive);
			}
		}
		&.marigold {
			color: var(--fui-colorPaletteMarigoldForeground2);
			background-color: var(--fui-colorPaletteMarigoldBackground2);
			&::before {
				color: var(--fui-colorPaletteMarigoldBorderActive);
			}
		}
		&.gold {
			color: var(--fui-colorPaletteGoldForeground2);
			background-color: var(--fui-colorPaletteGoldBackground2);
			&::before {
				color: var(--fui-colorPaletteGoldBorderActive);
			}
		}
		&.brass {
			color: var(--fui-colorPaletteBrassForeground2);
			background-color: var(--fui-colorPaletteBrassBackground2);
			&::before {
				color: var(--fui-colorPaletteBrassBorderActive);
			}
		}
		&.brown {
			color: var(--fui-colorPaletteBrownForeground2);
			background-color: var(--fui-colorPaletteBrownBackground2);
			&::before {
				color: var(--fui-colorPaletteBrownBorderActive);
			}
		}
		&.forest {
			color: var(--fui-colorPaletteForestForeground2);
			background-color: var(--fui-colorPaletteForestBackground2);
			&::before {
				color: var(--fui-colorPaletteForestBorderActive);
			}
		}
		&.seafoam {
			color: var(--fui-colorPaletteSeafoamForeground2);
			background-color: var(--fui-colorPaletteSeafoamBackground2);
			&::before {
				color: var(--fui-colorPaletteSeafoamBorderActive);
			}
		}
		&.dark-green {
			color: var(--fui-colorPaletteDarkGreenForeground2);
			background-color: var(--fui-colorPaletteDarkGreenBackground2);
			&::before {
				color: var(--fui-colorPaletteDarkGreenBorderActive);
			}
		}
		&.light-teal {
			color: var(--fui-colorPaletteLightTealForeground2);
			background-color: var(--fui-colorPaletteLightTealBackground2);
			&::before {
				color: var(--fui-colorPaletteLightTealBorderActive);
			}
		}
		&.teal {
			color: var(--fui-colorPaletteTealForeground2);
			background-color: var(--fui-colorPaletteTealBackground2);
			&::before {
				color: var(--fui-colorPaletteTealBorderActive);
			}
		}
		&.steel {
			color: var(--fui-colorPaletteSteelForeground2);
			background-color: var(--fui-colorPaletteSteelBackground2);
			&::before {
				color: var(--fui-colorPaletteSteelBorderActive);
			}
		}
		&.blue {
			color: var(--fui-colorPaletteBlueForeground2);
			background-color: var(--fui-colorPaletteBlueBackground2);
			&::before {
				color: var(--fui-colorPaletteBlueBorderActive);
			}
		}
		&.royal-blue {
			color: var(--fui-colorPaletteRoyalBlueForeground2);
			background-color: var(--fui-colorPaletteRoyalBlueBackground2);
			&::before {
				color: var(--fui-colorPaletteRoyalBlueBorderActive);
			}
		}
		&.cornflower {
			color: var(--fui-colorPaletteCornflowerForeground2);
			background-color: var(--fui-colorPaletteCornflowerBackground2);
			&::before {
				color: var(--fui-colorPaletteCornflowerBorderActive);
			}
		}
		&.navy {
			color: var(--fui-colorPaletteNavyForeground2);
			background-color: var(--fui-colorPaletteNavyBackground2);
			&::before {
				color: var(--fui-colorPaletteNavyBorderActive);
			}
		}
		&.lavender {
			color: var(--fui-colorPaletteLavenderForeground2);
			background-color: var(--fui-colorPaletteLavenderBackground2);
			&::before {
				color: var(--fui-colorPaletteLavenderBorderActive);
			}
		}
		&.purple {
			color: var(--fui-colorPalettePurpleForeground2);
			background-color: var(--fui-colorPalettePurpleBackground2);
			&::before {
				color: var(--fui-colorPalettePurpleBorderActive);
			}
		}
		&.grape {
			color: var(--fui-colorPaletteGrapeForeground2);
			background-color: var(--fui-colorPaletteGrapeBackground2);
			&::before {
				color: var(--fui-colorPaletteGrapeBorderActive);
			}
		}
		&.lilac {
			color: var(--fui-colorPaletteLilacForeground2);
			background-color: var(--fui-colorPaletteLilacBackground2);
			&::before {
				color: var(--fui-colorPaletteLilacBorderActive);
			}
		}
		&.pink {
			color: var(--fui-colorPalettePinkForeground2);
			background-color: var(--fui-colorPalettePinkBackground2);
			&::before {
				color: var(--fui-colorPalettePinkBorderActive);
			}
		}
		&.magenta {
			color: var(--fui-colorPaletteMagentaForeground2);
			background-color: var(--fui-colorPaletteMagentaBackground2);
			&::before {
				color: var(--fui-colorPaletteMagentaBorderActive);
			}
		}
		&.plum {
			color: var(--fui-colorPalettePlumForeground2);
			background-color: var(--fui-colorPalettePlumBackground2);
			&::before {
				color: var(--fui-colorPalettePlumBorderActive);
			}
		}
		&.beige {
			color: var(--fui-colorPaletteBeigeForeground2);
			background-color: var(--fui-colorPaletteBeigeBackground2);
			&::before {
				color: var(--fui-colorPaletteBeigeBorderActive);
			}
		}
		&.mink {
			color: var(--fui-colorPaletteMinkForeground2);
			background-color: var(--fui-colorPaletteMinkBackground2);
			&::before {
				color: var(--fui-colorPaletteMinkBorderActive);
			}
		}
		&.platinum {
			color: var(--fui-colorPalettePlatinumForeground2);
			background-color: var(--fui-colorPalettePlatinumBackground2);
			&::before {
				color: var(--fui-colorPalettePlatinumBorderActive);
			}
		}
		&.anchor {
			color: var(--fui-colorPaletteAnchorForeground2);
			background-color: var(--fui-colorPaletteAnchorBackground2);
			&::before {
				color: var(--fui-colorPaletteAnchorBorderActive);
			}
		}

		/**  ****************************************************************/

		&.active-or-inactive {
			transform: perspective(1px); /* Work-around for text pixel snapping at        the end of the animation */
			transition-property: transform, opacity;
			transition-duration: theme(transitionDuration.ultra-slow), theme(transitionDuration.faster);
			transition-timing-function: theme(transitionTimingFunction.easy-ease-max), theme(transitionTimingFunction.linear);

			@media screen and (prefers-reduced-motion: reduce) {
				transition-duration: 0.01ms;
			}

			&::before {
				@apply absolute inset-0;
				content: '';
				border-radius: inherit;
				transition-property: margin, opacity;
				transition-duration: theme(transitionDuration.ultra-slow), theme(transitionDuration.slower);
				transition-timing-function: theme(transitionTimingFunction.easy-ease-max), theme(transitionTimingFunction.linear);

				@media screen and (prefers-reduced-motion: reduce) {
					transition-duration: 0.01ms;
				}
			}

			/** Ring ************************************************************/

			&.ring,
			&.ring-shadow {
				@apply ring-0;

				&::before {
					border-style: solid;
					border-color: currentColor;

					&:is(.size-12, .size-16, .size-20, .size-24, .size-28, .size-32, .size-36, .size-40, .size-48) {
						@apply ring-thick;
					}
					&:is(.size-56, .size-64) {
						@apply ring-thicker;
					}
					&:is(.size-72, .size-96, .size-120, .size-128) {
						@apply ring-thickest;
					}
				}
			}

			&.shadow,
			&.ring-shadow {
				&::before {
					border-style: solid;
					border-color: currentColor;

					&:is(.size-12, .size-16, .size-20, .size-24, .size-28) {
						@apply shadow-4;
					}
					&:is(.size-32, .size-36, .size-40, .size-48) {
						@apply shadow-8;
					}
					&:is(.size-56, .size-64) {
						@apply shadow-16;
					}
					&:is(.size-72, .size-96, .size-120, .size-128) {
						@apply shadow-28;
					}
				}
			}
		}

		&.inactive {
			opacity: 0.8;
			transform: scale(0.875);
			transition-timing-function: theme(transitionTimingFunction.decelerate-min), theme(transitionTimingFunction.linear);

			&::before {
				@apply m-0;
				opacity: 0;
				transition-timing-function: theme(transitionTimingFunction.decelerate-min), theme(transitionTimingFunction.linear);
			}
		}

		&.badge {
			@apply absolute bottom-0 right-0;
			box-shadow: 0 0 0 theme(borderWidth.thin) var(--fui-colorNeutralBackground1);
		}
		&.badge-lg {
			box-shadow: 0 0 0 theme(borderWidth.thick) var(--fui-colorNeutralBackground1);
		}
	}

	.fui-avatar > :global(.fui-avatar-amage) {
		@apply absolute left-0 top-0 h-full w-full;
		border-radius: inherit;
		object-fit: cover;
		vertical-align: top;
	}

	.fui-avatar > :global(.fui-avatar-initials) {
		@apply absolute left-0 top-0 box-border flex h-full w-full select-none items-center justify-center text-center;
		line-height: 1;
		border: theme(borderWidth.thin) solid var(--fui-colorTransparentStroke);
		vertical-align: center;
		border-radius: inherit;
	}

	.fui-avatar > :global(.fui-avatar-icon) {
		@apply absolute left-0 top-0 box-border flex h-full w-full select-none items-center justify-center text-center;
		line-height: 1;
		border: theme(borderWidth.thin) solid var(--fui-colorTransparentStroke);
		vertical-align: center;
		border-radius: inherit;
	}
</style>
