import resolve from 'tailwindcss/resolveConfig';
import tailwindcssConfig from 'svelte-fui/tailwindcss';
import type { Theme } from '../types';

const config = resolve(tailwindcssConfig);
const theme = config.theme;
const colors = theme.colors;

export default {
	'--fui-colorNeutralForeground1': 'white',
	'--fui-colorNeutralForeground1Hover': 'white',
	'--fui-colorNeutralForeground1Pressed': 'white',
	'--fui-colorNeutralForeground1Selected': 'white',
	'--fui-colorNeutralForeground2': colors['grey-84'],
	'--fui-colorNeutralForeground2Hover': 'white',
	'--fui-colorNeutralForeground2Pressed': 'white',
	'--fui-colorNeutralForeground2Selected': 'white',
	'--fui-colorNeutralForeground2BrandHover': colors['brand-web-100'],
	'--fui-colorNeutralForeground2BrandPressed': colors['brand-web-90'],
	'--fui-colorNeutralForeground2BrandSelected': colors['brand-web-100'],
	'--fui-colorNeutralForeground3': colors['grey-68'],
	'--fui-colorNeutralForeground3Hover': colors['grey-84'],
	'--fui-colorNeutralForeground3Pressed': colors['grey-84'],
	'--fui-colorNeutralForeground3Selected': colors['grey-84'],
	'--fui-colorNeutralForeground3BrandHover': colors['brand-web-100'],
	'--fui-colorNeutralForeground3BrandPressed': colors['brand-web-90'],
	'--fui-colorNeutralForeground3BrandSelected': colors['brand-web-100'],
	'--fui-colorNeutralForeground4': colors['grey-60'],
	'--fui-colorNeutralForegroundDisabled': colors['grey-36'],
	'--fui-colorNeutralForegroundInvertedDisabled': colors['white-alpha-40'],
	'--fui-colorBrandForegroundLink': colors['brand-web-100'],
	'--fui-colorBrandForegroundLinkHover': colors['brand-web-110'],
	'--fui-colorBrandForegroundLinkPressed': colors['brand-web-90'],
	'--fui-colorBrandForegroundLinkSelected': colors['brand-web-100'],
	'--fui-colorNeutralForeground2Link': colors['grey-84'],
	'--fui-colorNeutralForeground2LinkHover': 'white',
	'--fui-colorNeutralForeground2LinkPressed': 'white',
	'--fui-colorNeutralForeground2LinkSelected': 'white',
	'--fui-colorCompoundBrandForeground1': colors['brand-web-100'],
	'--fui-colorCompoundBrandForeground1Hover': colors['brand-web-110'],
	'--fui-colorCompoundBrandForeground1Pressed': colors['brand-web-90'],
	'--fui-colorBrandForeground1': colors['brand-web-100'],
	'--fui-colorBrandForeground2': colors['brand-web-110'],
	'--fui-colorNeutralForeground1Static': colors['grey-14'],
	'--fui-colorNeutralForegroundStaticInverted': 'white',
	'--fui-colorNeutralForegroundInverted': colors['grey-14'],
	'--fui-colorNeutralForegroundInvertedHover': colors['grey-14'],
	'--fui-colorNeutralForegroundInvertedPressed': colors['grey-14'],
	'--fui-colorNeutralForegroundInvertedSelected': colors['grey-14'],
	'--fui-colorNeutralForegroundInverted2': colors['grey-14'],
	'--fui-colorNeutralForegroundOnBrand': 'white',
	'--fui-colorNeutralForegroundInvertedLink': 'white',
	'--fui-colorNeutralForegroundInvertedLinkHover': 'white',
	'--fui-colorNeutralForegroundInvertedLinkPressed': 'white',
	'--fui-colorNeutralForegroundInvertedLinkSelected': 'white',
	'--fui-colorBrandForegroundInverted': colors['brand-web-80'],
	'--fui-colorBrandForegroundInvertedHover': colors['brand-web-70'],
	'--fui-colorBrandForegroundInvertedPressed': colors['brand-web-60'],
	'--fui-colorBrandForegroundOnLight': colors['brand-web-80'],
	'--fui-colorBrandForegroundOnLightHover': colors['brand-web-70'],
	'--fui-colorBrandForegroundOnLightPressed': colors['brand-web-50'],
	'--fui-colorBrandForegroundOnLightSelected': colors['brand-web-60'],
	'--fui-colorNeutralBackground1': colors['grey-16'],
	'--fui-colorNeutralBackground1Hover': colors['grey-24'],
	'--fui-colorNeutralBackground1Pressed': colors['grey-12'],
	'--fui-colorNeutralBackground1Selected': colors['grey-22'],
	'--fui-colorNeutralBackground2': colors['grey-12'],
	'--fui-colorNeutralBackground2Hover': colors['grey-20'],
	'--fui-colorNeutralBackground2Pressed': colors['grey-8'],
	'--fui-colorNeutralBackground2Selected': colors['grey-18'],
	'--fui-colorNeutralBackground3': colors['grey-8'],
	'--fui-colorNeutralBackground3Hover': colors['grey-16'],
	'--fui-colorNeutralBackground3Pressed': colors['grey-4'],
	'--fui-colorNeutralBackground3Selected': colors['grey-14'],
	'--fui-colorNeutralBackground4': colors['grey-4'],
	'--fui-colorNeutralBackground4Hover': colors['grey-12'],
	'--fui-colorNeutralBackground4Pressed': 'black',
	'--fui-colorNeutralBackground4Selected': colors['grey-10'],
	'--fui-colorNeutralBackground5': 'black',
	'--fui-colorNeutralBackground5Hover': colors['grey-8'],
	'--fui-colorNeutralBackground5Pressed': colors['grey-2'],
	'--fui-colorNeutralBackground5Selected': colors['grey-6'],
	'--fui-colorNeutralBackground6': colors['grey-20'],
	'--fui-colorNeutralBackgroundInverted': 'white',
	'--fui-colorNeutralBackgroundStatic': colors['grey-24'],
	'--fui-colorNeutralBackgroundAlpha': colors['grey-10-alpha-50'],
	'--fui-colorNeutralBackgroundAlpha2': colors['grey-12-alpha-70'],
	'--fui-colorSubtleBackground': 'transparent',
	'--fui-colorSubtleBackgroundHover': colors['grey-22'],
	'--fui-colorSubtleBackgroundPressed': colors['grey-18'],
	'--fui-colorSubtleBackgroundSelected': colors['grey-20'],
	'--fui-colorSubtleBackgroundLightAlphaHover': colors['grey-14-alpha-80'],
	'--fui-colorSubtleBackgroundLightAlphaPressed': colors['grey-14-alpha-50'],
	'--fui-colorSubtleBackgroundLightAlphaSelected': 'transparent',
	'--fui-colorSubtleBackgroundInverted': 'transparent',
	'--fui-colorSubtleBackgroundInvertedHover': colors['black-alpha-10'],
	'--fui-colorSubtleBackgroundInvertedPressed': colors['black-alpha-30'],
	'--fui-colorSubtleBackgroundInvertedSelected': colors['black-alpha-20'],
	'--fui-colorTransparentBackground': 'transparent',
	'--fui-colorTransparentBackgroundHover': 'transparent',
	'--fui-colorTransparentBackgroundPressed': 'transparent',
	'--fui-colorTransparentBackgroundSelected': 'transparent',
	'--fui-colorNeutralBackgroundDisabled': colors['grey-8'],
	'--fui-colorNeutralBackgroundInvertedDisabled': colors['white-alpha-10'],
	'--fui-colorNeutralStencil1': colors['grey-34'],
	'--fui-colorNeutralStencil2': colors['grey-20'],
	'--fui-colorNeutralStencil1Alpha': colors['white-alpha-10'],
	'--fui-colorNeutralStencil2Alpha': colors['white-alpha-5'],
	'--fui-colorBackgroundOverlay': colors['black-alpha-50'],
	'--fui-colorScrollbarOverlay': colors['white-alpha-60'],
	'--fui-colorBrandBackground': colors['brand-web-70'],
	'--fui-colorBrandBackgroundHover': colors['brand-web-80'],
	'--fui-colorBrandBackgroundPressed': colors['brand-web-40'],
	'--fui-colorBrandBackgroundSelected': colors['brand-web-60'],
	'--fui-colorCompoundBrandBackground': colors['brand-web-100'],
	'--fui-colorCompoundBrandBackgroundHover': colors['brand-web-110'],
	'--fui-colorCompoundBrandBackgroundPressed': colors['brand-web-90'],
	'--fui-colorBrandBackgroundStatic': colors['brand-web-80'],
	'--fui-colorBrandBackground2': colors['brand-web-40'],
	'--fui-colorBrandBackgroundInverted': 'white',
	'--fui-colorBrandBackgroundInvertedHover': colors['brand-web-160'],
	'--fui-colorBrandBackgroundInvertedPressed': colors['brand-web-140'],
	'--fui-colorBrandBackgroundInvertedSelected': colors['brand-web-150'],
	'--fui-colorNeutralStrokeAccessible': colors['grey-68'],
	'--fui-colorNeutralStrokeAccessibleHover': colors['grey-74'],
	'--fui-colorNeutralStrokeAccessiblePressed': colors['grey-70'],
	'--fui-colorNeutralStrokeAccessibleSelected': colors['brand-web-100'],
	'--fui-colorNeutralStroke1': colors['grey-40'],
	'--fui-colorNeutralStroke1Hover': colors['grey-46'],
	'--fui-colorNeutralStroke1Pressed': colors['grey-42'],
	'--fui-colorNeutralStroke1Selected': colors['grey-44'],
	'--fui-colorNeutralStroke2': colors['grey-32'],
	'--fui-colorNeutralStroke3': colors['grey-24'],
	'--fui-colorNeutralStrokeOnBrand': colors['grey-16'],
	'--fui-colorNeutralStrokeOnBrand2': 'white',
	'--fui-colorNeutralStrokeOnBrand2Hover': 'white',
	'--fui-colorNeutralStrokeOnBrand2Pressed': 'white',
	'--fui-colorNeutralStrokeOnBrand2Selected': 'white',
	'--fui-colorBrandStroke1': colors['brand-web-100'],
	'--fui-colorBrandStroke2': colors['brand-web-50'],
	'--fui-colorCompoundBrandStroke': colors['brand-web-100'],
	'--fui-colorCompoundBrandStrokeHover': colors['brand-web-110'],
	'--fui-colorCompoundBrandStrokePressed': colors['brand-web-90'],
	'--fui-colorNeutralStrokeDisabled': colors['grey-26'],
	'--fui-colorNeutralStrokeInvertedDisabled': colors['white-alpha-40'],
	'--fui-colorTransparentStroke': 'transparent',
	'--fui-colorTransparentStrokeInteractive': 'transparent',
	'--fui-colorTransparentStrokeDisabled': 'transparent',
	'--fui-colorNeutralStrokeAlpha': colors['white-alpha-10'],
	'--fui-colorStrokeFocus1': 'black',
	'--fui-colorStrokeFocus2': 'white',
	'--fui-colorNeutralShadowAmbient': 'rgba(0, 0, 0, 0.24)',
	'--fui-colorNeutralShadowKey': 'rgba(0, 0, 0, 0.28)',
	'--fui-colorNeutralShadowAmbientLighter': 'rgba(0, 0, 0, 0.12)',
	'--fui-colorNeutralShadowKeyLighter': 'rgba(0, 0, 0, 0.14)',
	'--fui-colorNeutralShadowAmbientDarker': 'rgba(0, 0, 0, 0.4)',
	'--fui-colorNeutralShadowKeyDarker': 'rgba(0, 0, 0, 0.48)',
	'--fui-colorBrandShadowAmbient': 'rgba(0, 0, 0, 0.3)',
	'--fui-colorBrandShadowKey': 'rgba(0, 0, 0, 0.25)',

	/********************************************************************************/

	/* Color palette tokens */

	/* Color palette red tokens */
	'--fui-colorPaletteRedBackground1': colors['red-shade40'],
	'--fui-colorPaletteRedBackground2': colors['red-shade30'],
	'--fui-colorPaletteRedBackground3': colors['red-primary'],
	'--fui-colorPaletteRedBorderActive': colors['red-tint30'],
	'--fui-colorPaletteRedBorder1': colors['red-primary'],
	/* '--fui-colorPaletteRedBorder2': theme(colors.red-tint20); */
	'--fui-colorPaletteRedBorder2': colors['red-tint30'],
	'--fui-colorPaletteRedForeground1': colors['red-tint30'],
	'--fui-colorPaletteRedForeground2': colors['red-tint40'],
	'--fui-colorPaletteRedForeground3': colors['red-tint20'],
	'--fui-colorPaletteRedForegroundInverted': colors['red-primary'],

	/* Color palette green tokens */
	'--fui-colorPaletteGreenBackground1': colors['green-shade40'],
	'--fui-colorPaletteGreenBackground2': colors['green-shade30'],
	'--fui-colorPaletteGreenBackground3': colors['green-primary'],
	'--fui-colorPaletteGreenBorderActive': colors['green-tint30'],
	'--fui-colorPaletteGreenBorder1': colors['green-primary'],
	/* '--fui-colorPaletteGreenBorder2': theme(colors.green-tint20); */
	'--fui-colorPaletteGreenBorder2': colors['green-tint40'],
	'--fui-colorPaletteGreenForeground1': colors['green-tint30'],
	'--fui-colorPaletteGreenForeground2': colors['green-tint40'],
	/* '--fui-colorPaletteGreenForeground3': theme(colors.green-tint20); */
	'--fui-colorPaletteGreenForeground3': colors['green-tint40'],
	'--fui-colorPaletteGreenForegroundInverted': colors['green-primary'],

	/* Color palette dark orange tokens */
	'--fui-colorPaletteDarkOrangeBackground1': colors['dark-orange-shade40'],
	'--fui-colorPaletteDarkOrangeBackground2': colors['dark-orange-shade30'],
	'--fui-colorPaletteDarkOrangeBackground3': colors['dark-orange-primary'],
	'--fui-colorPaletteDarkOrangeBorderActive': colors['dark-orange-tint30'],
	'--fui-colorPaletteDarkOrangeBorder1': colors['dark-orange-primary'],
	/* '--fui-colorPaletteDarkOrangeBorder2': theme(colors.dark-orange-tint20); */
	'--fui-colorPaletteDarkOrangeBorder2': colors['dark-orange-tint30'],
	'--fui-colorPaletteDarkOrangeForeground1': colors['dark-orange-tint30'],
	'--fui-colorPaletteDarkOrangeForeground2': colors['dark-orange-tint40'],
	/* '--fui-colorPaletteDarkOrangeForeground3': theme(colors.dark-orange-tint20); */
	'--fui-colorPaletteDarkOrangeForeground3': colors['dark-orange-tint30'],

	/* Color palette yellow tokens */
	'--fui-colorPaletteYellowBackground1': colors['yellow-shade40'],
	'--fui-colorPaletteYellowBackground2': colors['yellow-shade30'],
	'--fui-colorPaletteYellowBackground3': colors['yellow-primary'],
	'--fui-colorPaletteYellowBorderActive': colors['yellow-tint30'],
	'--fui-colorPaletteYellowBorder1': colors['yellow-primary'],
	'--fui-colorPaletteYellowBorder2': colors['yellow-tint20'],
	'--fui-colorPaletteYellowForeground1': colors['yellow-tint30'],
	'--fui-colorPaletteYellowForeground2': colors['yellow-tint40'],
	'--fui-colorPaletteYellowForeground3': colors['yellow-tint20'],
	'--fui-colorPaletteYellowForegroundInverted': colors['yellow-shade30'],

	/* Color palette berry tokens */
	'--fui-colorPaletteBerryBackground1': colors['berry-shade40'],
	'--fui-colorPaletteBerryBackground2': colors['berry-shade30'],
	'--fui-colorPaletteBerryBackground3': colors['berry-primary'],
	'--fui-colorPaletteBerryBorderActive': colors['berry-tint30'],
	'--fui-colorPaletteBerryBorder1': colors['berry-primary'],
	'--fui-colorPaletteBerryBorder2': colors['berry-tint20'],
	'--fui-colorPaletteBerryForeground1': colors['berry-tint30'],
	'--fui-colorPaletteBerryForeground2': colors['berry-tint40'],
	'--fui-colorPaletteBerryForeground3': colors['berry-tint20'],

	/* Color palette marigold tokens */
	'--fui-colorPaletteMarigoldBackground1': colors['marigold-shade40'],
	'--fui-colorPaletteMarigoldBackground2': colors['marigold-shade30'],
	'--fui-colorPaletteMarigoldBackground3': colors['marigold-primary'],
	'--fui-colorPaletteMarigoldBorderActive': colors['marigold-tint30'],
	'--fui-colorPaletteMarigoldBorder1': colors['marigold-primary'],
	'--fui-colorPaletteMarigoldBorder2': colors['marigold-tint20'],
	'--fui-colorPaletteMarigoldForeground1': colors['marigold-tint30'],
	'--fui-colorPaletteMarigoldForeground2': colors['marigold-tint40'],
	'--fui-colorPaletteMarigoldForeground3': colors['marigold-tint20'],

	/* Color palette light green tokens */
	'--fui-colorPaletteLightGreenBackground1': colors['light-green-shade40'],
	'--fui-colorPaletteLightGreenBackground2': colors['light-green-shade30'],
	'--fui-colorPaletteLightGreenBackground3': colors['light-green-primary'],
	'--fui-colorPaletteLightGreenBorderActive': colors['light-green-tint30'],
	'--fui-colorPaletteLightGreenBorder1': colors['light-green-primary'],
	'--fui-colorPaletteLightGreenBorder2': colors['light-green-tint20'],
	'--fui-colorPaletteLightGreenForeground1': colors['light-green-tint30'],
	'--fui-colorPaletteLightGreenForeground2': colors['light-green-tint40'],
	'--fui-colorPaletteLightGreenForeground3': colors['light-green-tint20'],

	/* Color palette anchor tokens */
	'--fui-colorPaletteAnchorBackground2': colors['anchor-shade30'],
	'--fui-colorPaletteAnchorBorderActive': colors['anchor-tint30'],
	'--fui-colorPaletteAnchorForeground2': colors['anchor-tint40'],

	/* Color palette beige tokens */
	'--fui-colorPaletteBeigeBackground2': colors['beige-shade30'],
	'--fui-colorPaletteBeigeBorderActive': colors['beige-tint30'],
	'--fui-colorPaletteBeigeForeground2': colors['beige-tint40'],

	/* Color palette blue tokens */
	'--fui-colorPaletteBlueBackground2': colors['blue-shade30'],
	'--fui-colorPaletteBlueBorderActive': colors['blue-tint30'],
	'--fui-colorPaletteBlueForeground2': colors['blue-tint40'],

	/* Color palette brass tokens */
	'--fui-colorPaletteBrassBackground2': colors['brass-shade30'],
	'--fui-colorPaletteBrassBorderActive': colors['brass-tint30'],
	'--fui-colorPaletteBrassForeground2': colors['brass-tint40'],

	/* Color palette brown tokens */
	'--fui-colorPaletteBrownBackground2': colors['brown-shade30'],
	'--fui-colorPaletteBrownBorderActive': colors['brown-tint30'],
	'--fui-colorPaletteBrownForeground2': colors['brown-tint40'],

	/* Color palette cornflower tokens */
	'--fui-colorPaletteCornflowerBackground2': colors['cornflower-shade30'],
	'--fui-colorPaletteCornflowerBorderActive': colors['cornflower-tint30'],
	'--fui-colorPaletteCornflowerForeground2': colors['cornflower-tint40'],

	/* Color palette cranberry tokens */
	'--fui-colorPaletteCranberryBackground2': colors['cranberry-shade30'],
	'--fui-colorPaletteCranberryBorderActive': colors['cranberry-tint30'],
	'--fui-colorPaletteCranberryForeground2': colors['cranberry-tint40'],

	/* Color palette dark green tokens */
	'--fui-colorPaletteDarkGreenBackground2': colors['dark-green-shade30'],
	'--fui-colorPaletteDarkGreenBorderActive': colors['dark-green-tint30'],
	'--fui-colorPaletteDarkGreenForeground2': colors['dark-green-tint40'],

	/* Color palette dark red tokens */
	'--fui-colorPaletteDarkRedBackground2': colors['dark-red-shade30'],
	'--fui-colorPaletteDarkRedBorderActive': colors['dark-red-tint30'],
	'--fui-colorPaletteDarkRedForeground2': colors['dark-red-tint40'],

	/* Color palette forest tokens */
	'--fui-colorPaletteForestBackground2': colors['forest-shade30'],
	'--fui-colorPaletteForestBorderActive': colors['forest-tint30'],
	'--fui-colorPaletteForestForeground2': colors['forest-tint40'],

	/* Color palette gold tokens */
	'--fui-colorPaletteGoldBackground2': colors['gold-shade30'],
	'--fui-colorPaletteGoldBorderActive': colors['gold-tint30'],
	'--fui-colorPaletteGoldForeground2': colors['gold-tint40'],

	/* Color palette grape tokens */
	'--fui-colorPaletteGrapeBackground2': colors['grape-shade30'],
	'--fui-colorPaletteGrapeBorderActive': colors['grape-tint30'],
	'--fui-colorPaletteGrapeForeground2': colors['grape-tint40'],

	/* Color palette lavender tokens */
	'--fui-colorPaletteLavenderBackground2': colors['lavender-shade30'],
	'--fui-colorPaletteLavenderBorderActive': colors['lavender-tint30'],
	'--fui-colorPaletteLavenderForeground2': colors['lavender-tint40'],

	/* Color palette light teal tokens */
	'--fui-colorPaletteLightTealBackground2': colors['light-teal-shade30'],
	'--fui-colorPaletteLightTealBorderActive': colors['light-teal-tint30'],
	'--fui-colorPaletteLightTealForeground2': colors['light-teal-tint40'],

	/* Color palette lilac tokens */
	'--fui-colorPaletteLilacBackground2': colors['lilac-shade30'],
	'--fui-colorPaletteLilacBorderActive': colors['lilac-tint30'],
	'--fui-colorPaletteLilacForeground2': colors['lilac-tint40'],

	/* Color palette magenta tokens */
	'--fui-colorPaletteMagentaBackground2': colors['magenta-shade30'],
	'--fui-colorPaletteMagentaBorderActive': colors['magenta-tint30'],
	'--fui-colorPaletteMagentaForeground2': colors['magenta-tint40'],

	/* Color palette mink tokens */
	'--fui-colorPaletteMinkBackground2': colors['mink-shade30'],
	'--fui-colorPaletteMinkBorderActive': colors['mink-tint30'],
	'--fui-colorPaletteMinkForeground2': colors['mink-tint40'],

	/* Color palette navy tokens */
	'--fui-colorPaletteNavyBackground2': colors['navy-shade30'],
	'--fui-colorPaletteNavyBorderActive': colors['navy-tint30'],
	'--fui-colorPaletteNavyForeground2': colors['navy-tint40'],

	/* Color palette peach tokens */
	'--fui-colorPalettePeachBackground2': colors['peach-shade30'],
	'--fui-colorPalettePeachBorderActive': colors['peach-tint30'],
	'--fui-colorPalettePeachForeground2': colors['peach-tint40'],

	/* Color palette pink tokens */
	'--fui-colorPalettePinkBackground2': colors['pink-shade30'],
	'--fui-colorPalettePinkBorderActive': colors['pink-tint30'],
	'--fui-colorPalettePinkForeground2': colors['pink-tint40'],

	/* Color palette platinum tokens */
	'--fui-colorPalettePlatinumBackground2': colors['platinum-shade30'],
	'--fui-colorPalettePlatinumBorderActive': colors['platinum-tint30'],
	'--fui-colorPalettePlatinumForeground2': colors['platinum-tint40'],

	/* Color palette plum tokens */
	'--fui-colorPalettePlumBackground2': colors['plum-shade30'],
	'--fui-colorPalettePlumBorderActive': colors['plum-tint30'],
	'--fui-colorPalettePlumForeground2': colors['plum-tint40'],

	/* Color palette pumpkin tokens */
	'--fui-colorPalettePumpkinBackground2': colors['pumpkin-shade30'],
	'--fui-colorPalettePumpkinBorderActive': colors['pumpkin-tint30'],
	'--fui-colorPalettePumpkinForeground2': colors['pumpkin-tint40'],

	/* Color palette purple tokens */
	'--fui-colorPalettePurpleBackground2': colors['purple-shade30'],
	'--fui-colorPalettePurpleBorderActive': colors['purple-tint30'],
	'--fui-colorPalettePurpleForeground2': colors['purple-tint40'],

	/* Color palette royal blue tokens */
	'--fui-colorPaletteRoyalBlueBackground2': colors['royal-blue-shade30'],
	'--fui-colorPaletteRoyalBlueBorderActive': colors['royal-blue-tint30'],
	'--fui-colorPaletteRoyalBlueForeground2': colors['royal-blue-tint40'],

	/* Color palette seafoam tokens */
	'--fui-colorPaletteSeafoamBackground2': colors['seafoam-shade30'],
	'--fui-colorPaletteSeafoamBorderActive': colors['seafoam-tint30'],
	'--fui-colorPaletteSeafoamForeground2': colors['seafoam-tint40'],

	/* Color palette steel tokens */
	'--fui-colorPaletteSteelBackground2': colors['steel-shade30'],
	'--fui-colorPaletteSteelBorderActive': colors['steel-tint30'],
	'--fui-colorPaletteSteelForeground2': colors['steel-tint40'],

	/* Color palette teal tokens */
	'--fui-colorPaletteTealBackground2': colors['teal-shade30'],
	'--fui-colorPaletteTealBorderActive': colors['teal-tint30'],
	'--fui-colorPaletteTealForeground2': colors['teal-tint40'],

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
