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
		--fui-colorNeutralForeground1: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground1Hover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground1Pressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground1Selected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground2: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fui-colorNeutralForeground2Hover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground2Pressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground2Selected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground2BrandHover: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorNeutralForeground2BrandPressed: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorNeutralForeground2BrandSelected: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorNeutralForeground3: theme(colors.grey-38); /* #616161 Global.Color.Grey.38 */
		--fui-colorNeutralForeground3Hover: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fui-colorNeutralForeground3Pressed: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fui-colorNeutralForeground3Selected: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fui-colorNeutralForeground3BrandHover: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorNeutralForeground3BrandPressed: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorNeutralForeground3BrandSelected: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorNeutralForeground4: theme(colors.grey-44); /* #707070 Global.Color.Grey.44 */
		--fui-colorNeutralForegroundDisabled: theme(colors.grey-74); /* #bdbdbd Global.Color.Grey.74 */
		--fui-colorNeutralForegroundInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.WhiteAlpha.40 */
		--fui-colorBrandForegroundLink: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorBrandForegroundLinkHover: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorBrandForegroundLinkPressed: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fui-colorBrandForegroundLinkSelected: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorNeutralForeground2Link: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fui-colorNeutralForeground2LinkHover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground2LinkPressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForeground2LinkSelected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorCompoundBrandForeground1: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorCompoundBrandForeground1Hover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorCompoundBrandForeground1Pressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorBrandForeground1: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandForeground2: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorNeutralForeground1Static: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForegroundStaticInverted: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInverted: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedHover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedPressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedSelected: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInverted2: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundOnBrand: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLink: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLinkHover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLinkPressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLinkSelected: white; /* #ffffff Global.Color.White */
		--fui-colorBrandForegroundInverted: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorBrandForegroundInvertedHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fui-colorBrandForegroundInvertedPressed: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorBrandForegroundOnLight: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandForegroundOnLightHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorBrandForegroundOnLightPressed: theme(colors.brand-web-50); /* #004c87 Global.Color.Brand.50 */
		--fui-colorBrandForegroundOnLightSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorNeutralBackground1: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralBackground1Hover: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fui-colorNeutralBackground1Pressed: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fui-colorNeutralBackground1Selected: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fui-colorNeutralBackground2: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fui-colorNeutralBackground2Hover: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fui-colorNeutralBackground2Pressed: theme(colors.grey-86); /* #dbdbdb Global.Color.Grey.86 */
		--fui-colorNeutralBackground2Selected: theme(colors.grey-90); /* #e6e6e6 Global.Color.Grey.90 */
		--fui-colorNeutralBackground3: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fui-colorNeutralBackground3Hover: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fui-colorNeutralBackground3Pressed: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fui-colorNeutralBackground3Selected: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fui-colorNeutralBackground4: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fui-colorNeutralBackground4Hover: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fui-colorNeutralBackground4Pressed: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fui-colorNeutralBackground4Selected: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralBackground5: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fui-colorNeutralBackground5Hover: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fui-colorNeutralBackground5Pressed: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fui-colorNeutralBackground5Selected: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fui-colorNeutralBackground6: theme(colors.grey-90); /* #e6e6e6 Global.Color.Grey.90 */
		--fui-colorNeutralBackgroundInverted: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fui-colorNeutralBackgroundStatic: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fui-colorNeutralBackgroundAlpha: theme(colors.white-alpha-50); /* rgba(255, 255, 255, 0.5) Global.Color.WhiteAlpha.50 */
		--fui-colorNeutralBackgroundAlpha2: theme(colors.white-alpha-80); /* rgba(255, 255, 255, 0.8) Global.Color.WhiteAlpha.80 */
		--fui-colorSubtleBackground: transparent; /* transparent undefined */
		--fui-colorSubtleBackgroundHover: theme(colors.grey-96); /* #f5f5f5 Global.Color.Grey.96 */
		--fui-colorSubtleBackgroundPressed: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fui-colorSubtleBackgroundSelected: theme(colors.grey-92); /* #ebebeb Global.Color.Grey.92 */
		--fui-colorSubtleBackgroundLightAlphaHover: theme(colors.white-alpha-70); /* rgba(255, 255, 255, 0.7) Global.Color.WhiteAlpha.70 */
		--fui-colorSubtleBackgroundLightAlphaPressed: theme(colors.white-alpha-50); /* rgba(255, 255, 255, 0.5) Global.Color.WhiteAlpha.50 */
		--fui-colorSubtleBackgroundLightAlphaSelected: transparent; /* transparent undefined */
		--fui-colorSubtleBackgroundInverted: transparent; /* transparent undefined */
		--fui-colorSubtleBackgroundInvertedHover: theme(colors.black-alpha-10); /* rgba(0, 0, 0, 0.1) Global.Color.BlackAlpha.10 */
		--fui-colorSubtleBackgroundInvertedPressed: theme(colors.black-alpha-30); /* rgba(0, 0, 0, 0.3) Global.Color.BlackAlpha.30 */
		--fui-colorSubtleBackgroundInvertedSelected: theme(colors.black-alpha-20); /* rgba(0, 0, 0, 0.2) Global.Color.BlackAlpha.20 */
		--fui-colorTransparentBackground: transparent; /* transparent undefined */
		--fui-colorTransparentBackgroundHover: transparent; /* transparent undefined */
		--fui-colorTransparentBackgroundPressed: transparent; /* transparent undefined */
		--fui-colorTransparentBackgroundSelected: transparent; /* transparent undefined */
		--fui-colorNeutralBackgroundDisabled: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fui-colorNeutralBackgroundInvertedDisabled: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.WhiteAlpha.10 */
		--fui-colorNeutralStencil1: theme(colors.grey-90); /* #e6e6e6 Global.Color.Grey.90 */
		--fui-colorNeutralStencil2: theme(colors.grey-98); /* #fafafa Global.Color.Grey.98 */
		--fui-colorNeutralStencil1Alpha: theme(colors.black-alpha-10); /* rgba(0, 0, 0, 0.1) Global.Color.BlackAlpha.10 */
		--fui-colorNeutralStencil2Alpha: theme(colors.black-alpha-5); /* rgba(0, 0, 0, 0.05) Global.Color.BlackAlpha.5 */
		--fui-colorBackgroundOverlay: theme(colors.black-alpha-40); /* rgba(0, 0, 0, 0.4) Global.Color.BlackAlpha.40 */
		--fui-colorScrollbarOverlay: theme(colors.black-alpha-50); /* rgba(0, 0, 0, 0.5) Global.Color.BlackAlpha.50 */
		--fui-colorBrandBackground: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandBackgroundHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorBrandBackgroundPressed: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fui-colorBrandBackgroundSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorCompoundBrandBackground: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorCompoundBrandBackgroundHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorCompoundBrandBackgroundPressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorBrandBackgroundStatic: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandBackground2: theme(colors.brand-web-160); /* #eff6fc Global.Color.Brand.160 */
		--fui-colorBrandBackgroundInverted: white; /* #ffffff Global.Color.White */
		--fui-colorBrandBackgroundInvertedHover: theme(colors.brand-web-160); /* #eff6fc Global.Color.Brand.160 */
		--fui-colorBrandBackgroundInvertedPressed: theme(colors.brand-web-140); /* #c7e0f4 Global.Color.Brand.140 */
		--fui-colorBrandBackgroundInvertedSelected: theme(colors.brand-web-150); /* #deecf9 Global.Color.Brand.150 */
		--fui-colorNeutralStrokeAccessible: theme(colors.grey-38); /* #616161 Global.Color.Grey.38 */
		--fui-colorNeutralStrokeAccessibleHover: theme(colors.grey-34); /* #575757 Global.Color.Grey.34 */
		--fui-colorNeutralStrokeAccessiblePressed: theme(colors.grey-30); /* #4d4d4d Global.Color.Grey.30 */
		--fui-colorNeutralStrokeAccessibleSelected: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorNeutralStroke1: theme(colors.grey-82); /* #d1d1d1 Global.Color.Grey.82 */
		--fui-colorNeutralStroke1Hover: theme(colors.grey-78); /* #c7c7c7 Global.Color.Grey.78 */
		--fui-colorNeutralStroke1Pressed: theme(colors.grey-70); /* #b3b3b3 Global.Color.Grey.70 */
		--fui-colorNeutralStroke1Selected: theme(colors.grey-74); /* #bdbdbd Global.Color.Grey.74 */
		--fui-colorNeutralStroke2: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fui-colorNeutralStroke3: theme(colors.grey-94); /* #f0f0f0 Global.Color.Grey.94 */
		--fui-colorNeutralStrokeOnBrand: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralStrokeOnBrand2: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralStrokeOnBrand2Hover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralStrokeOnBrand2Pressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralStrokeOnBrand2Selected: white; /* #ffffff Global.Color.White */
		--fui-colorBrandStroke1: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandStroke2: theme(colors.brand-web-140); /* #c7e0f4 Global.Color.Brand.140 */
		--fui-colorCompoundBrandStroke: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorCompoundBrandStrokeHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorCompoundBrandStrokePressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorNeutralStrokeDisabled: theme(colors.grey-88); /* #e0e0e0 Global.Color.Grey.88 */
		--fui-colorNeutralStrokeInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.WhiteAlpha.40 */
		--fui-colorTransparentStroke: transparent; /* transparent undefined */
		--fui-colorTransparentStrokeInteractive: transparent; /* transparent undefined */
		--fui-colorTransparentStrokeDisabled: transparent; /* transparent undefined */
		--fui-colorNeutralStrokeAlpha: theme(colors.black-alpha-5); /* rgba(0, 0, 0, 0.05) Global.Color.BlackAlpha.5 */
		--fui-colorStrokeFocus1: white; /* #ffffff Global.Color.White */
		--fui-colorStrokeFocus2: black; /* #000000 Global.Color.Black */
		--fui-colorNeutralShadowAmbient: rgba(0, 0, 0, 0.12); /* rgba(0,0,0,0.12) undefined */
		--fui-colorNeutralShadowKey: rgba(0, 0, 0, 0.14); /* rgba(0,0,0,0.14) undefined */
		--fui-colorNeutralShadowAmbientLighter: rgba(0, 0, 0, 0.06); /* rgba(0,0,0,0.06) undefined */
		--fui-colorNeutralShadowKeyLighter: rgba(0, 0, 0, 0.07); /* rgba(0,0,0,0.07) undefined */
		--fui-colorNeutralShadowAmbientDarker: rgba(0, 0, 0, 0.2); /* rgba(0,0,0,0.20) undefined */
		--fui-colorNeutralShadowKeyDarker: rgba(0, 0, 0, 0.24); /* rgba(0,0,0,0.24) undefined */
		--fui-colorBrandShadowAmbient: rgba(0, 0, 0, 0.3); /* rgba(0,0,0,0.30) undefined */
		--fui-colorBrandShadowKey: rgba(0, 0, 0, 0.25); /* rgba(0,0,0,0.25) undefined */

		/*******************************/

		/* Color palette tokens */

		/* Color palette red tokens */
		--fui-colorPaletteRedBackground1: theme(colors.red-tint60);
		--fui-colorPaletteRedBackground2: theme(colors.red-tint40);
		--fui-colorPaletteRedBackground3: theme(colors.red-primary);
		--fui-colorPaletteRedBorderActive: theme(colors.red-primary);
		--fui-colorPaletteRedBorder1: theme(colors.red-tint40);
		--fui-colorPaletteRedBorder2: theme(colors.red-primary);
		--fui-colorPaletteRedForeground1: theme(colors.red-shade10);
		--fui-colorPaletteRedForeground2: theme(colors.red-shade30);
		/* --fui-colorPaletteRedForeground3: theme(colors.red-primary); */
		--fui-colorPaletteRedForeground3: theme(colors.red-tint30);
		--fui-colorPaletteRedForegroundInverted: theme(colors.red-tint20);

		/* Color palette green tokens */
		--fui-colorPaletteGreenBackground1: theme(colors.green-tint60);
		--fui-colorPaletteGreenBackground2: theme(colors.green-tint40);
		--fui-colorPaletteGreenBackground3: theme(colors.green-primary);
		--fui-colorPaletteGreenBorderActive: theme(colors.green-primary);
		--fui-colorPaletteGreenBorder1: theme(colors.green-tint40);
		--fui-colorPaletteGreenBorder2: theme(colors.green-primary);
		--fui-colorPaletteGreenForeground1: theme(colors.green-shade10);
		--fui-colorPaletteGreenForeground2: theme(colors.green-shade30);
		--fui-colorPaletteGreenForeground3: theme(colors.green-primary);
		--fui-colorPaletteGreenForegroundInverted: theme(colors.green-tint20);

		/* Color palette dark orange tokens */
		--fui-colorPaletteDarkOrangeBackground1: theme(colors.dark-orange-tint60);
		--fui-colorPaletteDarkOrangeBackground2: theme(colors.dark-orange-tint40);
		--fui-colorPaletteDarkOrangeBackground3: theme(colors.dark-orange-primary);
		--fui-colorPaletteDarkOrangeBorderActive: theme(colors.dark-orange-primary);
		--fui-colorPaletteDarkOrangeBorder1: theme(colors.dark-orange-tint40);
		--fui-colorPaletteDarkOrangeBorder2: theme(colors.dark-orange-primary);
		--fui-colorPaletteDarkOrangeForeground1: theme(colors.dark-orange-shade10);
		--fui-colorPaletteDarkOrangeForeground2: theme(colors.dark-orange-shade30);
		--fui-colorPaletteDarkOrangeForeground3: theme(colors.dark-orange-primary);

		/* Color palette yellow tokens */
		--fui-colorPaletteYellowBackground1: theme(colors.yellow-tint60);
		--fui-colorPaletteYellowBackground2: theme(colors.yellow-tint40);
		--fui-colorPaletteYellowBackground3: theme(colors.yellow-primary);
		--fui-colorPaletteYellowBorderActive: theme(colors.yellow-primary);
		--fui-colorPaletteYellowBorder1: theme(colors.yellow-tint40);
		--fui-colorPaletteYellowBorder2: theme(colors.yellow-primary);
		/* --fui-colorPaletteYellowForeground1: theme(colors.yellow-shade10); */
		--fui-colorPaletteYellowForeground1: theme(colors.yellow-shade30);
		--fui-colorPaletteYellowForeground2: theme(colors.yellow-shade30);
		--fui-colorPaletteYellowForeground3: theme(colors.yellow-primary);
		--fui-colorPaletteYellowForegroundInverted: theme(colors.yellow-tint40);

		/* Color palette berry tokens */
		--fui-colorPaletteBerryBackground1: theme(colors.berry-tint60);
		--fui-colorPaletteBerryBackground2: theme(colors.berry-tint40);
		--fui-colorPaletteBerryBackground3: theme(colors.berry-primary);
		--fui-colorPaletteBerryBorderActive: theme(colors.berry-primary);
		--fui-colorPaletteBerryBorder1: theme(colors.berry-tint40);
		--fui-colorPaletteBerryBorder2: theme(colors.berry-primary);
		--fui-colorPaletteBerryForeground1: theme(colors.berry-shade10);
		--fui-colorPaletteBerryForeground2: theme(colors.berry-shade30);
		--fui-colorPaletteBerryForeground3: theme(colors.berry-primary);

		/* Color palette marigold tokens */
		--fui-colorPaletteMarigoldBackground1: theme(colors.marigold-tint60);
		--fui-colorPaletteMarigoldBackground2: theme(colors.marigold-tint40);
		--fui-colorPaletteMarigoldBackground3: theme(colors.marigold-primary);
		--fui-colorPaletteMarigoldBorderActive: theme(colors.marigold-primary);
		--fui-colorPaletteMarigoldBorder1: theme(colors.marigold-tint40);
		--fui-colorPaletteMarigoldBorder2: theme(colors.marigold-primary);
		--fui-colorPaletteMarigoldForeground1: theme(colors.marigold-shade10);
		--fui-colorPaletteMarigoldForeground2: theme(colors.marigold-shade30);
		--fui-colorPaletteMarigoldForeground3: theme(colors.marigold-primary);

		/* Color palette light green tokens */
		--fui-colorPaletteLightGreenBackground1: theme(colors.light-green-tint60);
		--fui-colorPaletteLightGreenBackground2: theme(colors.light-green-tint40);
		--fui-colorPaletteLightGreenBackground3: theme(colors.light-green-primary);
		--fui-colorPaletteLightGreenBorderActive: theme(colors.light-green-primary);
		--fui-colorPaletteLightGreenBorder1: theme(colors.light-green-tint40);
		--fui-colorPaletteLightGreenBorder2: theme(colors.light-green-primary);
		--fui-colorPaletteLightGreenForeground1: theme(colors.light-green-shade10);
		--fui-colorPaletteLightGreenForeground2: theme(colors.light-green-shade30);
		--fui-colorPaletteLightGreenForeground3: theme(colors.light-green-primary);

		/* Color palette anchor tokens */
		--fui-colorPaletteAnchorBackground2: theme(colors.anchor-tint40);
		--fui-colorPaletteAnchorBorderActive: theme(colors.anchor-primary);
		--fui-colorPaletteAnchorForeground2: theme(colors.anchor-shade30);

		/* Color palette beige tokens */
		--fui-colorPaletteBeigeBackground2: theme(colors.beige-tint40);
		--fui-colorPaletteBeigeBorderActive: theme(colors.beige-primary);
		--fui-colorPaletteBeigeForeground2: theme(colors.beige-shade30);

		/* Color palette blue tokens */
		--fui-colorPaletteBlueBackground2: theme(colors.blue-tint40);
		--fui-colorPaletteBlueBorderActive: theme(colors.blue-primary);
		--fui-colorPaletteBlueForeground2: theme(colors.blue-shade30);

		/* Color palette brass tokens */
		--fui-colorPaletteBrassBackground2: theme(colors.brass-tint40);
		--fui-colorPaletteBrassBorderActive: theme(colors.brass-primary);
		--fui-colorPaletteBrassForeground2: theme(colors.brass-shade30);

		/* Color palette brown tokens */
		--fui-colorPaletteBrownBackground2: theme(colors.brown-tint40);
		--fui-colorPaletteBrownBorderActive: theme(colors.brown-primary);
		--fui-colorPaletteBrownForeground2: theme(colors.brown-shade30);

		/* Color palette cornflower tokens */
		--fui-colorPaletteCornflowerBackground2: theme(colors.cornflower-tint40);
		--fui-colorPaletteCornflowerBorderActive: theme(colors.cornflower-primary);
		--fui-colorPaletteCornflowerForeground2: theme(colors.cornflower-shade30);

		/* Color palette cranberry tokens */
		--fui-colorPaletteCranberryBackground2: theme(colors.cranberry-tint40);
		--fui-colorPaletteCranberryBorderActive: theme(colors.cranberry-primary);
		--fui-colorPaletteCranberryForeground2: theme(colors.cranberry-shade30);

		/* Color palette dark green tokens */
		--fui-colorPaletteDarkGreenBackground2: theme(colors.dark-green-tint40);
		--fui-colorPaletteDarkGreenBorderActive: theme(colors.dark-green-primary);
		--fui-colorPaletteDarkGreenForeground2: theme(colors.dark-green-shade30);

		/* Color palette dark red tokens */
		--fui-colorPaletteDarkRedBackground2: theme(colors.dark-red-tint40);
		--fui-colorPaletteDarkRedBorderActive: theme(colors.dark-red-primary);
		--fui-colorPaletteDarkRedForeground2: theme(colors.dark-red-shade30);

		/* Color palette forest tokens */
		--fui-colorPaletteForestBackground2: theme(colors.forest-tint40);
		--fui-colorPaletteForestBorderActive: theme(colors.forest-primary);
		--fui-colorPaletteForestForeground2: theme(colors.forest-shade30);

		/* Color palette gold tokens */
		--fui-colorPaletteGoldBackground2: theme(colors.gold-tint40);
		--fui-colorPaletteGoldBorderActive: theme(colors.gold-primary);
		--fui-colorPaletteGoldForeground2: theme(colors.gold-shade30);

		/* Color palette grape tokens */
		--fui-colorPaletteGrapeBackground2: theme(colors.grape-tint40);
		--fui-colorPaletteGrapeBorderActive: theme(colors.grape-primary);
		--fui-colorPaletteGrapeForeground2: theme(colors.grape-shade30);

		/* Color palette lavender tokens */
		--fui-colorPaletteLavenderBackground2: theme(colors.lavender-tint40);
		--fui-colorPaletteLavenderBorderActive: theme(colors.lavender-primary);
		--fui-colorPaletteLavenderForeground2: theme(colors.lavender-shade30);

		/* Color palette light teal tokens */
		--fui-colorPaletteLightTealBackground2: theme(colors.light-teal-tint40);
		--fui-colorPaletteLightTealBorderActive: theme(colors.light-teal-primary);
		--fui-colorPaletteLightTealForeground2: theme(colors.light-teal-shade30);

		/* Color palette lilac tokens */
		--fui-colorPaletteLilacBackground2: theme(colors.lilac-tint40);
		--fui-colorPaletteLilacBorderActive: theme(colors.lilac-primary);
		--fui-colorPaletteLilacForeground2: theme(colors.lilac-shade30);

		/* Color palette magenta tokens */
		--fui-colorPaletteMagentaBackground2: theme(colors.magenta-tint40);
		--fui-colorPaletteMagentaBorderActive: theme(colors.magenta-primary);
		--fui-colorPaletteMagentaForeground2: theme(colors.magenta-shade30);

		/* Color palette mink tokens */
		--fui-colorPaletteMinkBackground2: theme(colors.mink-tint40);
		--fui-colorPaletteMinkBorderActive: theme(colors.mink-primary);
		--fui-colorPaletteMinkForeground2: theme(colors.mink-shade30);

		/* Color palette navy tokens */
		--fui-colorPaletteNavyBackground2: theme(colors.navy-tint40);
		--fui-colorPaletteNavyBorderActive: theme(colors.navy-primary);
		--fui-colorPaletteNavyForeground2: theme(colors.navy-shade30);

		/* Color palette peach tokens */
		--fui-colorPalettePeachBackground2: theme(colors.peach-tint40);
		--fui-colorPalettePeachBorderActive: theme(colors.peach-primary);
		--fui-colorPalettePeachForeground2: theme(colors.peach-shade30);

		/* Color palette pink tokens */
		--fui-colorPalettePinkBackground2: theme(colors.pink-tint40);
		--fui-colorPalettePinkBorderActive: theme(colors.pink-primary);
		--fui-colorPalettePinkForeground2: theme(colors.pink-shade30);

		/* Color palette platinum tokens */
		--fui-colorPalettePlatinumBackground2: theme(colors.platinum-tint40);
		--fui-colorPalettePlatinumBorderActive: theme(colors.platinum-primary);
		--fui-colorPalettePlatinumForeground2: theme(colors.platinum-shade30);

		/* Color palette plum tokens */
		--fui-colorPalettePlumBackground2: theme(colors.plum-tint40);
		--fui-colorPalettePlumBorderActive: theme(colors.plum-primary);
		--fui-colorPalettePlumForeground2: theme(colors.plum-shade30);

		/* Color palette pumpkin tokens */
		--fui-colorPalettePumpkinBackground2: theme(colors.pumpkin-tint40);
		--fui-colorPalettePumpkinBorderActive: theme(colors.pumpkin-primary);
		--fui-colorPalettePumpkinForeground2: theme(colors.pumpkin-shade30);

		/* Color palette purple tokens */
		--fui-colorPalettePurpleBackground2: theme(colors.purple-tint40);
		--fui-colorPalettePurpleBorderActive: theme(colors.purple-primary);
		--fui-colorPalettePurpleForeground2: theme(colors.purple-shade30);

		/* Color palette royal blue tokens */
		--fui-colorPaletteRoyalBlueBackground2: theme(colors.royal-blue-tint40);
		--fui-colorPaletteRoyalBlueBorderActive: theme(colors.royal-blue-primary);
		--fui-colorPaletteRoyalBlueForeground2: theme(colors.royal-blue-shade30);

		/* Color palette seafoam tokens */
		--fui-colorPaletteSeafoamBackground2: theme(colors.seafoam-tint40);
		--fui-colorPaletteSeafoamBorderActive: theme(colors.seafoam-primary);
		--fui-colorPaletteSeafoamForeground2: theme(colors.seafoam-shade30);

		/* Color palette steel tokens */
		--fui-colorPaletteSteelBackground2: theme(colors.steel-tint40);
		--fui-colorPaletteSteelBorderActive: theme(colors.steel-primary);
		--fui-colorPaletteSteelForeground2: theme(colors.steel-shade30);

		/* Color palette teal tokens */
		--fui-colorPaletteTealBackground2: theme(colors.teal-tint40);
		--fui-colorPaletteTealBorderActive: theme(colors.teal-primary);
		--fui-colorPaletteTealForeground2: theme(colors.teal-shade30);

		/*************************************************************************/

		--shadow2: 0 0 2px var(--fui-colorNeutralShadowAmbient), 0 1px 2px var(--fui-colorNeutralShadowKey);
		--shadow4: 0 0 2px var(--fui-colorNeutralShadowAmbient), 0 2px 4px var(--fui-colorNeutralShadowKey);
		--shadow8: 0 0 2px var(--fui-colorNeutralShadowAmbient), 0 4px 8px var(--fui-colorNeutralShadowKey);
		--shadow16: 0 0 2px var(--fui-colorNeutralShadowAmbient), 0 8px 16px var(--fui-colorNeutralShadowKey);
		--shadow28: 0 0 8px var(--fui-colorNeutralShadowAmbient), 0 14px 28px var(--fui-colorNeutralShadowKey);
		--shadow64: 0 0 8px var(--fui-colorNeutralShadowAmbient), 0 32px 64px var(--fui-colorNeutralShadowKey);

		--shadow2Brand: 0 0 2px var(--fui-colorBrandShadowAmbient), 0 1px 2px var(--fui-colorBrandShadowKey);
		--shadow4Brand: 0 0 2px var(--fui-colorBrandShadowAmbient), 0 2px 4px var(--fui-colorBrandShadowKey);
		--shadow8Brand: 0 0 2px var(--fui-colorBrandShadowAmbient), 0 4px 8px var(--fui-colorBrandShadowKey);
		--shadow16Brand: 0 0 2px var(--fui-colorBrandShadowAmbient), 0 8px 16px var(--fui-colorBrandShadowKey);
		--shadow28Brand: 0 0 8px var(--fui-colorBrandShadowAmbient), 0 14px 28px var(--fui-colorBrandShadowKey);
		--shadow64Brand: 0 0 8px var(--fui-colorBrandShadowAmbient), 0 32px 64px var(--fui-colorBrandShadowKey);
	}

	.dark {
		--fui-colorNeutralForeground1: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground1Hover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground1Pressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground1Selected: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground2: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fui-colorNeutralForeground2Hover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground2Pressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground2Selected: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground2BrandHover: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorNeutralForeground2BrandPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fui-colorNeutralForeground2BrandSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorNeutralForeground3: theme(colors.grey-68); /* #adadad Global.Color.Grey.68 */
		--fui-colorNeutralForeground3Hover: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fui-colorNeutralForeground3Pressed: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fui-colorNeutralForeground3Selected: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fui-colorNeutralForeground3BrandHover: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorNeutralForeground3BrandPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fui-colorNeutralForeground3BrandSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorNeutralForeground4: theme(colors.grey-60); /* #999999 Global.Color.Grey.60 */
		--fui-colorNeutralForegroundDisabled: theme(colors.grey-36); /* #5c5c5c Global.Color.Grey.36 */
		--fui-colorNeutralForegroundInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.white-alpha.40 */
		--fui-colorBrandForegroundLink: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorBrandForegroundLinkHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fui-colorBrandForegroundLinkPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fui-colorBrandForegroundLinkSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorNeutralForeground2Link: theme(colors.grey-84); /* #d6d6d6 Global.Color.Grey.84 */
		--fui-colorNeutralForeground2LinkHover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground2LinkPressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForeground2LinkSelected: white; /* #ffffff Global.Color.White */
		--fui-colorCompoundBrandForeground1: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorCompoundBrandForeground1Hover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fui-colorCompoundBrandForeground1Pressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fui-colorBrandForeground1: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorBrandForeground2: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fui-colorNeutralForeground1Static: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForegroundStaticInverted: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInverted: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForegroundInvertedHover: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForegroundInvertedPressed: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForegroundInvertedSelected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForegroundInverted2: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralForegroundOnBrand: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLink: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLinkHover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLinkPressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralForegroundInvertedLinkSelected: white; /* #ffffff Global.Color.White */
		--fui-colorBrandForegroundInverted: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandForegroundInvertedHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorBrandForegroundInvertedPressed: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorBrandForegroundOnLight: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandForegroundOnLightHover: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorBrandForegroundOnLightPressed: theme(colors.brand-web-50); /* #004c87 Global.Color.Brand.50 */
		--fui-colorBrandForegroundOnLightSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorNeutralBackground1: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fui-colorNeutralBackground1Hover: theme(colors.grey-24); /* #3d3d3d Global.Color.Grey.24 */
		--fui-colorNeutralBackground1Pressed: theme(colors.grey-12); /* #1f1f1f Global.Color.Grey.12 */
		--fui-colorNeutralBackground1Selected: theme(colors.grey-22); /* #383838 Global.Color.Grey.22 */
		--fui-colorNeutralBackground2: theme(colors.grey-12); /* #1f1f1f Global.Color.Grey.12 */
		--fui-colorNeutralBackground2Hover: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fui-colorNeutralBackground2Pressed: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fui-colorNeutralBackground2Selected: theme(colors.grey-18); /* #2e2e2e Global.Color.Grey.18 */
		--fui-colorNeutralBackground3: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fui-colorNeutralBackground3Hover: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fui-colorNeutralBackground3Pressed: theme(colors.grey-4); /* #0a0a0a Global.Color.Grey.4 */
		--fui-colorNeutralBackground3Selected: theme(colors.grey-14); /* #242424 Global.Color.Grey.14 */
		--fui-colorNeutralBackground4: theme(colors.grey-4); /* #0a0a0a Global.Color.Grey.4 */
		--fui-colorNeutralBackground4Hover: theme(colors.grey-12); /* #1f1f1f Global.Color.Grey.12 */
		--fui-colorNeutralBackground4Pressed: black; /* #000000 Global.Color.Black */
		--fui-colorNeutralBackground4Selected: theme(colors.grey-10); /* #1a1a1a Global.Color.Grey.10 */
		--fui-colorNeutralBackground5: black; /* #000000 Global.Color.Black */
		--fui-colorNeutralBackground5Hover: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fui-colorNeutralBackground5Pressed: theme(colors.grey-2); /* #050505 Global.Color.Grey.2 */
		--fui-colorNeutralBackground5Selected: theme(colors.grey-6); /* #0f0f0f Global.Color.Grey.6 */
		--fui-colorNeutralBackground6: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fui-colorNeutralBackgroundInverted: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralBackgroundStatic: theme(colors.grey-24); /* #3d3d3d Global.Color.Grey.24 */
		--fui-colorNeutralBackgroundAlpha: theme(colors.grey-10-alpha-50); /* rgba(26, 26, 26, 0.5) Global.Color.grey-10-alpha.50 */
		--fui-colorNeutralBackgroundAlpha2: theme(colors.grey-12-alpha-70); /* rgba(31, 31, 31, 0.7) Global.Color.grey-12-alpha.70 */
		--fui-colorSubtleBackground: transparent; /* transparent undefined */
		--fui-colorSubtleBackgroundHover: theme(colors.grey-22); /* #383838 Global.Color.Grey.22 */
		--fui-colorSubtleBackgroundPressed: theme(colors.grey-18); /* #2e2e2e Global.Color.Grey.18 */
		--fui-colorSubtleBackgroundSelected: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fui-colorSubtleBackgroundLightAlphaHover: theme(colors.grey-14-alpha-80); /* rgba(36, 36, 36, 0.8) Global.Color.grey-14-alpha.80 */
		--fui-colorSubtleBackgroundLightAlphaPressed: theme(colors.grey-14-alpha-50); /* rgba(36, 36, 36, 0.5) Global.Color.grey-14-alpha.50 */
		--fui-colorSubtleBackgroundLightAlphaSelected: transparent; /* transparent undefined */
		--fui-colorSubtleBackgroundInverted: transparent; /* transparent undefined */
		--fui-colorSubtleBackgroundInvertedHover: theme(colors.black-alpha-10); /* rgba(0, 0, 0, 0.1) Global.Color.black-alpha.10 */
		--fui-colorSubtleBackgroundInvertedPressed: theme(colors.black-alpha-30); /* rgba(0, 0, 0, 0.3) Global.Color.black-alpha.30 */
		--fui-colorSubtleBackgroundInvertedSelected: theme(colors.black-alpha-20); /* rgba(0, 0, 0, 0.2) Global.Color.black-alpha.20 */
		--fui-colorTransparentBackground: transparent; /* transparent undefined */
		--fui-colorTransparentBackgroundHover: transparent; /* transparent undefined */
		--fui-colorTransparentBackgroundPressed: transparent; /* transparent undefined */
		--fui-colorTransparentBackgroundSelected: transparent; /* transparent undefined */
		--fui-colorNeutralBackgroundDisabled: theme(colors.grey-8); /* #141414 Global.Color.Grey.8 */
		--fui-colorNeutralBackgroundInvertedDisabled: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.white-alpha.10 */
		--fui-colorNeutralStencil1: theme(colors.grey-34); /* #575757 Global.Color.Grey.34 */
		--fui-colorNeutralStencil2: theme(colors.grey-20); /* #333333 Global.Color.Grey.20 */
		--fui-colorNeutralStencil1Alpha: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.white-alpha.10 */
		--fui-colorNeutralStencil2Alpha: theme(colors.white-alpha-5); /* rgba(255, 255, 255, 0.05) Global.Color.white-alpha.5 */
		--fui-colorBackgroundOverlay: theme(colors.black-alpha-50); /* rgba(0, 0, 0, 0.5) Global.Color.black-alpha.50 */
		--fui-colorScrollbarOverlay: theme(colors.white-alpha-60); /* rgba(255, 255, 255, 0.6) Global.Color.white-alpha.60 */
		--fui-colorBrandBackground: theme(colors.brand-web-70); /* #106ebe Global.Color.Brand.70 */
		--fui-colorBrandBackgroundHover: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandBackgroundPressed: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fui-colorBrandBackgroundSelected: theme(colors.brand-web-60); /* #005a9e Global.Color.Brand.60 */
		--fui-colorCompoundBrandBackground: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorCompoundBrandBackgroundHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fui-colorCompoundBrandBackgroundPressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fui-colorBrandBackgroundStatic: theme(colors.brand-web-80); /* #0078d4 Global.Color.Brand.80 */
		--fui-colorBrandBackground2: theme(colors.brand-web-40); /* #004578 Global.Color.Brand.40 */
		--fui-colorBrandBackgroundInverted: white; /* #ffffff Global.Color.White */
		--fui-colorBrandBackgroundInvertedHover: theme(colors.brand-web-160); /* #eff6fc Global.Color.Brand.160 */
		--fui-colorBrandBackgroundInvertedPressed: theme(colors.brand-web-140); /* #c7e0f4 Global.Color.Brand.140 */
		--fui-colorBrandBackgroundInvertedSelected: theme(colors.brand-web-150); /* #deecf9 Global.Color.Brand.150 */
		--fui-colorNeutralStrokeAccessible: theme(colors.grey-68); /* #adadad Global.Color.Grey.68 */
		--fui-colorNeutralStrokeAccessibleHover: theme(colors.grey-74); /* #bdbdbd Global.Color.Grey.74 */
		--fui-colorNeutralStrokeAccessiblePressed: theme(colors.grey-70); /* #b3b3b3 Global.Color.Grey.70 */
		--fui-colorNeutralStrokeAccessibleSelected: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorNeutralStroke1: theme(colors.grey-40); /* #666666 Global.Color.Grey.40 */
		--fui-colorNeutralStroke1Hover: theme(colors.grey-46); /* #757575 Global.Color.Grey.46 */
		--fui-colorNeutralStroke1Pressed: theme(colors.grey-42); /* #6b6b6b Global.Color.Grey.42 */
		--fui-colorNeutralStroke1Selected: theme(colors.grey-44); /* #707070 Global.Color.Grey.44 */
		--fui-colorNeutralStroke2: theme(colors.grey-32); /* #525252 Global.Color.Grey.32 */
		--fui-colorNeutralStroke3: theme(colors.grey-24); /* #3d3d3d Global.Color.Grey.24 */
		--fui-colorNeutralStrokeOnBrand: theme(colors.grey-16); /* #292929 Global.Color.Grey.16 */
		--fui-colorNeutralStrokeOnBrand2: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralStrokeOnBrand2Hover: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralStrokeOnBrand2Pressed: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralStrokeOnBrand2Selected: white; /* #ffffff Global.Color.White */
		--fui-colorBrandStroke1: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorBrandStroke2: theme(colors.brand-web-50); /* #004c87 Global.Color.Brand.50 */
		--fui-colorCompoundBrandStroke: theme(colors.brand-web-100); /* #2899f5 Global.Color.Brand.100 */
		--fui-colorCompoundBrandStrokeHover: theme(colors.brand-web-110); /* #3aa0f3 Global.Color.Brand.110 */
		--fui-colorCompoundBrandStrokePressed: theme(colors.brand-web-90); /* #1890f1 Global.Color.Brand.90 */
		--fui-colorNeutralStrokeDisabled: theme(colors.grey-26); /* #424242 Global.Color.Grey.26 */
		--fui-colorNeutralStrokeInvertedDisabled: theme(colors.white-alpha-40); /* rgba(255, 255, 255, 0.4) Global.Color.white-alpha.40 */
		--fui-colorTransparentStroke: transparent; /* transparent undefined */
		--fui-colorTransparentStrokeInteractive: transparent; /* transparent undefined */
		--fui-colorTransparentStrokeDisabled: transparent; /* transparent undefined */
		--fui-colorNeutralStrokeAlpha: theme(colors.white-alpha-10); /* rgba(255, 255, 255, 0.1) Global.Color.white-alpha.10 */
		--fui-colorStrokeFocus1: black; /* #000000 Global.Color.Black */
		--fui-colorStrokeFocus2: white; /* #ffffff Global.Color.White */
		--fui-colorNeutralShadowAmbient: rgba(0, 0, 0, 0.24); /* rgba(0,0,0,0.24) undefined */
		--fui-colorNeutralShadowKey: rgba(0, 0, 0, 0.28); /* rgba(0,0,0,0.28) undefined */
		--fui-colorNeutralShadowAmbientLighter: rgba(0, 0, 0, 0.12); /* rgba(0,0,0,0.12) undefined */
		--fui-colorNeutralShadowKeyLighter: rgba(0, 0, 0, 0.14); /* rgba(0,0,0,0.14) undefined */
		--fui-colorNeutralShadowAmbientDarker: rgba(0, 0, 0, 0.4); /* rgba(0,0,0,0.40) undefined */
		--fui-colorNeutralShadowKeyDarker: rgba(0, 0, 0, 0.48); /* rgba(0,0,0,0.48) undefined */
		--fui-colorBrandShadowAmbient: rgba(0, 0, 0, 0.3); /* rgba(0,0,0,0.30) undefined */
		--fui-colorBrandShadowKey: rgba(0, 0, 0, 0.25); /* rgba(0,0,0,0.25) undefined */

		/********************************************************************************/

		/* Color palette tokens */

		/* Color palette red tokens */
		--fui-colorPaletteRedBackground1: theme(colors.red-shade40);
		--fui-colorPaletteRedBackground2: theme(colors.red-shade30);
		--fui-colorPaletteRedBackground3: theme(colors.red-primary);
		--fui-colorPaletteRedBorderActive: theme(colors.red-tint30);
		--fui-colorPaletteRedBorder1: theme(colors.red-primary);
		/* --fui-colorPaletteRedBorder2: theme(colors.red-tint20); */
		--fui-colorPaletteRedBorder2: theme(colors.red-tint30);
		--fui-colorPaletteRedForeground1: theme(colors.red-tint30);
		--fui-colorPaletteRedForeground2: theme(colors.red-tint40);
		--fui-colorPaletteRedForeground3: theme(colors.red-tint20);
		--fui-colorPaletteRedForegroundInverted: theme(colors.red-primary);

		/* Color palette green tokens */
		--fui-colorPaletteGreenBackground1: theme(colors.green-shade40);
		--fui-colorPaletteGreenBackground2: theme(colors.green-shade30);
		--fui-colorPaletteGreenBackground3: theme(colors.green-primary);
		--fui-colorPaletteGreenBorderActive: theme(colors.green-tint30);
		--fui-colorPaletteGreenBorder1: theme(colors.green-primary);
		/* --fui-colorPaletteGreenBorder2: theme(colors.green-tint20); */
		--fui-colorPaletteGreenBorder2: theme(colors.green-tint40);
		--fui-colorPaletteGreenForeground1: theme(colors.green-tint30);
		--fui-colorPaletteGreenForeground2: theme(colors.green-tint40);
		/* --fui-colorPaletteGreenForeground3: theme(colors.green-tint20); */
		--fui-colorPaletteGreenForeground3: theme(colors.green-tint40);
		--fui-colorPaletteGreenForegroundInverted: theme(colors.green-primary);

		/* Color palette dark orange tokens */
		--fui-colorPaletteDarkOrangeBackground1: theme(colors.dark-orange-shade40);
		--fui-colorPaletteDarkOrangeBackground2: theme(colors.dark-orange-shade30);
		--fui-colorPaletteDarkOrangeBackground3: theme(colors.dark-orange-primary);
		--fui-colorPaletteDarkOrangeBorderActive: theme(colors.dark-orange-tint30);
		--fui-colorPaletteDarkOrangeBorder1: theme(colors.dark-orange-primary);
		/* --fui-colorPaletteDarkOrangeBorder2: theme(colors.dark-orange-tint20); */
		--fui-colorPaletteDarkOrangeBorder2: theme(colors.dark-orange-tint30);
		--fui-colorPaletteDarkOrangeForeground1: theme(colors.dark-orange-tint30);
		--fui-colorPaletteDarkOrangeForeground2: theme(colors.dark-orange-tint40);
		/* --fui-colorPaletteDarkOrangeForeground3: theme(colors.dark-orange-tint20); */
		--fui-colorPaletteDarkOrangeForeground3: theme(colors.dark-orange-tint30);

		/* Color palette yellow tokens */
		--fui-colorPaletteYellowBackground1: theme(colors.yellow-shade40);
		--fui-colorPaletteYellowBackground2: theme(colors.yellow-shade30);
		--fui-colorPaletteYellowBackground3: theme(colors.yellow-primary);
		--fui-colorPaletteYellowBorderActive: theme(colors.yellow-tint30);
		--fui-colorPaletteYellowBorder1: theme(colors.yellow-primary);
		--fui-colorPaletteYellowBorder2: theme(colors.yellow-tint20);
		--fui-colorPaletteYellowForeground1: theme(colors.yellow-tint30);
		--fui-colorPaletteYellowForeground2: theme(colors.yellow-tint40);
		--fui-colorPaletteYellowForeground3: theme(colors.yellow-tint20);
		--fui-colorPaletteYellowForegroundInverted: theme(colors.yellow-shade30);

		/* Color palette berry tokens */
		--fui-colorPaletteBerryBackground1: theme(colors.berry-shade40);
		--fui-colorPaletteBerryBackground2: theme(colors.berry-shade30);
		--fui-colorPaletteBerryBackground3: theme(colors.berry-primary);
		--fui-colorPaletteBerryBorderActive: theme(colors.berry-tint30);
		--fui-colorPaletteBerryBorder1: theme(colors.berry-primary);
		--fui-colorPaletteBerryBorder2: theme(colors.berry-tint20);
		--fui-colorPaletteBerryForeground1: theme(colors.berry-tint30);
		--fui-colorPaletteBerryForeground2: theme(colors.berry-tint40);
		--fui-colorPaletteBerryForeground3: theme(colors.berry-tint20);

		/* Color palette marigold tokens */
		--fui-colorPaletteMarigoldBackground1: theme(colors.marigold-shade40);
		--fui-colorPaletteMarigoldBackground2: theme(colors.marigold-shade30);
		--fui-colorPaletteMarigoldBackground3: theme(colors.marigold-primary);
		--fui-colorPaletteMarigoldBorderActive: theme(colors.marigold-tint30);
		--fui-colorPaletteMarigoldBorder1: theme(colors.marigold-primary);
		--fui-colorPaletteMarigoldBorder2: theme(colors.marigold-tint20);
		--fui-colorPaletteMarigoldForeground1: theme(colors.marigold-tint30);
		--fui-colorPaletteMarigoldForeground2: theme(colors.marigold-tint40);
		--fui-colorPaletteMarigoldForeground3: theme(colors.marigold-tint20);

		/* Color palette light green tokens */
		--fui-colorPaletteLightGreenBackground1: theme(colors.light-green-shade40);
		--fui-colorPaletteLightGreenBackground2: theme(colors.light-green-shade30);
		--fui-colorPaletteLightGreenBackground3: theme(colors.light-green-primary);
		--fui-colorPaletteLightGreenBorderActive: theme(colors.light-green-tint30);
		--fui-colorPaletteLightGreenBorder1: theme(colors.light-green-primary);
		--fui-colorPaletteLightGreenBorder2: theme(colors.light-green-tint20);
		--fui-colorPaletteLightGreenForeground1: theme(colors.light-green-tint30);
		--fui-colorPaletteLightGreenForeground2: theme(colors.light-green-tint40);
		--fui-colorPaletteLightGreenForeground3: theme(colors.light-green-tint20);

		/* Color palette anchor tokens */
		--fui-colorPaletteAnchorBackground2: theme(colors.anchor-shade30);
		--fui-colorPaletteAnchorBorderActive: theme(colors.anchor-tint30);
		--fui-colorPaletteAnchorForeground2: theme(colors.anchor-tint40);

		/* Color palette beige tokens */
		--fui-colorPaletteBeigeBackground2: theme(colors.beige-shade30);
		--fui-colorPaletteBeigeBorderActive: theme(colors.beige-tint30);
		--fui-colorPaletteBeigeForeground2: theme(colors.beige-tint40);

		/* Color palette blue tokens */
		--fui-colorPaletteBlueBackground2: theme(colors.blue-shade30);
		--fui-colorPaletteBlueBorderActive: theme(colors.blue-tint30);
		--fui-colorPaletteBlueForeground2: theme(colors.blue-tint40);

		/* Color palette brass tokens */
		--fui-colorPaletteBrassBackground2: theme(colors.brass-shade30);
		--fui-colorPaletteBrassBorderActive: theme(colors.brass-tint30);
		--fui-colorPaletteBrassForeground2: theme(colors.brass-tint40);

		/* Color palette brown tokens */
		--fui-colorPaletteBrownBackground2: theme(colors.brown-shade30);
		--fui-colorPaletteBrownBorderActive: theme(colors.brown-tint30);
		--fui-colorPaletteBrownForeground2: theme(colors.brown-tint40);

		/* Color palette cornflower tokens */
		--fui-colorPaletteCornflowerBackground2: theme(colors.cornflower-shade30);
		--fui-colorPaletteCornflowerBorderActive: theme(colors.cornflower-tint30);
		--fui-colorPaletteCornflowerForeground2: theme(colors.cornflower-tint40);

		/* Color palette cranberry tokens */
		--fui-colorPaletteCranberryBackground2: theme(colors.cranberry-shade30);
		--fui-colorPaletteCranberryBorderActive: theme(colors.cranberry-tint30);
		--fui-colorPaletteCranberryForeground2: theme(colors.cranberry-tint40);

		/* Color palette dark green tokens */
		--fui-colorPaletteDarkGreenBackground2: theme(colors.dark-green-shade30);
		--fui-colorPaletteDarkGreenBorderActive: theme(colors.dark-green-tint30);
		--fui-colorPaletteDarkGreenForeground2: theme(colors.dark-green-tint40);

		/* Color palette dark red tokens */
		--fui-colorPaletteDarkRedBackground2: theme(colors.dark-red-shade30);
		--fui-colorPaletteDarkRedBorderActive: theme(colors.dark-red-tint30);
		--fui-colorPaletteDarkRedForeground2: theme(colors.dark-red-tint40);

		/* Color palette forest tokens */
		--fui-colorPaletteForestBackground2: theme(colors.forest-shade30);
		--fui-colorPaletteForestBorderActive: theme(colors.forest-tint30);
		--fui-colorPaletteForestForeground2: theme(colors.forest-tint40);

		/* Color palette gold tokens */
		--fui-colorPaletteGoldBackground2: theme(colors.gold-shade30);
		--fui-colorPaletteGoldBorderActive: theme(colors.gold-tint30);
		--fui-colorPaletteGoldForeground2: theme(colors.gold-tint40);

		/* Color palette grape tokens */
		--fui-colorPaletteGrapeBackground2: theme(colors.grape-shade30);
		--fui-colorPaletteGrapeBorderActive: theme(colors.grape-tint30);
		--fui-colorPaletteGrapeForeground2: theme(colors.grape-tint40);

		/* Color palette lavender tokens */
		--fui-colorPaletteLavenderBackground2: theme(colors.lavender-shade30);
		--fui-colorPaletteLavenderBorderActive: theme(colors.lavender-tint30);
		--fui-colorPaletteLavenderForeground2: theme(colors.lavender-tint40);

		/* Color palette light teal tokens */
		--fui-colorPaletteLightTealBackground2: theme(colors.light-teal-shade30);
		--fui-colorPaletteLightTealBorderActive: theme(colors.light-teal-tint30);
		--fui-colorPaletteLightTealForeground2: theme(colors.light-teal-tint40);

		/* Color palette lilac tokens */
		--fui-colorPaletteLilacBackground2: theme(colors.lilac-shade30);
		--fui-colorPaletteLilacBorderActive: theme(colors.lilac-tint30);
		--fui-colorPaletteLilacForeground2: theme(colors.lilac-tint40);

		/* Color palette magenta tokens */
		--fui-colorPaletteMagentaBackground2: theme(colors.magenta-shade30);
		--fui-colorPaletteMagentaBorderActive: theme(colors.magenta-tint30);
		--fui-colorPaletteMagentaForeground2: theme(colors.magenta-tint40);

		/* Color palette mink tokens */
		--fui-colorPaletteMinkBackground2: theme(colors.mink-shade30);
		--fui-colorPaletteMinkBorderActive: theme(colors.mink-tint30);
		--fui-colorPaletteMinkForeground2: theme(colors.mink-tint40);

		/* Color palette navy tokens */
		--fui-colorPaletteNavyBackground2: theme(colors.navy-shade30);
		--fui-colorPaletteNavyBorderActive: theme(colors.navy-tint30);
		--fui-colorPaletteNavyForeground2: theme(colors.navy-tint40);

		/* Color palette peach tokens */
		--fui-colorPalettePeachBackground2: theme(colors.peach-shade30);
		--fui-colorPalettePeachBorderActive: theme(colors.peach-tint30);
		--fui-colorPalettePeachForeground2: theme(colors.peach-tint40);

		/* Color palette pink tokens */
		--fui-colorPalettePinkBackground2: theme(colors.pink-shade30);
		--fui-colorPalettePinkBorderActive: theme(colors.pink-tint30);
		--fui-colorPalettePinkForeground2: theme(colors.pink-tint40);

		/* Color palette platinum tokens */
		--fui-colorPalettePlatinumBackground2: theme(colors.platinum-shade30);
		--fui-colorPalettePlatinumBorderActive: theme(colors.platinum-tint30);
		--fui-colorPalettePlatinumForeground2: theme(colors.platinum-tint40);

		/* Color palette plum tokens */
		--fui-colorPalettePlumBackground2: theme(colors.plum-shade30);
		--fui-colorPalettePlumBorderActive: theme(colors.plum-tint30);
		--fui-colorPalettePlumForeground2: theme(colors.plum-tint40);

		/* Color palette pumpkin tokens */
		--fui-colorPalettePumpkinBackground2: theme(colors.pumpkin-shade30);
		--fui-colorPalettePumpkinBorderActive: theme(colors.pumpkin-tint30);
		--fui-colorPalettePumpkinForeground2: theme(colors.pumpkin-tint40);

		/* Color palette purple tokens */
		--fui-colorPalettePurpleBackground2: theme(colors.purple-shade30);
		--fui-colorPalettePurpleBorderActive: theme(colors.purple-tint30);
		--fui-colorPalettePurpleForeground2: theme(colors.purple-tint40);

		/* Color palette royal blue tokens */
		--fui-colorPaletteRoyalBlueBackground2: theme(colors.royal-blue-shade30);
		--fui-colorPaletteRoyalBlueBorderActive: theme(colors.royal-blue-tint30);
		--fui-colorPaletteRoyalBlueForeground2: theme(colors.royal-blue-tint40);

		/* Color palette seafoam tokens */
		--fui-colorPaletteSeafoamBackground2: theme(colors.seafoam-shade30);
		--fui-colorPaletteSeafoamBorderActive: theme(colors.seafoam-tint30);
		--fui-colorPaletteSeafoamForeground2: theme(colors.seafoam-tint40);

		/* Color palette steel tokens */
		--fui-colorPaletteSteelBackground2: theme(colors.steel-shade30);
		--fui-colorPaletteSteelBorderActive: theme(colors.steel-tint30);
		--fui-colorPaletteSteelForeground2: theme(colors.steel-tint40);

		/* Color palette teal tokens */
		--fui-colorPaletteTealBackground2: theme(colors.teal-shade30);
		--fui-colorPaletteTealBorderActive: theme(colors.teal-tint30);
		--fui-colorPaletteTealForeground2: theme(colors.teal-tint40);
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
