/* color palette used in both darkTheme and teamsDarkTheme */
import { capitalize } from 'lodash-es';
import { personaSharedColors, statusSharedColors } from '../global/colorPalette';
import { personaSharedColorNames, statusSharedColorNames } from '../sharedColorNames';
import type {
	ColorPaletteTokens,
	PersonaColorPaletteTokens,
	PersonaSharedColors,
	StatusColorPaletteTokens,
	StatusSharedColors
} from '../types';

const statusColorPaletteTokens = applyStatusColorPalettePatches(
	statusSharedColorNames.reduce((acc, sharedColor) => {
		const capitalizedColorName = capitalize(sharedColor);

		const sharedColorTokens = {
			[`colorPalette${capitalizedColorName}Background1`]: statusSharedColors[sharedColor].shade40,
			[`colorPalette${capitalizedColorName}Background2`]: statusSharedColors[sharedColor].shade30,
			[`colorPalette${capitalizedColorName}Background3`]: statusSharedColors[sharedColor].primary,
			[`colorPalette${capitalizedColorName}Foreground1`]: statusSharedColors[sharedColor].tint30,
			[`colorPalette${capitalizedColorName}Foreground2`]: statusSharedColors[sharedColor].tint40,
			[`colorPalette${capitalizedColorName}Foreground3`]: statusSharedColors[sharedColor].tint20,
			[`colorPalette${capitalizedColorName}BorderActive`]: statusSharedColors[sharedColor].tint30,
			[`colorPalette${capitalizedColorName}Border1`]: statusSharedColors[sharedColor].primary,
			[`colorPalette${capitalizedColorName}Border2`]: statusSharedColors[sharedColor].tint20
		};

		return Object.assign(acc, sharedColorTokens);
	}, {} as StatusColorPaletteTokens),
	statusSharedColors
);

const personaColorPaletteTokens = applyPersonaColorPalettePatches(
	personaSharedColorNames.reduce((acc, sharedColor) => {
		const capitalizedColorName = capitalize(sharedColor);

		const sharedColorTokens = {
			[`colorPalette${capitalizedColorName}Background2`]: personaSharedColors[sharedColor].shade30,
			[`colorPalette${capitalizedColorName}Foreground2`]: personaSharedColors[sharedColor].tint40,
			[`colorPalette${capitalizedColorName}BorderActive`]: personaSharedColors[sharedColor].tint30
		};

		return Object.assign(acc, sharedColorTokens);
	}, {} as PersonaColorPaletteTokens),
	personaSharedColors
);

export const colorPaletteTokens: ColorPaletteTokens = { ...statusColorPaletteTokens, ...personaColorPaletteTokens };

function applyStatusColorPalettePatches(tokens: StatusColorPaletteTokens, shared: StatusSharedColors) {
	// one-off patches
	tokens.colorPaletteRedForeground3 = shared.red.tint30;
	tokens.colorPaletteRedBorder2 = shared.red.tint30;
	tokens.colorPaletteGreenForeground3 = shared.green.tint40;
	tokens.colorPaletteGreenBorder2 = shared.green.tint40;
	tokens.colorPaletteDarkOrangeForeground3 = shared.darkOrange.tint30;
	tokens.colorPaletteDarkOrangeBorder2 = shared.darkOrange.tint30;

	tokens.colorPaletteRedForegroundInverted = shared.red.primary;
	tokens.colorPaletteGreenForegroundInverted = shared.green.primary;
	tokens.colorPaletteYellowForegroundInverted = shared.yellow.shade30;

	return tokens;
}

function applyPersonaColorPalettePatches(tokens: PersonaColorPaletteTokens, shared: PersonaSharedColors) {
	// one-off patches
	tokens.colorPaletteDarkRedBackground2 = shared.darkRed.shade20;
	tokens.colorPalettePlumBackground2 = shared.plum.shade20;

	return tokens;
}
