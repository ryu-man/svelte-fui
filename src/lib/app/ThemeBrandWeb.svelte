<script lang="ts">
	import { onMount } from 'svelte';
	import { getFluentAppContext } from './context';

	export let scheme: 'light' | 'dark' | 'auto' = 'auto';

	const { themeElement$ } = getFluentAppContext();

	onMount(() => {});
</script>

<div class="fds-theme theme-brand-web scheme-{scheme}" bind:this={$themeElement$}>
	<slot />
</div>

<style lang="postcss">
	div {
		display: contents;
	}

	.light {
		--fds-colorNeutralForeground1: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground1Hover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground1Pressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground1Selected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground2: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fds-colorNeutralForeground2Hover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground2Pressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground2Selected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground2BrandHover: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorNeutralForeground2BrandPressed: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorNeutralForeground2BrandSelected: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorNeutralForeground3: theme(colors.grey-38); /* #616161 Global.Color.Grey.38 */
		--fds-colorNeutralForeground3Hover: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fds-colorNeutralForeground3Pressed: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fds-colorNeutralForeground3Selected: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fds-colorNeutralForeground3BrandHover: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorNeutralForeground3BrandPressed: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorNeutralForeground3BrandSelected: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorNeutralForeground4: theme(colors.grey-44); /* #707070 Global.Color.Grey.44 */
		--fds-colorNeutralForegroundDisabled: theme(colors.grey-74); /* #bdbdbd Global.Color.Grey.74 */
		--fds-colorNeutralForegroundInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.WhiteAlpha.40 */
		--fds-colorBrandForegroundLink: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorBrandForegroundLinkHover: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorBrandForegroundLinkPressed: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fds-colorBrandForegroundLinkSelected: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorNeutralForeground2Link: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fds-colorNeutralForeground2LinkHover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground2LinkPressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForeground2LinkSelected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorCompoundBrandForeground1: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorCompoundBrandForeground1Hover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorCompoundBrandForeground1Pressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorBrandForeground1: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandForeground2: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorNeutralForeground1Static: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForegroundStaticInverted: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInverted: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedHover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedPressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedSelected: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInverted2: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundOnBrand: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLink: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLinkHover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLinkPressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLinkSelected: white; /* #ffffff Global.Color.White */
		--fds-colorBrandForegroundInverted: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorBrandForegroundInvertedHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fds-colorBrandForegroundInvertedPressed: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorBrandForegroundOnLight: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandForegroundOnLightHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorBrandForegroundOnLightPressed: theme(colors.brand-web-50); /* #004c87 Global.Color.Brand.50 */
		--fds-colorBrandForegroundOnLightSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorNeutralBackground1: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralBackground1Hover: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fds-colorNeutralBackground1Pressed: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fds-colorNeutralBackground1Selected: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fds-colorNeutralBackground2: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fds-colorNeutralBackground2Hover: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fds-colorNeutralBackground2Pressed: theme(colors.grey-86); /* #dbdbdb Global.Color.Grey.86 */
		--fds-colorNeutralBackground2Selected: theme(colors.grey-90); /* #e6e6e6 Global.Color.Grey.90 */
		--fds-colorNeutralBackground3: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fds-colorNeutralBackground3Hover: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fds-colorNeutralBackground3Pressed: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fds-colorNeutralBackground3Selected: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fds-colorNeutralBackground4: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fds-colorNeutralBackground4Hover: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fds-colorNeutralBackground4Pressed: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fds-colorNeutralBackground4Selected: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralBackground5: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fds-colorNeutralBackground5Hover: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fds-colorNeutralBackground5Pressed: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fds-colorNeutralBackground5Selected: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fds-colorNeutralBackground6: theme(colors.grey-90); /* #e6e6e6 Global.Color.Grey.90 */
		--fds-colorNeutralBackgroundInverted: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fds-colorNeutralBackgroundStatic: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fds-colorNeutralBackgroundAlpha: theme(colors.white-alpha-50); /* rgba(255, 255, 255, 0.5) Global.Color.WhiteAlpha.50 */
		--fds-colorNeutralBackgroundAlpha2: theme(colors.white-alpha-80); /* rgba(255, 255, 255, 0.8) Global.Color.WhiteAlpha.80 */
		--fds-colorSubtleBackground: transparent; /* transparent undefined */
		--fds-colorSubtleBackgroundHover: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fds-colorSubtleBackgroundPressed: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fds-colorSubtleBackgroundSelected: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fds-colorSubtleBackgroundLightAlphaHover: theme(colors.white-alpha-70); /* rgba(255, 255, 255, 0.7) Global.Color.WhiteAlpha.70 */
		--fds-colorSubtleBackgroundLightAlphaPressed: theme(colors.white-alpha-50); /* rgba(255, 255, 255, 0.5) Global.Color.WhiteAlpha.50 */
		--fds-colorSubtleBackgroundLightAlphaSelected: transparent; /* transparent undefined */
		--fds-colorSubtleBackgroundInverted: transparent; /* transparent undefined */
		--fds-colorSubtleBackgroundInvertedHover: theme(colors.black-alpha-10); /* rgba(0, 0, 0, 0.1) Global.Color.BlackAlpha.10 */
		--fds-colorSubtleBackgroundInvertedPressed: theme(colors.black-alpha-30); /* rgba(0, 0, 0, 0.3) Global.Color.BlackAlpha.30 */
		--fds-colorSubtleBackgroundInvertedSelected: theme(colors.black-alpha-20); /* rgba(0, 0, 0, 0.2) Global.Color.BlackAlpha.20 */
		--fds-colorTransparentBackground: transparent; /* transparent undefined */
		--fds-colorTransparentBackgroundHover: transparent; /* transparent undefined */
		--fds-colorTransparentBackgroundPressed: transparent; /* transparent undefined */
		--fds-colorTransparentBackgroundSelected: transparent; /* transparent undefined */
		--fds-colorNeutralBackgroundDisabled: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fds-colorNeutralBackgroundInvertedDisabled: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.WhiteAlpha.10 */
		--fds-colorNeutralStencil1: theme(colors.grey-90); /* #e6e6e6 Global.Color.Grey.90 */
		--fds-colorNeutralStencil2: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fds-colorNeutralStencil1Alpha: theme(colors.black-alpha-10); /* rgba(0, 0, 0, 0.1) Global.Color.BlackAlpha.10 */
		--fds-colorNeutralStencil2Alpha: theme(colors.black-alpha-5); /* rgba(0, 0, 0, 0.05) Global.Color.BlackAlpha.5 */
		--fds-colorBackgroundOverlay: theme(colors.black-alpha-40); /* rgba(0, 0, 0, 0.4) Global.Color.BlackAlpha.40 */
		--fds-colorScrollbarOverlay: theme(colors.black-alpha-50); /* rgba(0, 0, 0, 0.5) Global.Color.BlackAlpha.50 */
		--fds-colorBrandBackground: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandBackgroundHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorBrandBackgroundPressed: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fds-colorBrandBackgroundSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorCompoundBrandBackground: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorCompoundBrandBackgroundHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorCompoundBrandBackgroundPressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorBrandBackgroundStatic: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandBackground2: theme(colors.brand-web-160); /* #eff6fc Global.Color.Brand.160 */
		--fds-colorBrandBackgroundInverted: white; /* #ffffff Global.Color.White */
		--fds-colorBrandBackgroundInvertedHover: theme(colors.brand-web-160); /* #eff6fc Global.Color.Brand.160 */
		--fds-colorBrandBackgroundInvertedPressed: theme(colors.brand-web-140); /* #c7e0f4 Global.Color.Brand.140 */
		--fds-colorBrandBackgroundInvertedSelected: theme(colors.brand-web-150); /* #deecf9 Global.Color.Brand.150 */
		--fds-colorNeutralStrokeAccessible: theme(colors.grey-38); /* #616161 Global.Color.Grey.38 */
		--fds-colorNeutralStrokeAccessibleHover: theme(colors.grey-34); /* #575757 Global.Color.Grey.34 */
		--fds-colorNeutralStrokeAccessiblePressed: theme(colors.grey-30); /* #4d4d4d Global.Color.Grey.30 */
		--fds-colorNeutralStrokeAccessibleSelected: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorNeutralStroke1: theme(colors.grey-82); /* #d1d1d1 Global.Color.Grey.82 */
		--fds-colorNeutralStroke1Hover: theme(colors.grey-78); /* #c7c7c7 Global.Color.Grey.78 */
		--fds-colorNeutralStroke1Pressed: theme(colors.grey-70); /* #b3b3b3 Global.Color.Grey.70 */
		--fds-colorNeutralStroke1Selected: theme(colors.grey-74); /* #bdbdbd Global.Color.Grey.74 */
		--fds-colorNeutralStroke2: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fds-colorNeutralStroke3: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fds-colorNeutralStrokeOnBrand: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralStrokeOnBrand2: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralStrokeOnBrand2Hover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralStrokeOnBrand2Pressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralStrokeOnBrand2Selected: white; /* #ffffff Global.Color.White */
		--fds-colorBrandStroke1: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandStroke2: theme(colors.brand-web-140); /* #c7e0f4 Global.Color.Brand.140 */
		--fds-colorCompoundBrandStroke: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorCompoundBrandStrokeHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorCompoundBrandStrokePressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorNeutralStrokeDisabled: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fds-colorNeutralStrokeInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.WhiteAlpha.40 */
		--fds-colorTransparentStroke: transparent; /* transparent undefined */
		--fds-colorTransparentStrokeInteractive: transparent; /* transparent undefined */
		--fds-colorTransparentStrokeDisabled: transparent; /* transparent undefined */
		--fds-colorNeutralStrokeAlpha: theme(colors.black-alpha-5); /* rgba(0, 0, 0, 0.05) Global.Color.BlackAlpha.5 */
		--fds-colorStrokeFocus1: white; /* #ffffff Global.Color.White */
		--fds-colorStrokeFocus2: black; /* #000000 Global.Color.Black */
		--fds-colorNeutralShadowAmbient: rgba(0, 0, 0, 0.12); /* rgba(0,0,0,0.12) undefined */
		--fds-colorNeutralShadowKey: rgba(0, 0, 0, 0.14); /* rgba(0,0,0,0.14) undefined */
		--fds-colorNeutralShadowAmbientLighter: rgba(0, 0, 0, 0.06); /* rgba(0,0,0,0.06) undefined */
		--fds-colorNeutralShadowKeyLighter: rgba(0, 0, 0, 0.07); /* rgba(0,0,0,0.07) undefined */
		--fds-colorNeutralShadowAmbientDarker: rgba(0, 0, 0, 0.2); /* rgba(0,0,0,0.20) undefined */
		--fds-colorNeutralShadowKeyDarker: rgba(0, 0, 0, 0.24); /* rgba(0,0,0,0.24) undefined */
		--fds-colorBrandShadowAmbient: rgba(0, 0, 0, 0.3); /* rgba(0,0,0,0.30) undefined */
		--fds-colorBrandShadowKey: rgba(0, 0, 0, 0.25); /* rgba(0,0,0,0.25) undefined */

		/*******************************/

		/* Color palette tokens */

		/* Color palette red tokens */
		--fds-colorPaletteRedBackground1: theme(colors.red-tint60);
		--fds-colorPaletteRedBackground2: theme(colors.red-tint40);
		--fds-colorPaletteRedBackground3: theme(colors.red-primary);
		--fds-colorPaletteRedBorderActive: theme(colors.red-primary);
		--fds-colorPaletteRedBorder1: theme(colors.red-tint40);
		--fds-colorPaletteRedBorder2: theme(colors.red-primary);
		--fds-colorPaletteRedForeground1: theme(colors.red-shade10);
		--fds-colorPaletteRedForeground2: theme(colors.red-shade30);
		/* --fds-colorPaletteRedForeground3: theme(colors.red-primary); */
		--fds-colorPaletteRedForeground3: theme(colors.red-tint30);
		--fds-colorPaletteRedForegroundInverted: theme(colors.red-tint20);

		/* Color palette green tokens */
		--fds-colorPaletteGreenBackground1: theme(colors.green-tint60);
		--fds-colorPaletteGreenBackground2: theme(colors.green-tint40);
		--fds-colorPaletteGreenBackground3: theme(colors.green-primary);
		--fds-colorPaletteGreenBorderActive: theme(colors.green-primary);
		--fds-colorPaletteGreenBorder1: theme(colors.green-tint40);
		--fds-colorPaletteGreenBorder2: theme(colors.green-primary);
		--fds-colorPaletteGreenForeground1: theme(colors.green-shade10);
		--fds-colorPaletteGreenForeground2: theme(colors.green-shade30);
		--fds-colorPaletteGreenForeground3: theme(colors.green-primary);
		--fds-colorPaletteGreenForegroundInverted: theme(colors.green-tint20);

		/* Color palette dark orange tokens */
		--fds-colorPaletteDarkOrangeBackground1: theme(colors.dark-orange-tint60);
		--fds-colorPaletteDarkOrangeBackground2: theme(colors.dark-orange-tint40);
		--fds-colorPaletteDarkOrangeBackground3: theme(colors.dark-orange-primary);
		--fds-colorPaletteDarkOrangeBorderActive: theme(colors.dark-orange-primary);
		--fds-colorPaletteDarkOrangeBorder1: theme(colors.dark-orange-tint40);
		--fds-colorPaletteDarkOrangeBorder2: theme(colors.dark-orange-primary);
		--fds-colorPaletteDarkOrangeForeground1: theme(colors.dark-orange-shade10);
		--fds-colorPaletteDarkOrangeForeground2: theme(colors.dark-orange-shade30);
		--fds-colorPaletteDarkOrangeForeground3: theme(colors.dark-orange-primary);

		/* Color palette yellow tokens */
		--fds-colorPaletteYellowBackground1: theme(colors.yellow-tint60);
		--fds-colorPaletteYellowBackground2: theme(colors.yellow-tint40);
		--fds-colorPaletteYellowBackground3: theme(colors.yellow-primary);
		--fds-colorPaletteYellowBorderActive: theme(colors.yellow-primary);
		--fds-colorPaletteYellowBorder1: theme(colors.yellow-tint40);
		--fds-colorPaletteYellowBorder2: theme(colors.yellow-primary);
		/* --fds-colorPaletteYellowForeground1: theme(colors.yellow-shade10); */
		--fds-colorPaletteYellowForeground1: theme(colors.yellow-shade30);
		--fds-colorPaletteYellowForeground2: theme(colors.yellow-shade30);
		--fds-colorPaletteYellowForeground3: theme(colors.yellow-primary);
		--fds-colorPaletteYellowForegroundInverted: theme(colors.yellow-tint40);

		/* Color palette berry tokens */
		--fds-colorPaletteBerryBackground1: theme(colors.berry-tint60);
		--fds-colorPaletteBerryBackground2: theme(colors.berry-tint40);
		--fds-colorPaletteBerryBackground3: theme(colors.berry-primary);
		--fds-colorPaletteBerryBorderActive: theme(colors.berry-primary);
		--fds-colorPaletteBerryBorder1: theme(colors.berry-tint40);
		--fds-colorPaletteBerryBorder2: theme(colors.berry-primary);
		--fds-colorPaletteBerryForeground1: theme(colors.berry-shade10);
		--fds-colorPaletteBerryForeground2: theme(colors.berry-shade30);
		--fds-colorPaletteBerryForeground3: theme(colors.berry-primary);

		/* Color palette marigold tokens */
		--fds-colorPaletteMarigoldBackground1: theme(colors.marigold-tint60);
		--fds-colorPaletteMarigoldBackground2: theme(colors.marigold-tint40);
		--fds-colorPaletteMarigoldBackground3: theme(colors.marigold-primary);
		--fds-colorPaletteMarigoldBorderActive: theme(colors.marigold-primary);
		--fds-colorPaletteMarigoldBorder1: theme(colors.marigold-tint40);
		--fds-colorPaletteMarigoldBorder2: theme(colors.marigold-primary);
		--fds-colorPaletteMarigoldForeground1: theme(colors.marigold-shade10);
		--fds-colorPaletteMarigoldForeground2: theme(colors.marigold-shade30);
		--fds-colorPaletteMarigoldForeground3: theme(colors.marigold-primary);

		/* Color palette light green tokens */
		--fds-colorPaletteLightGreenBackground1: theme(colors.light-green-tint60);
		--fds-colorPaletteLightGreenBackground2: theme(colors.light-green-tint40);
		--fds-colorPaletteLightGreenBackground3: theme(colors.light-green-primary);
		--fds-colorPaletteLightGreenBorderActive: theme(colors.light-green-primary);
		--fds-colorPaletteLightGreenBorder1: theme(colors.light-green-tint40);
		--fds-colorPaletteLightGreenBorder2: theme(colors.light-green-primary);
		--fds-colorPaletteLightGreenForeground1: theme(colors.light-green-shade10);
		--fds-colorPaletteLightGreenForeground2: theme(colors.light-green-shade30);
		--fds-colorPaletteLightGreenForeground3: theme(colors.light-green-primary);

		/* Color palette anchor tokens */
		--fds-colorPaletteAnchorBackground2: theme(colors.anchor-tint40);
		--fds-colorPaletteAnchorBorderActive: theme(colors.anchor-primary);
		--fds-colorPaletteAnchorForeground2: theme(colors.anchor-shade30);

		/* Color palette beige tokens */
		--fds-colorPaletteBeigeBackground2: theme(colors.beige-tint40);
		--fds-colorPaletteBeigeBorderActive: theme(colors.beige-primary);
		--fds-colorPaletteBeigeForeground2: theme(colors.beige-shade30);

		/* Color palette blue tokens */
		--fds-colorPaletteBlueBackground2: theme(colors.blue-tint40);
		--fds-colorPaletteBlueBorderActive: theme(colors.blue-primary);
		--fds-colorPaletteBlueForeground2: theme(colors.blue-shade30);

		/* Color palette brass tokens */
		--fds-colorPaletteBrassBackground2: theme(colors.brass-tint40);
		--fds-colorPaletteBrassBorderActive: theme(colors.brass-primary);
		--fds-colorPaletteBrassForeground2: theme(colors.brass-shade30);

		/* Color palette brown tokens */
		--fds-colorPaletteBrownBackground2: theme(colors.brown-tint40);
		--fds-colorPaletteBrownBorderActive: theme(colors.brown-primary);
		--fds-colorPaletteBrownForeground2: theme(colors.brown-shade30);

		/* Color palette cornflower tokens */
		--fds-colorPaletteCornflowerBackground2: theme(colors.cornflower-tint40);
		--fds-colorPaletteCornflowerBorderActive: theme(colors.cornflower-primary);
		--fds-colorPaletteCornflowerForeground2: theme(colors.cornflower-shade30);

		/* Color palette cranberry tokens */
		--fds-colorPaletteCranberryBackground2: theme(colors.cranberry-tint40);
		--fds-colorPaletteCranberryBorderActive: theme(colors.cranberry-primary);
		--fds-colorPaletteCranberryForeground2: theme(colors.cranberry-shade30);

		/* Color palette dark green tokens */
		--fds-colorPaletteDarkGreenBackground2: theme(colors.dark-green-tint40);
		--fds-colorPaletteDarkGreenBorderActive: theme(colors.dark-green-primary);
		--fds-colorPaletteDarkGreenForeground2: theme(colors.dark-green-shade30);

		/* Color palette dark red tokens */
		--fds-colorPaletteDarkRedBackground2: theme(colors.dark-red-tint40);
		--fds-colorPaletteDarkRedBorderActive: theme(colors.dark-red-primary);
		--fds-colorPaletteDarkRedForeground2: theme(colors.dark-red-shade30);

		/* Color palette forest tokens */
		--fds-colorPaletteForestBackground2: theme(colors.forest-tint40);
		--fds-colorPaletteForestBorderActive: theme(colors.forest-primary);
		--fds-colorPaletteForestForeground2: theme(colors.forest-shade30);

		/* Color palette gold tokens */
		--fds-colorPaletteGoldBackground2: theme(colors.gold-tint40);
		--fds-colorPaletteGoldBorderActive: theme(colors.gold-primary);
		--fds-colorPaletteGoldForeground2: theme(colors.gold-shade30);

		/* Color palette grape tokens */
		--fds-colorPaletteGrapeBackground2: theme(colors.grape-tint40);
		--fds-colorPaletteGrapeBorderActive: theme(colors.grape-primary);
		--fds-colorPaletteGrapeForeground2: theme(colors.grape-shade30);

		/* Color palette lavender tokens */
		--fds-colorPaletteLavenderBackground2: theme(colors.lavender-tint40);
		--fds-colorPaletteLavenderBorderActive: theme(colors.lavender-primary);
		--fds-colorPaletteLavenderForeground2: theme(colors.lavender-shade30);

		/* Color palette light teal tokens */
		--fds-colorPaletteLightTealBackground2: theme(colors.light-teal-tint40);
		--fds-colorPaletteLightTealBorderActive: theme(colors.light-teal-primary);
		--fds-colorPaletteLightTealForeground2: theme(colors.light-teal-shade30);

		/* Color palette lilac tokens */
		--fds-colorPaletteLilacBackground2: theme(colors.lilac-tint40);
		--fds-colorPaletteLilacBorderActive: theme(colors.lilac-primary);
		--fds-colorPaletteLilacForeground2: theme(colors.lilac-shade30);

		/* Color palette magenta tokens */
		--fds-colorPaletteMagentaBackground2: theme(colors.magenta-tint40);
		--fds-colorPaletteMagentaBorderActive: theme(colors.magenta-primary);
		--fds-colorPaletteMagentaForeground2: theme(colors.magenta-shade30);

		/* Color palette mink tokens */
		--fds-colorPaletteMinkBackground2: theme(colors.mink-tint40);
		--fds-colorPaletteMinkBorderActive: theme(colors.mink-primary);
		--fds-colorPaletteMinkForeground2: theme(colors.mink-shade30);

		/* Color palette navy tokens */
		--fds-colorPaletteNavyBackground2: theme(colors.navy-tint40);
		--fds-colorPaletteNavyBorderActive: theme(colors.navy-primary);
		--fds-colorPaletteNavyForeground2: theme(colors.navy-shade30);

		/* Color palette peach tokens */
		--fds-colorPalettePeachBackground2: theme(colors.peach-tint40);
		--fds-colorPalettePeachBorderActive: theme(colors.peach-primary);
		--fds-colorPalettePeachForeground2: theme(colors.peach-shade30);

		/* Color palette pink tokens */
		--fds-colorPalettePinkBackground2: theme(colors.pink-tint40);
		--fds-colorPalettePinkBorderActive: theme(colors.pink-primary);
		--fds-colorPalettePinkForeground2: theme(colors.pink-shade30);

		/* Color palette platinum tokens */
		--fds-colorPalettePlatinumBackground2: theme(colors.platinum-tint40);
		--fds-colorPalettePlatinumBorderActive: theme(colors.platinum-primary);
		--fds-colorPalettePlatinumForeground2: theme(colors.platinum-shade30);

		/* Color palette plum tokens */
		--fds-colorPalettePlumBackground2: theme(colors.plum-tint40);
		--fds-colorPalettePlumBorderActive: theme(colors.plum-primary);
		--fds-colorPalettePlumForeground2: theme(colors.plum-shade30);

		/* Color palette pumpkin tokens */
		--fds-colorPalettePumpkinBackground2: theme(colors.pumpkin-tint40);
		--fds-colorPalettePumpkinBorderActive: theme(colors.pumpkin-primary);
		--fds-colorPalettePumpkinForeground2: theme(colors.pumpkin-shade30);

		/* Color palette purple tokens */
		--fds-colorPalettePurpleBackground2: theme(colors.purple-tint40);
		--fds-colorPalettePurpleBorderActive: theme(colors.purple-primary);
		--fds-colorPalettePurpleForeground2: theme(colors.purple-shade30);

		/* Color palette royal blue tokens */
		--fds-colorPaletteRoyalBlueBackground2: theme(colors.royal-blue-tint40);
		--fds-colorPaletteRoyalBlueBorderActive: theme(colors.royal-blue-primary);
		--fds-colorPaletteRoyalBlueForeground2: theme(colors.royal-blue-shade30);

		/* Color palette seafoam tokens */
		--fds-colorPaletteSeafoamBackground2: theme(colors.seafoam-tint40);
		--fds-colorPaletteSeafoamBorderActive: theme(colors.seafoam-primary);
		--fds-colorPaletteSeafoamForeground2: theme(colors.seafoam-shade30);

		/* Color palette steel tokens */
		--fds-colorPaletteSteelBackground2: theme(colors.steel-tint40);
		--fds-colorPaletteSteelBorderActive: theme(colors.steel-primary);
		--fds-colorPaletteSteelForeground2: theme(colors.steel-shade30);

		/* Color palette teal tokens */
		--fds-colorPaletteTealBackground2: theme(colors.teal-tint40);
		--fds-colorPaletteTealBorderActive: theme(colors.teal-primary);
		--fds-colorPaletteTealForeground2: theme(colors.teal-shade30);

		/*************************************************************************/

		--shadow2: 0 0 2px var(--fds-colorNeutralShadowAmbient), 0 1px 2px var(--fds-colorNeutralShadowKey);
		--shadow4: 0 0 2px var(--fds-colorNeutralShadowAmbient), 0 2px 4px var(--fds-colorNeutralShadowKey);
		--shadow8: 0 0 2px var(--fds-colorNeutralShadowAmbient), 0 4px 8px var(--fds-colorNeutralShadowKey);
		--shadow16: 0 0 2px var(--fds-colorNeutralShadowAmbient), 0 8px 16px var(--fds-colorNeutralShadowKey);
		--shadow28: 0 0 8px var(--fds-colorNeutralShadowAmbient), 0 14px 28px var(--fds-colorNeutralShadowKey);
		--shadow64: 0 0 8px var(--fds-colorNeutralShadowAmbient), 0 32px 64px var(--fds-colorNeutralShadowKey);

		--shadow2Brand: 0 0 2px var(--fds-colorBrandShadowAmbient), 0 1px 2px var(--fds-colorBrandShadowKey);
		--shadow4Brand: 0 0 2px var(--fds-colorBrandShadowAmbient), 0 2px 4px var(--fds-colorBrandShadowKey);
		--shadow8Brand: 0 0 2px var(--fds-colorBrandShadowAmbient), 0 4px 8px var(--fds-colorBrandShadowKey);
		--shadow16Brand: 0 0 2px var(--fds-colorBrandShadowAmbient), 0 8px 16px var(--fds-colorBrandShadowKey);
		--shadow28Brand: 0 0 8px var(--fds-colorBrandShadowAmbient), 0 14px 28px var(--fds-colorBrandShadowKey);
		--shadow64Brand: 0 0 8px var(--fds-colorBrandShadowAmbient), 0 32px 64px var(--fds-colorBrandShadowKey);
	}

	.dark {
		--fds-colorNeutralForeground1: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground1Hover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground1Pressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground1Selected: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground2: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fds-colorNeutralForeground2Hover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground2Pressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground2Selected: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground2BrandHover: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorNeutralForeground2BrandPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fds-colorNeutralForeground2BrandSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorNeutralForeground3: theme(colors.grey-68); /* #adadad Global.Color.Grey.68 */
		--fds-colorNeutralForeground3Hover: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fds-colorNeutralForeground3Pressed: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fds-colorNeutralForeground3Selected: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fds-colorNeutralForeground3BrandHover: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorNeutralForeground3BrandPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fds-colorNeutralForeground3BrandSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorNeutralForeground4: theme(colors.grey-60); /* #999999 Global.Color.Grey.60 */
		--fds-colorNeutralForegroundDisabled: theme(colors.grey-36); /* #5c5c5c Global.Color.Grey.36 */
		--fds-colorNeutralForegroundInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.white-alpha.40 */
		--fds-colorBrandForegroundLink: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorBrandForegroundLinkHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fds-colorBrandForegroundLinkPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fds-colorBrandForegroundLinkSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorNeutralForeground2Link: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fds-colorNeutralForeground2LinkHover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground2LinkPressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForeground2LinkSelected: white; /* #ffffff Global.Color.White */
		--fds-colorCompoundBrandForeground1: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorCompoundBrandForeground1Hover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fds-colorCompoundBrandForeground1Pressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fds-colorBrandForeground1: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorBrandForeground2: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fds-colorNeutralForeground1Static: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForegroundStaticInverted: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInverted: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForegroundInvertedHover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForegroundInvertedPressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForegroundInvertedSelected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForegroundInverted2: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralForegroundOnBrand: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLink: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLinkHover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLinkPressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralForegroundInvertedLinkSelected: white; /* #ffffff Global.Color.White */
		--fds-colorBrandForegroundInverted: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandForegroundInvertedHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorBrandForegroundInvertedPressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorBrandForegroundOnLight: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandForegroundOnLightHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorBrandForegroundOnLightPressed: theme(colors.brand-web-50); /* #004c87 Global.Color.Brand.50 */
		--fds-colorBrandForegroundOnLightSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorNeutralBackground1: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fds-colorNeutralBackground1Hover: theme(colors.grey-24); /* #3d3d3d Global.Color.Grey.24 */
		--fds-colorNeutralBackground1Pressed: theme(colors.grey-12); /* #1f1f1f Global.Color.Grey.12 */
		--fds-colorNeutralBackground1Selected: theme(colors.grey-22); /* #383838 Global.Color.Grey.22 */
		--fds-colorNeutralBackground2: theme(colors.grey-12); /* #1f1f1f Global.Color.Grey.12 */
		--fds-colorNeutralBackground2Hover: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fds-colorNeutralBackground2Pressed: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fds-colorNeutralBackground2Selected: theme(colors.grey-18); /* #2e2e2e Global.Color.Grey.18 */
		--fds-colorNeutralBackground3: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fds-colorNeutralBackground3Hover: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fds-colorNeutralBackground3Pressed: theme(colors.grey-4); /* #0a0a0a Global.Color.Grey.4 */
		--fds-colorNeutralBackground3Selected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fds-colorNeutralBackground4: theme(colors.grey-4); /* #0a0a0a Global.Color.Grey.4 */
		--fds-colorNeutralBackground4Hover: theme(colors.grey-12); /* #1f1f1f Global.Color.Grey.12 */
		--fds-colorNeutralBackground4Pressed: black; /* #000000 Global.Color.Black */
		--fds-colorNeutralBackground4Selected: theme(colors.grey-10); /* #1a1a1a Global.Color.Grey.10 */
		--fds-colorNeutralBackground5: black; /* #000000 Global.Color.Black */
		--fds-colorNeutralBackground5Hover: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fds-colorNeutralBackground5Pressed: theme(colors.grey-2); /* #050505 Global.Color.Grey.2 */
		--fds-colorNeutralBackground5Selected: theme(colors.grey-6); /* #0f0f0f Global.Color.Grey.6 */
		--fds-colorNeutralBackground6: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fds-colorNeutralBackgroundInverted: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralBackgroundStatic: theme(colors.grey-24); /* #3d3d3d Global.Color.Grey.24 */
		--fds-colorNeutralBackgroundAlpha: theme(colors.grey-10-alpha-50); /* rgba(26, 26, 26, 0.5) Global.Color.grey-10-alpha.50 */
		--fds-colorNeutralBackgroundAlpha2: theme(colors.grey-12-alpha-70); /* rgba(31, 31, 31, 0.7) Global.Color.grey-12-alpha.70 */
		--fds-colorSubtleBackground: transparent; /* transparent undefined */
		--fds-colorSubtleBackgroundHover: theme(colors.grey-22); /* #383838 Global.Color.Grey.22 */
		--fds-colorSubtleBackgroundPressed: theme(colors.grey-18); /* #2e2e2e Global.Color.Grey.18 */
		--fds-colorSubtleBackgroundSelected: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fds-colorSubtleBackgroundLightAlphaHover: theme(colors.grey-14-alpha-80); /* rgba(36, 36, 36, 0.8) Global.Color.grey-14-alpha.80 */
		--fds-colorSubtleBackgroundLightAlphaPressed: theme(colors.grey-14-alpha-50); /* rgba(36, 36, 36, 0.5) Global.Color.grey-14-alpha.50 */
		--fds-colorSubtleBackgroundLightAlphaSelected: transparent; /* transparent undefined */
		--fds-colorSubtleBackgroundInverted: transparent; /* transparent undefined */
		--fds-colorSubtleBackgroundInvertedHover: theme(colors.black-alpha-10); /* rgba(0, 0, 0, 0.1) Global.Color.black-alpha.10 */
		--fds-colorSubtleBackgroundInvertedPressed: theme(colors.black-alpha-30); /* rgba(0, 0, 0, 0.3) Global.Color.black-alpha.30 */
		--fds-colorSubtleBackgroundInvertedSelected: theme(colors.black-alpha-20); /* rgba(0, 0, 0, 0.2) Global.Color.black-alpha.20 */
		--fds-colorTransparentBackground: transparent; /* transparent undefined */
		--fds-colorTransparentBackgroundHover: transparent; /* transparent undefined */
		--fds-colorTransparentBackgroundPressed: transparent; /* transparent undefined */
		--fds-colorTransparentBackgroundSelected: transparent; /* transparent undefined */
		--fds-colorNeutralBackgroundDisabled: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fds-colorNeutralBackgroundInvertedDisabled: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.white-alpha.10 */
		--fds-colorNeutralStencil1: theme(colors.grey-34); /* #575757 Global.Color.Grey.34 */
		--fds-colorNeutralStencil2: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fds-colorNeutralStencil1Alpha: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.white-alpha.10 */
		--fds-colorNeutralStencil2Alpha: theme(colors.white-alpha-5); /* rgba(255, 255, 255, 0.05) Global.Color.white-alpha.5 */
		--fds-colorBackgroundOverlay: theme(colors.black-alpha-50); /* rgba(0, 0, 0, 0.5) Global.Color.black-alpha.50 */
		--fds-colorScrollbarOverlay: theme(colors.white-alpha-60); /* rgba(255, 255, 255, 0.6) Global.Color.white-alpha.60 */
		--fds-colorBrandBackground: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fds-colorBrandBackgroundHover: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandBackgroundPressed: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fds-colorBrandBackgroundSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fds-colorCompoundBrandBackground: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorCompoundBrandBackgroundHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fds-colorCompoundBrandBackgroundPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fds-colorBrandBackgroundStatic: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fds-colorBrandBackground2: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fds-colorBrandBackgroundInverted: white; /* #ffffff Global.Color.White */
		--fds-colorBrandBackgroundInvertedHover: theme(colors.brand-web-160); /* #eff6fc Global.Color.Brand.160 */
		--fds-colorBrandBackgroundInvertedPressed: theme(colors.brand-web-140); /* #c7e0f4 Global.Color.Brand.140 */
		--fds-colorBrandBackgroundInvertedSelected: theme(colors.brand-web-150); /* #deecf9 Global.Color.Brand.150 */
		--fds-colorNeutralStrokeAccessible: theme(colors.grey-68); /* #adadad Global.Color.Grey.68 */
		--fds-colorNeutralStrokeAccessibleHover: theme(colors.grey-74); /* #bdbdbd Global.Color.Grey.74 */
		--fds-colorNeutralStrokeAccessiblePressed: theme(colors.grey-70); /* #b3b3b3 Global.Color.Grey.70 */
		--fds-colorNeutralStrokeAccessibleSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorNeutralStroke1: theme(colors.grey-40); /* #666666 Global.Color.Grey.40 */
		--fds-colorNeutralStroke1Hover: theme(colors.grey-46); /* #757575 Global.Color.Grey.46 */
		--fds-colorNeutralStroke1Pressed: theme(colors.grey-42); /* #6b6b6b Global.Color.Grey.42 */
		--fds-colorNeutralStroke1Selected: theme(colors.grey-44); /* #707070 Global.Color.Grey.44 */
		--fds-colorNeutralStroke2: theme(colors.grey-32); /* #525252 Global.Color.Grey.32 */
		--fds-colorNeutralStroke3: theme(colors.grey-24); /* #3d3d3d Global.Color.Grey.24 */
		--fds-colorNeutralStrokeOnBrand: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fds-colorNeutralStrokeOnBrand2: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralStrokeOnBrand2Hover: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralStrokeOnBrand2Pressed: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralStrokeOnBrand2Selected: white; /* #ffffff Global.Color.White */
		--fds-colorBrandStroke1: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorBrandStroke2: theme(colors.brand-web-50); /* #004c87 Global.Color.Brand.50 */
		--fds-colorCompoundBrandStroke: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fds-colorCompoundBrandStrokeHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fds-colorCompoundBrandStrokePressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fds-colorNeutralStrokeDisabled: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fds-colorNeutralStrokeInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.white-alpha.40 */
		--fds-colorTransparentStroke: transparent; /* transparent undefined */
		--fds-colorTransparentStrokeInteractive: transparent; /* transparent undefined */
		--fds-colorTransparentStrokeDisabled: transparent; /* transparent undefined */
		--fds-colorNeutralStrokeAlpha: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.white-alpha.10 */
		--fds-colorStrokeFocus1: black; /* #000000 Global.Color.Black */
		--fds-colorStrokeFocus2: white; /* #ffffff Global.Color.White */
		--fds-colorNeutralShadowAmbient: rgba(0, 0, 0, 0.24); /* rgba(0,0,0,0.24) undefined */
		--fds-colorNeutralShadowKey: rgba(0, 0, 0, 0.28); /* rgba(0,0,0,0.28) undefined */
		--fds-colorNeutralShadowAmbientLighter: rgba(0, 0, 0, 0.12); /* rgba(0,0,0,0.12) undefined */
		--fds-colorNeutralShadowKeyLighter: rgba(0, 0, 0, 0.14); /* rgba(0,0,0,0.14) undefined */
		--fds-colorNeutralShadowAmbientDarker: rgba(0, 0, 0, 0.4); /* rgba(0,0,0,0.40) undefined */
		--fds-colorNeutralShadowKeyDarker: rgba(0, 0, 0, 0.48); /* rgba(0,0,0,0.48) undefined */
		--fds-colorBrandShadowAmbient: rgba(0, 0, 0, 0.3); /* rgba(0,0,0,0.30) undefined */
		--fds-colorBrandShadowKey: rgba(0, 0, 0, 0.25); /* rgba(0,0,0,0.25) undefined */

		/********************************************************************************/

		/* Color palette tokens */

		/* Color palette red tokens */
		--fds-colorPaletteRedBackground1: theme(colors.red-shade40);
		--fds-colorPaletteRedBackground2: theme(colors.red-shade30);
		--fds-colorPaletteRedBackground3: theme(colors.red-primary);
		--fds-colorPaletteRedBorderActive: theme(colors.red-tint30);
		--fds-colorPaletteRedBorder1: theme(colors.red-primary);
		/* --fds-colorPaletteRedBorder2: theme(colors.red-tint20); */
		--fds-colorPaletteRedBorder2: theme(colors.red-tint30);
		--fds-colorPaletteRedForeground1: theme(colors.red-tint30);
		--fds-colorPaletteRedForeground2: theme(colors.red-tint40);
		--fds-colorPaletteRedForeground3: theme(colors.red-tint20);
		--fds-colorPaletteRedForegroundInverted: theme(colors.red-primary);

		/* Color palette green tokens */
		--fds-colorPaletteGreenBackground1: theme(colors.green-shade40);
		--fds-colorPaletteGreenBackground2: theme(colors.green-shade30);
		--fds-colorPaletteGreenBackground3: theme(colors.green-primary);
		--fds-colorPaletteGreenBorderActive: theme(colors.green-tint30);
		--fds-colorPaletteGreenBorder1: theme(colors.green-primary);
		/* --fds-colorPaletteGreenBorder2: theme(colors.green-tint20); */
		--fds-colorPaletteGreenBorder2: theme(colors.green-tint40);
		--fds-colorPaletteGreenForeground1: theme(colors.green-tint30);
		--fds-colorPaletteGreenForeground2: theme(colors.green-tint40);
		/* --fds-colorPaletteGreenForeground3: theme(colors.green-tint20); */
		--fds-colorPaletteGreenForeground3: theme(colors.green-tint40);
		--fds-colorPaletteGreenForegroundInverted: theme(colors.green-primary);

		/* Color palette dark orange tokens */
		--fds-colorPaletteDarkOrangeBackground1: theme(colors.dark-orange-shade40);
		--fds-colorPaletteDarkOrangeBackground2: theme(colors.dark-orange-shade30);
		--fds-colorPaletteDarkOrangeBackground3: theme(colors.dark-orange-primary);
		--fds-colorPaletteDarkOrangeBorderActive: theme(colors.dark-orange-tint30);
		--fds-colorPaletteDarkOrangeBorder1: theme(colors.dark-orange-primary);
		/* --fds-colorPaletteDarkOrangeBorder2: theme(colors.dark-orange-tint20); */
		--fds-colorPaletteDarkOrangeBorder2: theme(colors.dark-orange-tint30);
		--fds-colorPaletteDarkOrangeForeground1: theme(colors.dark-orange-tint30);
		--fds-colorPaletteDarkOrangeForeground2: theme(colors.dark-orange-tint40);
		/* --fds-colorPaletteDarkOrangeForeground3: theme(colors.dark-orange-tint20); */
		--fds-colorPaletteDarkOrangeForeground3: theme(colors.dark-orange-tint30);

		/* Color palette yellow tokens */
		--fds-colorPaletteYellowBackground1: theme(colors.yellow-shade40);
		--fds-colorPaletteYellowBackground2: theme(colors.yellow-shade30);
		--fds-colorPaletteYellowBackground3: theme(colors.yellow-primary);
		--fds-colorPaletteYellowBorderActive: theme(colors.yellow-tint30);
		--fds-colorPaletteYellowBorder1: theme(colors.yellow-primary);
		--fds-colorPaletteYellowBorder2: theme(colors.yellow-tint20);
		--fds-colorPaletteYellowForeground1: theme(colors.yellow-tint30);
		--fds-colorPaletteYellowForeground2: theme(colors.yellow-tint40);
		--fds-colorPaletteYellowForeground3: theme(colors.yellow-tint20);
		--fds-colorPaletteYellowForegroundInverted: theme(colors.yellow-shade30);

		/* Color palette berry tokens */
		--fds-colorPaletteBerryBackground1: theme(colors.berry-shade40);
		--fds-colorPaletteBerryBackground2: theme(colors.berry-shade30);
		--fds-colorPaletteBerryBackground3: theme(colors.berry-primary);
		--fds-colorPaletteBerryBorderActive: theme(colors.berry-tint30);
		--fds-colorPaletteBerryBorder1: theme(colors.berry-primary);
		--fds-colorPaletteBerryBorder2: theme(colors.berry-tint20);
		--fds-colorPaletteBerryForeground1: theme(colors.berry-tint30);
		--fds-colorPaletteBerryForeground2: theme(colors.berry-tint40);
		--fds-colorPaletteBerryForeground3: theme(colors.berry-tint20);

		/* Color palette marigold tokens */
		--fds-colorPaletteMarigoldBackground1: theme(colors.marigold-shade40);
		--fds-colorPaletteMarigoldBackground2: theme(colors.marigold-shade30);
		--fds-colorPaletteMarigoldBackground3: theme(colors.marigold-primary);
		--fds-colorPaletteMarigoldBorderActive: theme(colors.marigold-tint30);
		--fds-colorPaletteMarigoldBorder1: theme(colors.marigold-primary);
		--fds-colorPaletteMarigoldBorder2: theme(colors.marigold-tint20);
		--fds-colorPaletteMarigoldForeground1: theme(colors.marigold-tint30);
		--fds-colorPaletteMarigoldForeground2: theme(colors.marigold-tint40);
		--fds-colorPaletteMarigoldForeground3: theme(colors.marigold-tint20);

		/* Color palette light green tokens */
		--fds-colorPaletteLightGreenBackground1: theme(colors.light-green-shade40);
		--fds-colorPaletteLightGreenBackground2: theme(colors.light-green-shade30);
		--fds-colorPaletteLightGreenBackground3: theme(colors.light-green-primary);
		--fds-colorPaletteLightGreenBorderActive: theme(colors.light-green-tint30);
		--fds-colorPaletteLightGreenBorder1: theme(colors.light-green-primary);
		--fds-colorPaletteLightGreenBorder2: theme(colors.light-green-tint20);
		--fds-colorPaletteLightGreenForeground1: theme(colors.light-green-tint30);
		--fds-colorPaletteLightGreenForeground2: theme(colors.light-green-tint40);
		--fds-colorPaletteLightGreenForeground3: theme(colors.light-green-tint20);

		/* Color palette anchor tokens */
		--fds-colorPaletteAnchorBackground2: theme(colors.anchor-shade30);
		--fds-colorPaletteAnchorBorderActive: theme(colors.anchor-tint30);
		--fds-colorPaletteAnchorForeground2: theme(colors.anchor-tint40);

		/* Color palette beige tokens */
		--fds-colorPaletteBeigeBackground2: theme(colors.beige-shade30);
		--fds-colorPaletteBeigeBorderActive: theme(colors.beige-tint30);
		--fds-colorPaletteBeigeForeground2: theme(colors.beige-tint40);

		/* Color palette blue tokens */
		--fds-colorPaletteBlueBackground2: theme(colors.blue-shade30);
		--fds-colorPaletteBlueBorderActive: theme(colors.blue-tint30);
		--fds-colorPaletteBlueForeground2: theme(colors.blue-tint40);

		/* Color palette brass tokens */
		--fds-colorPaletteBrassBackground2: theme(colors.brass-shade30);
		--fds-colorPaletteBrassBorderActive: theme(colors.brass-tint30);
		--fds-colorPaletteBrassForeground2: theme(colors.brass-tint40);

		/* Color palette brown tokens */
		--fds-colorPaletteBrownBackground2: theme(colors.brown-shade30);
		--fds-colorPaletteBrownBorderActive: theme(colors.brown-tint30);
		--fds-colorPaletteBrownForeground2: theme(colors.brown-tint40);

		/* Color palette cornflower tokens */
		--fds-colorPaletteCornflowerBackground2: theme(colors.cornflower-shade30);
		--fds-colorPaletteCornflowerBorderActive: theme(colors.cornflower-tint30);
		--fds-colorPaletteCornflowerForeground2: theme(colors.cornflower-tint40);

		/* Color palette cranberry tokens */
		--fds-colorPaletteCranberryBackground2: theme(colors.cranberry-shade30);
		--fds-colorPaletteCranberryBorderActive: theme(colors.cranberry-tint30);
		--fds-colorPaletteCranberryForeground2: theme(colors.cranberry-tint40);

		/* Color palette dark green tokens */
		--fds-colorPaletteDarkGreenBackground2: theme(colors.dark-green-shade30);
		--fds-colorPaletteDarkGreenBorderActive: theme(colors.dark-green-tint30);
		--fds-colorPaletteDarkGreenForeground2: theme(colors.dark-green-tint40);

		/* Color palette dark red tokens */
		--fds-colorPaletteDarkRedBackground2: theme(colors.dark-red-shade30);
		--fds-colorPaletteDarkRedBorderActive: theme(colors.dark-red-tint30);
		--fds-colorPaletteDarkRedForeground2: theme(colors.dark-red-tint40);

		/* Color palette forest tokens */
		--fds-colorPaletteForestBackground2: theme(colors.forest-shade30);
		--fds-colorPaletteForestBorderActive: theme(colors.forest-tint30);
		--fds-colorPaletteForestForeground2: theme(colors.forest-tint40);

		/* Color palette gold tokens */
		--fds-colorPaletteGoldBackground2: theme(colors.gold-shade30);
		--fds-colorPaletteGoldBorderActive: theme(colors.gold-tint30);
		--fds-colorPaletteGoldForeground2: theme(colors.gold-tint40);

		/* Color palette grape tokens */
		--fds-colorPaletteGrapeBackground2: theme(colors.grape-shade30);
		--fds-colorPaletteGrapeBorderActive: theme(colors.grape-tint30);
		--fds-colorPaletteGrapeForeground2: theme(colors.grape-tint40);

		/* Color palette lavender tokens */
		--fds-colorPaletteLavenderBackground2: theme(colors.lavender-shade30);
		--fds-colorPaletteLavenderBorderActive: theme(colors.lavender-tint30);
		--fds-colorPaletteLavenderForeground2: theme(colors.lavender-tint40);

		/* Color palette light teal tokens */
		--fds-colorPaletteLightTealBackground2: theme(colors.light-teal-shade30);
		--fds-colorPaletteLightTealBorderActive: theme(colors.light-teal-tint30);
		--fds-colorPaletteLightTealForeground2: theme(colors.light-teal-tint40);

		/* Color palette lilac tokens */
		--fds-colorPaletteLilacBackground2: theme(colors.lilac-shade30);
		--fds-colorPaletteLilacBorderActive: theme(colors.lilac-tint30);
		--fds-colorPaletteLilacForeground2: theme(colors.lilac-tint40);

		/* Color palette magenta tokens */
		--fds-colorPaletteMagentaBackground2: theme(colors.magenta-shade30);
		--fds-colorPaletteMagentaBorderActive: theme(colors.magenta-tint30);
		--fds-colorPaletteMagentaForeground2: theme(colors.magenta-tint40);

		/* Color palette mink tokens */
		--fds-colorPaletteMinkBackground2: theme(colors.mink-shade30);
		--fds-colorPaletteMinkBorderActive: theme(colors.mink-tint30);
		--fds-colorPaletteMinkForeground2: theme(colors.mink-tint40);

		/* Color palette navy tokens */
		--fds-colorPaletteNavyBackground2: theme(colors.navy-shade30);
		--fds-colorPaletteNavyBorderActive: theme(colors.navy-tint30);
		--fds-colorPaletteNavyForeground2: theme(colors.navy-tint40);

		/* Color palette peach tokens */
		--fds-colorPalettePeachBackground2: theme(colors.peach-shade30);
		--fds-colorPalettePeachBorderActive: theme(colors.peach-tint30);
		--fds-colorPalettePeachForeground2: theme(colors.peach-tint40);

		/* Color palette pink tokens */
		--fds-colorPalettePinkBackground2: theme(colors.pink-shade30);
		--fds-colorPalettePinkBorderActive: theme(colors.pink-tint30);
		--fds-colorPalettePinkForeground2: theme(colors.pink-tint40);

		/* Color palette platinum tokens */
		--fds-colorPalettePlatinumBackground2: theme(colors.platinum-shade30);
		--fds-colorPalettePlatinumBorderActive: theme(colors.platinum-tint30);
		--fds-colorPalettePlatinumForeground2: theme(colors.platinum-tint40);

		/* Color palette plum tokens */
		--fds-colorPalettePlumBackground2: theme(colors.plum-shade30);
		--fds-colorPalettePlumBorderActive: theme(colors.plum-tint30);
		--fds-colorPalettePlumForeground2: theme(colors.plum-tint40);

		/* Color palette pumpkin tokens */
		--fds-colorPalettePumpkinBackground2: theme(colors.pumpkin-shade30);
		--fds-colorPalettePumpkinBorderActive: theme(colors.pumpkin-tint30);
		--fds-colorPalettePumpkinForeground2: theme(colors.pumpkin-tint40);

		/* Color palette purple tokens */
		--fds-colorPalettePurpleBackground2: theme(colors.purple-shade30);
		--fds-colorPalettePurpleBorderActive: theme(colors.purple-tint30);
		--fds-colorPalettePurpleForeground2: theme(colors.purple-tint40);

		/* Color palette royal blue tokens */
		--fds-colorPaletteRoyalBlueBackground2: theme(colors.royal-blue-shade30);
		--fds-colorPaletteRoyalBlueBorderActive: theme(colors.royal-blue-tint30);
		--fds-colorPaletteRoyalBlueForeground2: theme(colors.royal-blue-tint40);

		/* Color palette seafoam tokens */
		--fds-colorPaletteSeafoamBackground2: theme(colors.seafoam-shade30);
		--fds-colorPaletteSeafoamBorderActive: theme(colors.seafoam-tint30);
		--fds-colorPaletteSeafoamForeground2: theme(colors.seafoam-tint40);

		/* Color palette steel tokens */
		--fds-colorPaletteSteelBackground2: theme(colors.steel-shade30);
		--fds-colorPaletteSteelBorderActive: theme(colors.steel-tint30);
		--fds-colorPaletteSteelForeground2: theme(colors.steel-tint40);

		/* Color palette teal tokens */
		--fds-colorPaletteTealBackground2: theme(colors.teal-shade30);
		--fds-colorPaletteTealBorderActive: theme(colors.teal-tint30);
		--fds-colorPaletteTealForeground2: theme(colors.teal-tint40);
	}

	.theme-brand-web.scheme-light {
		@apply light;
	}
	.theme-brand-web.scheme-dark {
		@apply dark;
	}

	@media (prefers-color-scheme: light) {
		.theme-brand-web.scheme-auto {
			@apply light;
		}
	}

	@media (prefers-color-scheme: dark) {
		.theme-brand-web.scheme-auto {
			@apply dark;
		}
	}
</style>
