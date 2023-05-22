import { generateColorTokens } from '../alias/lightColor';
import { colorPaletteTokens } from '../alias/lightColorPalette';
// import { borderRadius, fontSizes, lineHeights, fontFamilies, strokeWidths, fontWeights } from '../global/index';
import { createShadowTokens } from './shadows';
// import { durations } from '../global/durations';
// import { curves } from '../global/curves';
// import { horizontalSpacings, verticalSpacings } from '../global/spacings';
export const createLightTheme = (brand) => {
    const colorTokens = generateColorTokens(brand);
    return {
        // ...borderRadius,
        // ...fontSizes,
        // ...lineHeights,
        // ...fontFamilies,
        // ...fontWeights,
        // ...strokeWidths,
        // ...horizontalSpacings,
        // ...verticalSpacings,
        // ...durations,
        // ...curves,
        ...colorTokens,
        ...colorPaletteTokens,
        ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
        ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, 'Brand')
    };
};
