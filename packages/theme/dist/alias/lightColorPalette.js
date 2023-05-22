/* color palette used in both darkTheme and teamsDarkTheme */
import { capitalize } from 'lodash-es';
import { personaSharedColors, statusSharedColors } from '../global/colorPalette';
import { personaSharedColorNames, statusSharedColorNames } from '../sharedColorNames';
const statusColorPaletteTokens = applyStatusColorPalettePatches(statusSharedColorNames.reduce((acc, sharedColor) => {
    const capitalizedColorName = capitalize(sharedColor);
    const sharedColorTokens = {
        [`colorPalette${capitalizedColorName}Background1`]: statusSharedColors[sharedColor].tint60,
        [`colorPalette${capitalizedColorName}Background2`]: statusSharedColors[sharedColor].tint40,
        [`colorPalette${capitalizedColorName}Background3`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${capitalizedColorName}Foreground1`]: statusSharedColors[sharedColor].shade10,
        [`colorPalette${capitalizedColorName}Foreground2`]: statusSharedColors[sharedColor].shade30,
        [`colorPalette${capitalizedColorName}Foreground3`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${capitalizedColorName}BorderActive`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${capitalizedColorName}Border1`]: statusSharedColors[sharedColor].tint40,
        [`colorPalette${capitalizedColorName}Border2`]: statusSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {}), statusSharedColors);
const personaColorPaletteTokens = applyPersonaColorPalettePatches(personaSharedColorNames.reduce((acc, sharedColor) => {
    const capitalizedColorName = capitalize(sharedColor);
    const sharedColorTokens = {
        [`colorPalette${capitalizedColorName}Background2`]: personaSharedColors[sharedColor].tint40,
        [`colorPalette${capitalizedColorName}Foreground2`]: personaSharedColors[sharedColor].shade30,
        [`colorPalette${capitalizedColorName}BorderActive`]: personaSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {}), personaSharedColors);
export const colorPaletteTokens = { ...statusColorPaletteTokens, ...personaColorPaletteTokens };
function applyStatusColorPalettePatches(tokens, shared) {
    // one-off patch for yellow
    tokens.colorPaletteYellowForeground1 = shared.yellow.shade30;
    tokens.colorPaletteRedForegroundInverted = shared.red.tint20;
    tokens.colorPaletteGreenForegroundInverted = shared.green.tint20;
    tokens.colorPaletteYellowForegroundInverted = shared.yellow.tint40;
    return tokens;
}
function applyPersonaColorPalettePatches(tokens, shared) {
    // one-off patches
    // No patches
    return tokens;
}
