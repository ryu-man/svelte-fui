/* color palette used in both darkTheme and teamsDarkTheme */
import { upperFirst } from 'lodash-es';
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
		const upperedFirstColorName = upperFirst(sharedColor);

		const sharedColorTokens = {
			[`colorPalette${upperedFirstColorName}Background1`]: statusSharedColors[sharedColor].shade40,
			[`colorPalette${upperedFirstColorName}Background2`]: statusSharedColors[sharedColor].shade30,
			[`colorPalette${upperedFirstColorName}Background3`]: statusSharedColors[sharedColor].primary,
			[`colorPalette${upperedFirstColorName}Foreground1`]: statusSharedColors[sharedColor].tint30,
			[`colorPalette${upperedFirstColorName}Foreground2`]: statusSharedColors[sharedColor].tint40,
			[`colorPalette${upperedFirstColorName}Foreground3`]: statusSharedColors[sharedColor].tint20,
			[`colorPalette${upperedFirstColorName}BorderActive`]: statusSharedColors[sharedColor].tint30,
			[`colorPalette${upperedFirstColorName}Border1`]: statusSharedColors[sharedColor].primary,
			[`colorPalette${upperedFirstColorName}Border2`]: statusSharedColors[sharedColor].tint20
		};

		return Object.assign(acc, sharedColorTokens);
	}, {} as StatusColorPaletteTokens),
	statusSharedColors
);

const personaColorPaletteTokens = applyPersonaColorPalettePatches(
	personaSharedColorNames.reduce((acc, sharedColor) => {
		const upperedFirstColorName = upperFirst(sharedColor);

		const sharedColorTokens = {
			[`colorPalette${upperedFirstColorName}Background2`]: personaSharedColors[sharedColor].shade30,
			[`colorPalette${upperedFirstColorName}Foreground2`]: personaSharedColors[sharedColor].tint40,
			[`colorPalette${upperedFirstColorName}BorderActive`]: personaSharedColors[sharedColor].tint30
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
