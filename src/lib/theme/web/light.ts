import resolve from 'tailwindcss/resolveConfig';
import tailwindcssConfig from 'svelte-fui/tailwindcss';
import type { Theme } from '../types';

const config = resolve(tailwindcssConfig);
const theme = config.theme;
const colors = theme.colors;

export default {
	'--fui-colorNeutralForeground1': colors['grey-14'],
	'--fui-colorNeutralForeground1Hover': colors['grey-14'],
	'--fui-colorNeutralForeground1Pressed': colors['grey-14'],
	'--fui-colorNeutralForeground1Selected': colors['grey-14'],
	'--fui-colorNeutralForeground2': colors['grey-26'],
	'--fui-colorNeutralForeground2Hover': colors['grey-14'],
	'--fui-colorNeutralForeground2Pressed': colors['grey-14'],
	'--fui-colorNeutralForeground2Selected': colors['grey-14'],
	'--fui-colorNeutralForeground2BrandHover': colors['brand-web-80'],
	'--fui-colorNeutralForeground2BrandPressed': colors['brand-web-70'],
	'--fui-colorNeutralForeground2BrandSelected': colors['brand-web-80'],
	'--fui-colorNeutralForeground3': colors['grey-38'],
	'--fui-colorNeutralForeground3Hover': colors['grey-26'],
	'--fui-colorNeutralForeground3Pressed': colors['grey-26'],
	'--fui-colorNeutralForeground3Selected': colors['grey-26'],
	'--fui-colorNeutralForeground3BrandHover': colors['brand-web-80'],
	'--fui-colorNeutralForeground3BrandPressed': colors['brand-web-70'],
	'--fui-colorNeutralForeground3BrandSelected': colors['brand-web-80'],
	'--fui-colorNeutralForeground4': colors['grey-44'],
	'--fui-colorNeutralForegroundDisabled': colors['grey-74'],
	'--fui-colorNeutralForegroundInvertedDisabled': colors['white-alpha-40'],
	'--fui-colorBrandForegroundLink': colors['brand-web-70'],
	'--fui-colorBrandForegroundLinkHover': colors['brand-web-60'],
	'--fui-colorBrandForegroundLinkPressed': colors['brand-web-40'],
	'--fui-colorBrandForegroundLinkSelected': colors['brand-web-70'],
	'--fui-colorNeutralForeground2Link': colors['grey-26'],
	'--fui-colorNeutralForeground2LinkHover': colors['grey-14'],
	'--fui-colorNeutralForeground2LinkPressed': colors['grey-14'],
	'--fui-colorNeutralForeground2LinkSelected': colors['grey-14'],
	'--fui-colorCompoundBrandForeground1': colors['brand-web-80'],
	'--fui-colorCompoundBrandForeground1Hover': colors['brand-web-70'],
	'--fui-colorCompoundBrandForeground1Pressed': colors['brand-web-60'],
	'--fui-colorBrandForeground1': colors['brand-web-80'],
	'--fui-colorBrandForeground2': colors['brand-web-70'],
	'--fui-colorNeutralForeground1Static': colors['grey-14'],
	'--fui-colorNeutralForegroundStaticInverted': 'white',
	'--fui-colorNeutralForegroundInverted': 'white',
	'--fui-colorNeutralForegroundInvertedHover': 'white',
	'--fui-colorNeutralForegroundInvertedPressed': 'white',
	'--fui-colorNeutralForegroundInvertedSelected': 'white',
	'--fui-colorNeutralForegroundInverted2': 'white',
	'--fui-colorNeutralForegroundOnBrand': 'white',
	'--fui-colorNeutralForegroundInvertedLink': 'white',
	'--fui-colorNeutralForegroundInvertedLinkHover': 'white',
	'--fui-colorNeutralForegroundInvertedLinkPressed': 'white',
	'--fui-colorNeutralForegroundInvertedLinkSelected': 'white',
	'--fui-colorBrandForegroundInverted': colors['brand-web-100'],
	'--fui-colorBrandForegroundInvertedHover': colors['brand-web-110'],
	'--fui-colorBrandForegroundInvertedPressed': colors['brand-web-100'],
	'--fui-colorBrandForegroundOnLight': colors['brand-web-80'],
	'--fui-colorBrandForegroundOnLightHover': colors['brand-web-70'],
	'--fui-colorBrandForegroundOnLightPressed': colors['brand-web-50'],
	'--fui-colorBrandForegroundOnLightSelected': colors['brand-web-60'],
	'--fui-colorNeutralBackground1': 'white',
	'--fui-colorNeutralBackground1Hover': colors['grey-96'],
	'--fui-colorNeutralBackground1Pressed': colors['grey-88'],
	'--fui-colorNeutralBackground1Selected': colors['grey-92'],
	'--fui-colorNeutralBackground2': colors['grey-98'],
	'--fui-colorNeutralBackground2Hover': colors['grey-94'],
	'--fui-colorNeutralBackground2Pressed': colors['grey-86'],
	'--fui-colorNeutralBackground2Selected': colors['grey-90'],
	'--fui-colorNeutralBackground3': colors['grey-96'],
	'--fui-colorNeutralBackground3Hover': colors['grey-92'],
	'--fui-colorNeutralBackground3Pressed': colors['grey-84'],
	'--fui-colorNeutralBackground3Selected': colors['grey-88'],
	'--fui-colorNeutralBackground4': colors['grey-94'],
	'--fui-colorNeutralBackground4Hover': colors['grey-98'],
	'--fui-colorNeutralBackground4Pressed': colors['grey-96'],
	'--fui-colorNeutralBackground4Selected': 'white',
	'--fui-colorNeutralBackground5': colors['grey-92'],
	'--fui-colorNeutralBackground5Hover': colors['grey-96'],
	'--fui-colorNeutralBackground5Pressed': colors['grey-94'],
	'--fui-colorNeutralBackground5Selected': colors['grey-98'],
	'--fui-colorNeutralBackground6': colors['grey-90'],
	'--fui-colorNeutralBackgroundInverted': colors['grey-16'],
	'--fui-colorNeutralBackgroundStatic': colors['grey-20'],
	'--fui-colorNeutralBackgroundAlpha': colors['white-alpha-50'],
	'--fui-colorNeutralBackgroundAlpha2': colors['white-alpha-80'],
	'--fui-colorSubtleBackground': 'transparent',
	'--fui-colorSubtleBackgroundHover': colors['grey-96'],
	'--fui-colorSubtleBackgroundPressed': colors['grey-88'],
	'--fui-colorSubtleBackgroundSelected': colors['grey-92'],
	'--fui-colorSubtleBackgroundLightAlphaHover': colors['white-alpha-70'],
	'--fui-colorSubtleBackgroundLightAlphaPressed': colors['white-alpha-50'],
	'--fui-colorSubtleBackgroundLightAlphaSelected': 'transparent',
	'--fui-colorSubtleBackgroundInverted': 'transparent',
	'--fui-colorSubtleBackgroundInvertedHover': colors['black-alpha-10'],
	'--fui-colorSubtleBackgroundInvertedPressed': colors['black-alpha-30'],
	'--fui-colorSubtleBackgroundInvertedSelected': colors['black-alpha-20'],
	'--fui-colorTransparentBackground': 'transparent',
	'--fui-colorTransparentBackgroundHover': 'transparent',
	'--fui-colorTransparentBackgroundPressed': 'transparent',
	'--fui-colorTransparentBackgroundSelected': 'transparent',
	'--fui-colorNeutralBackgroundDisabled': colors['grey-94'],
	'--fui-colorNeutralBackgroundInvertedDisabled': colors['white-alpha-10'],
	'--fui-colorNeutralStencil1': colors['grey-90'],
	'--fui-colorNeutralStencil2': colors['grey-98'],
	'--fui-colorNeutralStencil1Alpha': colors['black-alpha-10'],
	'--fui-colorNeutralStencil2Alpha': colors['black-alpha-5'],
	'--fui-colorBackgroundOverlay': colors['black-alpha-40'],
	'--fui-colorScrollbarOverlay': colors['black-alpha-50'],
	'--fui-colorBrandBackground': colors['brand-web-80'],
	'--fui-colorBrandBackgroundHover': colors['brand-web-70'],
	'--fui-colorBrandBackgroundPressed': colors['brand-web-40'],
	'--fui-colorBrandBackgroundSelected': colors['brand-web-60'],
	'--fui-colorCompoundBrandBackground': colors['brand-web-80'],
	'--fui-colorCompoundBrandBackgroundHover': colors['brand-web-70'],
	'--fui-colorCompoundBrandBackgroundPressed': colors['brand-web-60'],
	'--fui-colorBrandBackgroundStatic': colors['brand-web-80'],
	'--fui-colorBrandBackground2': colors['brand-web-160'],
	'--fui-colorBrandBackgroundInverted': 'white',
	'--fui-colorBrandBackgroundInvertedHover': colors['brand-web-160'],
	'--fui-colorBrandBackgroundInvertedPressed': colors['brand-web-140'],
	'--fui-colorBrandBackgroundInvertedSelected': colors['brand-web-150'],
	'--fui-colorNeutralStrokeAccessible': colors['grey-38'],
	'--fui-colorNeutralStrokeAccessibleHover': colors['grey-34'],
	'--fui-colorNeutralStrokeAccessiblePressed': colors['grey-30'],
	'--fui-colorNeutralStrokeAccessibleSelected': colors['brand-web-80'],
	'--fui-colorNeutralStroke1': colors['grey-82'],
	'--fui-colorNeutralStroke1Hover': colors['grey-78'],
	'--fui-colorNeutralStroke1Pressed': colors['grey-70'],
	'--fui-colorNeutralStroke1Selected': colors['grey-74'],
	'--fui-colorNeutralStroke2': colors['grey-88'],
	'--fui-colorNeutralStroke3': colors['grey-94'],
	'--fui-colorNeutralStrokeOnBrand': 'white',
	'--fui-colorNeutralStrokeOnBrand2': 'white',
	'--fui-colorNeutralStrokeOnBrand2Hover': 'white',
	'--fui-colorNeutralStrokeOnBrand2Pressed': 'white',
	'--fui-colorNeutralStrokeOnBrand2Selected': 'white',
	'--fui-colorBrandStroke1': colors['brand-web-80'],
	'--fui-colorBrandStroke2': colors['brand-web-140'],
	'--fui-colorCompoundBrandStroke': colors['brand-web-80'],
	'--fui-colorCompoundBrandStrokeHover': colors['brand-web-70'],
	'--fui-colorCompoundBrandStrokePressed': colors['brand-web-60'],
	'--fui-colorNeutralStrokeDisabled': colors['grey-88'],
	'--fui-colorNeutralStrokeInvertedDisabled': colors['white-alpha-40'],
	'--fui-colorTransparentStroke': 'transparent',
	'--fui-colorTransparentStrokeInteractive': 'transparent',
	'--fui-colorTransparentStrokeDisabled': 'transparent',
	'--fui-colorNeutralStrokeAlpha': colors['black-alpha-5'],
	'--fui-colorStrokeFocus1': 'white',
	'--fui-colorStrokeFocus2': 'black',
	'--fui-colorNeutralShadowAmbient': 'rgba(0, 0, 0, 0.12)',
	'--fui-colorNeutralShadowKey': 'rgba(0, 0, 0, 0.14)',
	'--fui-colorNeutralShadowAmbientLighter': 'rgba(0, 0, 0, 0.06)',
	'--fui-colorNeutralShadowKeyLighter': 'rgba(0, 0, 0, 0.07)',
	'--fui-colorNeutralShadowAmbientDarker': 'rgba(0, 0, 0, 0.2)',
	'--fui-colorNeutralShadowKeyDarker': 'rgba(0, 0, 0, 0.24)',
	'--fui-colorBrandShadowAmbient': 'rgba(0, 0, 0, 0.3)',
	'--fui-colorBrandShadowKey': 'rgba(0, 0, 0, 0.25)',

	/*******************************/

	/* Color palette tokens */

	/* Color palette red tokens */
	'--fui-colorPaletteRedBackground1': colors['red-tint60'],
	'--fui-colorPaletteRedBackground2': colors['red-tint40'],
	'--fui-colorPaletteRedBackground3': colors['red-primary'],
	'--fui-colorPaletteRedBorderActive': colors['red-primary'],
	'--fui-colorPaletteRedBorder1': colors['red-tint40'],
	'--fui-colorPaletteRedBorder2': colors['red-primary'],
	'--fui-colorPaletteRedForeground1': colors['red-shade10'],
	'--fui-colorPaletteRedForeground2': colors['red-shade30'],
	'--fui-colorPaletteRedForeground3': colors['red-tint30'],
	'--fui-colorPaletteRedForegroundInverted': colors['red-tint20'],

	/* Color palette green tokens */
	'--fui-colorPaletteGreenBackground1': colors['green-tint60'],
	'--fui-colorPaletteGreenBackground2': colors['green-tint40'],
	'--fui-colorPaletteGreenBackground3': colors['green-primary'],
	'--fui-colorPaletteGreenBorderActive': colors['green-primary'],
	'--fui-colorPaletteGreenBorder1': colors['green-tint40'],
	'--fui-colorPaletteGreenBorder2': colors['green-primary'],
	'--fui-colorPaletteGreenForeground1': colors['green-shade10'],
	'--fui-colorPaletteGreenForeground2': colors['green-shade30'],
	'--fui-colorPaletteGreenForeground3': colors['green-primary'],
	'--fui-colorPaletteGreenForegroundInverted': colors['green-tint20'],

	/* Color palette dark orange tokens */
	'--fui-colorPaletteDarkOrangeBackground1': colors['dark-orange-tint60'],
	'--fui-colorPaletteDarkOrangeBackground2': colors['dark-orange-tint40'],
	'--fui-colorPaletteDarkOrangeBackground3': colors['dark-orange-primary'],
	'--fui-colorPaletteDarkOrangeBorderActive': colors['dark-orange-primary'],
	'--fui-colorPaletteDarkOrangeBorder1': colors['dark-orange-tint40'],
	'--fui-colorPaletteDarkOrangeBorder2': colors['dark-orange-primary'],
	'--fui-colorPaletteDarkOrangeForeground1': colors['dark-orange-shade10'],
	'--fui-colorPaletteDarkOrangeForeground2': colors['dark-orange-shade30'],
	'--fui-colorPaletteDarkOrangeForeground3': colors['dark-orange-primary'],

	/* Color palette yellow tokens */
	'--fui-colorPaletteYellowBackground1': colors['yellow-tint60'],
	'--fui-colorPaletteYellowBackground2': colors['yellow-tint40'],
	'--fui-colorPaletteYellowBackground3': colors['yellow-primary'],
	'--fui-colorPaletteYellowBorderActive': colors['yellow-primary'],
	'--fui-colorPaletteYellowBorder1': colors['yellow-tint40'],
	'--fui-colorPaletteYellowBorder2': colors['yellow-primary'],
	'--fui-colorPaletteYellowForeground1': colors['yellow-shade30'],
	'--fui-colorPaletteYellowForeground2': colors['yellow-shade30'],
	'--fui-colorPaletteYellowForeground3': colors['yellow-primary'],
	'--fui-colorPaletteYellowForegroundInverted': colors['yellow-tint40'],

	/* Color palette berry tokens */
	'--fui-colorPaletteBerryBackground1': colors['berry-tint60'],
	'--fui-colorPaletteBerryBackground2': colors['berry-tint40'],
	'--fui-colorPaletteBerryBackground3': colors['berry-primary'],
	'--fui-colorPaletteBerryBorderActive': colors['berry-primary'],
	'--fui-colorPaletteBerryBorder1': colors['berry-tint40'],
	'--fui-colorPaletteBerryBorder2': colors['berry-primary'],
	'--fui-colorPaletteBerryForeground1': colors['berry-shade10'],
	'--fui-colorPaletteBerryForeground2': colors['berry-shade30'],
	'--fui-colorPaletteBerryForeground3': colors['berry-primary'],

	/* Color palette marigold tokens */
	'--fui-colorPaletteMarigoldBackground1': colors['marigold-tint60'],
	'--fui-colorPaletteMarigoldBackground2': colors['marigold-tint40'],
	'--fui-colorPaletteMarigoldBackground3': colors['marigold-primary'],
	'--fui-colorPaletteMarigoldBorderActive': colors['marigold-primary'],
	'--fui-colorPaletteMarigoldBorder1': colors['marigold-tint40'],
	'--fui-colorPaletteMarigoldBorder2': colors['marigold-primary'],
	'--fui-colorPaletteMarigoldForeground1': colors['marigold-shade10'],
	'--fui-colorPaletteMarigoldForeground2': colors['marigold-shade30'],
	'--fui-colorPaletteMarigoldForeground3': colors['marigold-primary'],

	/* Color palette light green tokens */
	'--fui-colorPaletteLightGreenBackground1': colors['light-green-tint60'],
	'--fui-colorPaletteLightGreenBackground2': colors['light-green-tint40'],
	'--fui-colorPaletteLightGreenBackground3': colors['light-green-primary'],
	'--fui-colorPaletteLightGreenBorderActive': colors['light-green-primary'],
	'--fui-colorPaletteLightGreenBorder1': colors['light-green-tint40'],
	'--fui-colorPaletteLightGreenBorder2': colors['light-green-primary'],
	'--fui-colorPaletteLightGreenForeground1': colors['light-green-shade10'],
	'--fui-colorPaletteLightGreenForeground2': colors['light-green-shade30'],
	'--fui-colorPaletteLightGreenForeground3': colors['light-green-primary'],

	/* Color palette anchor tokens */
	'--fui-colorPaletteAnchorBackground2': colors['anchor-tint40'],
	'--fui-colorPaletteAnchorBorderActive': colors['anchor-primary'],
	'--fui-colorPaletteAnchorForeground2': colors['anchor-shade30'],

	/* Color palette beige tokens */
	'--fui-colorPaletteBeigeBackground2': colors['beige-tint40'],
	'--fui-colorPaletteBeigeBorderActive': colors['beige-primary'],
	'--fui-colorPaletteBeigeForeground2': colors['beige-shade30'],

	/* Color palette blue tokens */
	'--fui-colorPaletteBlueBackground2': colors['blue-tint40'],
	'--fui-colorPaletteBlueBorderActive': colors['blue-primary'],
	'--fui-colorPaletteBlueForeground2': colors['blue-shade30'],

	/* Color palette brass tokens */
	'--fui-colorPaletteBrassBackground2': colors['brass-tint40'],
	'--fui-colorPaletteBrassBorderActive': colors['brass-primary'],
	'--fui-colorPaletteBrassForeground2': colors['brass-shade30'],

	/* Color palette brown tokens */
	'--fui-colorPaletteBrownBackground2': colors['brown-tint40'],
	'--fui-colorPaletteBrownBorderActive': colors['brown-primary'],
	'--fui-colorPaletteBrownForeground2': colors['brown-shade30'],

	/* Color palette cornflower tokens */
	'--fui-colorPaletteCornflowerBackground2': colors['cornflower-tint40'],
	'--fui-colorPaletteCornflowerBorderActive': colors['cornflower-primary'],
	'--fui-colorPaletteCornflowerForeground2': colors['cornflower-shade30'],

	/* Color palette cranberry tokens */
	'--fui-colorPaletteCranberryBackground2': colors['cranberry-tint40'],
	'--fui-colorPaletteCranberryBorderActive': colors['cranberry-primary'],
	'--fui-colorPaletteCranberryForeground2': colors['cranberry-shade30'],

	/* Color palette dark green tokens */
	'--fui-colorPaletteDarkGreenBackground2': colors['dark-green-tint40'],
	'--fui-colorPaletteDarkGreenBorderActive': colors['dark-green-primary'],
	'--fui-colorPaletteDarkGreenForeground2': colors['dark-green-shade30'],

	/* Color palette dark red tokens */
	'--fui-colorPaletteDarkRedBackground2': colors['dark-red-tint40'],
	'--fui-colorPaletteDarkRedBorderActive': colors['dark-red-primary'],
	'--fui-colorPaletteDarkRedForeground2': colors['dark-red-shade30'],

	/* Color palette forest tokens */
	'--fui-colorPaletteForestBackground2': colors['forest-tint40'],
	'--fui-colorPaletteForestBorderActive': colors['forest-primary'],
	'--fui-colorPaletteForestForeground2': colors['forest-shade30'],

	/* Color palette gold tokens */
	'--fui-colorPaletteGoldBackground2': colors['gold-tint40'],
	'--fui-colorPaletteGoldBorderActive': colors['gold-primary'],
	'--fui-colorPaletteGoldForeground2': colors['gold-shade30'],

	/* Color palette grape tokens */
	'--fui-colorPaletteGrapeBackground2': colors['grape-tint40'],
	'--fui-colorPaletteGrapeBorderActive': colors['grape-primary'],
	'--fui-colorPaletteGrapeForeground2': colors['grape-shade30'],

	/* Color palette lavender tokens */
	'--fui-colorPaletteLavenderBackground2': colors['lavender-tint40'],
	'--fui-colorPaletteLavenderBorderActive': colors['lavender-primary'],
	'--fui-colorPaletteLavenderForeground2': colors['lavender-shade30'],

	/* Color palette light teal tokens */
	'--fui-colorPaletteLightTealBackground2': colors['light-teal-tint40'],
	'--fui-colorPaletteLightTealBorderActive': colors['light-teal-primary'],
	'--fui-colorPaletteLightTealForeground2': colors['light-teal-shade30'],

	/* Color palette lilac tokens */
	'--fui-colorPaletteLilacBackground2': colors['lilac-tint40'],
	'--fui-colorPaletteLilacBorderActive': colors['lilac-primary'],
	'--fui-colorPaletteLilacForeground2': colors['lilac-shade30'],

	/* Color palette magenta tokens */
	'--fui-colorPaletteMagentaBackground2': colors['magenta-tint40'],
	'--fui-colorPaletteMagentaBorderActive': colors['magenta-primary'],
	'--fui-colorPaletteMagentaForeground2': colors['magenta-shade30'],

	/* Color palette mink tokens */
	'--fui-colorPaletteMinkBackground2': colors['mink-tint40'],
	'--fui-colorPaletteMinkBorderActive': colors['mink-primary'],
	'--fui-colorPaletteMinkForeground2': colors['mink-shade30'],

	/* Color palette navy tokens */
	'--fui-colorPaletteNavyBackground2': colors['navy-tint40'],
	'--fui-colorPaletteNavyBorderActive': colors['navy-primary'],
	'--fui-colorPaletteNavyForeground2': colors['navy-shade30'],

	/* Color palette peach tokens */
	'--fui-colorPalettePeachBackground2': colors['peach-tint40'],
	'--fui-colorPalettePeachBorderActive': colors['peach-primary'],
	'--fui-colorPalettePeachForeground2': colors['peach-shade30'],

	/* Color palette pink tokens */
	'--fui-colorPalettePinkBackground2': colors['pink-tint40'],
	'--fui-colorPalettePinkBorderActive': colors['pink-primary'],
	'--fui-colorPalettePinkForeground2': colors['pink-shade30'],

	/* Color palette platinum tokens */
	'--fui-colorPalettePlatinumBackground2': colors['platinum-tint40'],
	'--fui-colorPalettePlatinumBorderActive': colors['platinum-primary'],
	'--fui-colorPalettePlatinumForeground2': colors['platinum-shade30'],

	/* Color palette plum tokens */
	'--fui-colorPalettePlumBackground2': colors['plum-tint40'],
	'--fui-colorPalettePlumBorderActive': colors['plum-primary'],
	'--fui-colorPalettePlumForeground2': colors['plum-shade30'],

	/* Color palette pumpkin tokens */
	'--fui-colorPalettePumpkinBackground2': colors['pumpkin-tint40'],
	'--fui-colorPalettePumpkinBorderActive': colors['pumpkin-primary'],
	'--fui-colorPalettePumpkinForeground2': colors['pumpkin-shade30'],

	/* Color palette purple tokens */
	'--fui-colorPalettePurpleBackground2': colors['purple-tint40'],
	'--fui-colorPalettePurpleBorderActive': colors['purple-primary'],
	'--fui-colorPalettePurpleForeground2': colors['purple-shade30'],

	/* Color palette royal blue tokens */
	'--fui-colorPaletteRoyalBlueBackground2': colors['royal-blue-tint40'],
	'--fui-colorPaletteRoyalBlueBorderActive': colors['royal-blue-primary'],
	'--fui-colorPaletteRoyalBlueForeground2': colors['royal-blue-shade30'],

	/* Color palette seafoam tokens */
	'--fui-colorPaletteSeafoamBackground2': colors['seafoam-tint40'],
	'--fui-colorPaletteSeafoamBorderActive': colors['seafoam-primary'],
	'--fui-colorPaletteSeafoamForeground2': colors['seafoam-shade30'],

	/* Color palette steel tokens */
	'--fui-colorPaletteSteelBackground2': colors['steel-tint40'],
	'--fui-colorPaletteSteelBorderActive': colors['steel-primary'],
	'--fui-colorPaletteSteelForeground2': colors['steel-shade30'],

	/* Color palette teal tokens */
	'--fui-colorPaletteTealBackground2': colors['teal-tint40'],
	'--fui-colorPaletteTealBorderActive': colors['teal-primary'],
	'--fui-colorPaletteTealForeground2': colors['teal-shade30'],

	/*************************************************************************/

	'--fui-shadow2': '0 0 2px var(--fui-colorNeutralShadowAmbient), 0 1px 2px var(--fui-colorNeutralShadowKey)',
	'--fui-shadow4': '0 0 2px var(--fui-colorNeutralShadowAmbient), 0 2px 4px var(--fui-colorNeutralShadowKey)',
	'--fui-shadow8': '0 0 2px var(--fui-colorNeutralShadowAmbient), 0 4px 8px var(--fui-colorNeutralShadowKey)',
	'--fui-shadow16': '0 0 2px var(--fui-colorNeutralShadowAmbient), 0 8px 16px var(--fui-colorNeutralShadowKey)',
	'--fui-shadow28': '0 0 8px var(--fui-colorNeutralShadowAmbient), 0 14px 28px var(--fui-colorNeutralShadowKey)',
	'--fui-shadow64': '0 0 8px var(--fui-colorNeutralShadowAmbient), 0 32px 64px var(--fui-colorNeutralShadowKey)',

	'--fui-shadow2Brand': '0 0 2px var(--fui-colorBrandShadowAmbient), 0 1px 2px var(--fui-colorBrandShadowKey)',
	'--fui-shadow4Brand': '0 0 2px var(--fui-colorBrandShadowAmbient), 0 2px 4px var(--fui-colorBrandShadowKey)',
	'--fui-shadow8Brand': '0 0 2px var(--fui-colorBrandShadowAmbient), 0 4px 8px var(--fui-colorBrandShadowKey)',
	'--fui-shadow16Brand': '0 0 2px var(--fui-colorBrandShadowAmbient), 0 8px 16px var(--fui-colorBrandShadowKey)',
	'--fui-shadow28Brand': '0 0 8px var(--fui-colorBrandShadowAmbient), 0 14px 28px var(--fui-colorBrandShadowKey)',
	'--fui-shadow64Brand': '0 0 8px var(--fui-colorBrandShadowAmbient), 0 32px 64px var(--fui-colorBrandShadowKey)'
} satisfies Theme;
