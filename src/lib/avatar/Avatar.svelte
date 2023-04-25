<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { Icon } from 'svelte-fluentui';
	import { classnames } from 'svelte-fluentui/internal';

	export let id: string | undefined = undefined;
	export let ariaLabel: string | undefined = undefined;
	export let alt: string | undefined = undefined;
	export let src: string | ComponentType;
	export let size:
		| '16'
		| '20'
		| '24'
		| '28'
		| '32'
		| '36'
		| '40'
		| '48'
		| '56'
		| '64'
		| '72'
		| '96'
		| '120'
		| '128' = '32';

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

	$: activeOrInactive = active === 'active' || active === 'inactive';
	$: ringStyle = activeAppearance === 'ring' || activeAppearance === 'ring-shadow';
	$: _badge = badge ? (+size > 64 ? 'lg' : true) : false;
</script>

<span
	class={classnames(
		'fui-avatar',
		{ size, 'active-or-inactive': activeOrInactive, badge: _badge },
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
		<span aria-hidden="true" class="fui-avatar-icon">
			<svg
				fill="currentColor"
				aria-hidden="true"
				width="1em"
				height="1em"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<svelte:component this={src} />
			</svg>
		</span>
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
		@apply relative inline-block rounded-full align-middle font-base text-base-300 font-semibold;

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
			color: var(--fds-colorNeutralForeground3);
			background-color: var(--fds-colorNeutralBackground6);
			/* The ::before element is the ring when active */
			&::before {
				color: var(--fds-colorBrandStroke1);
			}
		}
		&.brand {
			color: var(--fds-colorNeutralForegroundStaticInverted);
			background-color: var(--fds-colorBrandBackgroundStatic);
			&::before {
				color: var(--fds-colorBrandStroke1);
			}
		}
		&.dark-red {
			color: var(--fds-colorPaletteDarkRedForeground2);
			background-color: var(--fds-colorPaletteDarkRedBackground2);
			&::before {
				color: var(--fds-colorPaletteDarkRedBorderActive);
			}
		}
		&.cranberry {
			color: var(--fds-colorPaletteCranberryForeground2);
			background-color: var(--fds-colorPaletteCranberryBackground2);
			&::before {
				color: var(--fds-colorPaletteCranberryBorderActive);
			}
		}
		&.red {
			color: var(--fds-colorPaletteRedForeground2);
			background-color: var(--fds-colorPaletteRedBackground2);
			&::before {
				color: var(--fds-colorPaletteRedBorderActive);
			}
		}
		&.pumpkin {
			color: var(--fds-colorPalettePumpkinForeground2);
			background-color: var(--fds-colorPalettePumpkinBackground2);
			&::before {
				color: var(--fds-colorPalettePumpkinBorderActive);
			}
		}
		&.peach {
			color: var(--fds-colorPalettePeachForeground2);
			background-color: var(--fds-colorPalettePeachBackground2);
			&::before {
				color: var(--fds-colorPalettePeachBorderActive);
			}
		}
		&.marigold {
			color: var(--fds-colorPaletteMarigoldForeground2);
			background-color: var(--fds-colorPaletteMarigoldBackground2);
			&::before {
				color: var(--fds-colorPaletteMarigoldBorderActive);
			}
		}
		&.gold {
			color: var(--fds-colorPaletteGoldForeground2);
			background-color: var(--fds-colorPaletteGoldBackground2);
			&::before {
				color: var(--fds-colorPaletteGoldBorderActive);
			}
		}
		&.brass {
			color: var(--fds-colorPaletteBrassForeground2);
			background-color: var(--fds-colorPaletteBrassBackground2);
			&::before {
				color: var(--fds-colorPaletteBrassBorderActive);
			}
		}
		&.brown {
			color: var(--fds-colorPaletteBrownForeground2);
			background-color: var(--fds-colorPaletteBrownBackground2);
			&::before {
				color: var(--fds-colorPaletteBrownBorderActive);
			}
		}
		&.forest {
			color: var(--fds-colorPaletteForestForeground2);
			background-color: var(--fds-colorPaletteForestBackground2);
			&::before {
				color: var(--fds-colorPaletteForestBorderActive);
			}
		}
		&.seafoam {
			color: var(--fds-colorPaletteSeafoamForeground2);
			background-color: var(--fds-colorPaletteSeafoamBackground2);
			&::before {
				color: var(--fds-colorPaletteSeafoamBorderActive);
			}
		}
		&.dark-green {
			color: var(--fds-colorPaletteDarkGreenForeground2);
			background-color: var(--fds-colorPaletteDarkGreenBackground2);
			&::before {
				color: var(--fds-colorPaletteDarkGreenBorderActive);
			}
		}
		&.light-teal {
			color: var(--fds-colorPaletteLightTealForeground2);
			background-color: var(--fds-colorPaletteLightTealBackground2);
			&::before {
				color: var(--fds-colorPaletteLightTealBorderActive);
			}
		}
		&.teal {
			color: var(--fds-colorPaletteTealForeground2);
			background-color: var(--fds-colorPaletteTealBackground2);
			&::before {
				color: var(--fds-colorPaletteTealBorderActive);
			}
		}
		&.steel {
			color: var(--fds-colorPaletteSteelForeground2);
			background-color: var(--fds-colorPaletteSteelBackground2);
			&::before {
				color: var(--fds-colorPaletteSteelBorderActive);
			}
		}
		&.blue {
			color: var(--fds-colorPaletteBlueForeground2);
			background-color: var(--fds-colorPaletteBlueBackground2);
			&::before {
				color: var(--fds-colorPaletteBlueBorderActive);
			}
		}
		&.royal-blue {
			color: var(--fds-colorPaletteRoyalBlueForeground2);
			background-color: var(--fds-colorPaletteRoyalBlueBackground2);
			&::before {
				color: var(--fds-colorPaletteRoyalBlueBorderActive);
			}
		}
		&.cornflower {
			color: var(--fds-colorPaletteCornflowerForeground2);
			background-color: var(--fds-colorPaletteCornflowerBackground2);
			&::before {
				color: var(--fds-colorPaletteCornflowerBorderActive);
			}
		}
		&.navy {
			color: var(--fds-colorPaletteNavyForeground2);
			background-color: var(--fds-colorPaletteNavyBackground2);
			&::before {
				color: var(--fds-colorPaletteNavyBorderActive);
			}
		}
		&.lavender {
			color: var(--fds-colorPaletteLavenderForeground2);
			background-color: var(--fds-colorPaletteLavenderBackground2);
			&::before {
				color: var(--fds-colorPaletteLavenderBorderActive);
			}
		}
		&.purple {
			color: var(--fds-colorPalettePurpleForeground2);
			background-color: var(--fds-colorPalettePurpleBackground2);
			&::before {
				color: var(--fds-colorPalettePurpleBorderActive);
			}
		}
		&.grape {
			color: var(--fds-colorPaletteGrapeForeground2);
			background-color: var(--fds-colorPaletteGrapeBackground2);
			&::before {
				color: var(--fds-colorPaletteGrapeBorderActive);
			}
		}
		&.lilac {
			color: var(--fds-colorPaletteLilacForeground2);
			background-color: var(--fds-colorPaletteLilacBackground2);
			&::before {
				color: var(--fds-colorPaletteLilacBorderActive);
			}
		}
		&.pink {
			color: var(--fds-colorPalettePinkForeground2);
			background-color: var(--fds-colorPalettePinkBackground2);
			&::before {
				color: var(--fds-colorPalettePinkBorderActive);
			}
		}
		&.magenta {
			color: var(--fds-colorPaletteMagentaForeground2);
			background-color: var(--fds-colorPaletteMagentaBackground2);
			&::before {
				color: var(--fds-colorPaletteMagentaBorderActive);
			}
		}
		&.plum {
			color: var(--fds-colorPalettePlumForeground2);
			background-color: var(--fds-colorPalettePlumBackground2);
			&::before {
				color: var(--fds-colorPalettePlumBorderActive);
			}
		}
		&.beige {
			color: var(--fds-colorPaletteBeigeForeground2);
			background-color: var(--fds-colorPaletteBeigeBackground2);
			&::before {
				color: var(--fds-colorPaletteBeigeBorderActive);
			}
		}
		&.mink {
			color: var(--fds-colorPaletteMinkForeground2);
			background-color: var(--fds-colorPaletteMinkBackground2);
			&::before {
				color: var(--fds-colorPaletteMinkBorderActive);
			}
		}
		&.platinum {
			color: var(--fds-colorPalettePlatinumForeground2);
			background-color: var(--fds-colorPalettePlatinumBackground2);
			&::before {
				color: var(--fds-colorPalettePlatinumBorderActive);
			}
		}
		&.anchor {
			color: var(--fds-colorPaletteAnchorForeground2);
			background-color: var(--fds-colorPaletteAnchorBackground2);
			&::before {
				color: var(--fds-colorPaletteAnchorBorderActive);
			}
		}

		/**  ****************************************************************/

		&.active-or-inactive {
			transform: perspective(
				1px
			); /* Work-around for text pixel snapping at        the end of the animation */
			transition-property: transform, opacity;
			transition-duration: theme(transitionDuration.ultra-slow), theme(transitionDuration.faster);
			transition-timing-function: theme(transitionTimingFunction.easyEase-max),
				theme(transitionTimingFunction.linear);

			@media screen and (prefers-reduced-motion: reduce) {
				transition-duration: 0.01ms;
			}

			&::before {
				@apply absolute inset-0;
				content: '';
				border-radius: inherit;
				transition-property: margin, opacity;
				transition-duration: theme(transitionDuration.ultra-slow), theme(transitionDuration.slower);
				transition-timing-function: theme(transitionTimingFunction.easyEase-max),
					theme(transitionTimingFunction.linear);

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

					&:is(
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
			transition-timing-function: theme(transitionTimingFunction.decelerate-min),
				theme(transitionTimingFunction.linear);

			&::before {
				@apply m-0;
				opacity: 0;
				transition-timing-function: theme(transitionTimingFunction.decelerate-min),
					theme(transitionTimingFunction.linear);
			}
		}

		&.badge {
			@apply absolute bottom-0 right-0;
			box-shadow: 0 0 0 theme(borderWidth.thin) var(--fds-colorNeutralBackground1);
		}
		&.badge-lg {
			box-shadow: 0 0 0 theme(borderWidth.thick) var(--fds-colorNeutralBackground1);
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
		border: theme(borderWidth.thin) solid var(--fds-colorTransparentStroke);
		vertical-align: center;
		border-radius: inherit;
	}

	.fui-avatar > :global(.fui-avatar-icon) {
		@apply absolute left-0 top-0 box-border flex h-full w-full select-none items-center justify-center text-center;
		line-height: 1;
		border: theme(borderWidth.thin) solid var(--fds-colorTransparentStroke);
		vertical-align: center;
		border-radius: inherit;
	}
</style>
