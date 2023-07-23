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

		console.log(upperedFirstColorName, sharedColor);

		const sharedColorTokens = {
			[`colorPalette${upperedFirstColorName}Background1`]: statusSharedColors[sharedColor].tint60,
			[`colorPalette${upperedFirstColorName}Background2`]: statusSharedColors[sharedColor].tint40,
			[`colorPalette${upperedFirstColorName}Background3`]: statusSharedColors[sharedColor].primary,
			[`colorPalette${upperedFirstColorName}Foreground1`]: statusSharedColors[sharedColor].shade10,
			[`colorPalette${upperedFirstColorName}Foreground2`]: statusSharedColors[sharedColor].shade30,
			[`colorPalette${upperedFirstColorName}Foreground3`]: statusSharedColors[sharedColor].primary,
			[`colorPalette${upperedFirstColorName}BorderActive`]: statusSharedColors[sharedColor].primary,
			[`colorPalette${upperedFirstColorName}Border1`]: statusSharedColors[sharedColor].tint40,
			[`colorPalette${upperedFirstColorName}Border2`]: statusSharedColors[sharedColor].primary
		};

		return Object.assign(acc, sharedColorTokens);
	}, {} as StatusColorPaletteTokens),
	statusSharedColors
);

const personaColorPaletteTokens = applyPersonaColorPalettePatches(
	personaSharedColorNames.reduce((acc, sharedColor) => {
		const upperedFirstColorName = upperFirst(sharedColor);

		const sharedColorTokens = {
			[`colorPalette${upperedFirstColorName}Background2`]: personaSharedColors[sharedColor].tint40,
			[`colorPalette${upperedFirstColorName}Foreground2`]: personaSharedColors[sharedColor].shade30,
			[`colorPalette${upperedFirstColorName}BorderActive`]: personaSharedColors[sharedColor].primary
		};

		return Object.assign(acc, sharedColorTokens);
	}, {} as PersonaColorPaletteTokens),
	personaSharedColors
);

export const colorPaletteTokens: ColorPaletteTokens = { ...statusColorPaletteTokens, ...personaColorPaletteTokens };

function applyStatusColorPalettePatches(tokens: StatusColorPaletteTokens, shared: StatusSharedColors) {
	// one-off patch for yellow
	tokens.colorPaletteYellowForeground1 = shared.yellow.shade30;

	tokens.colorPaletteRedForegroundInverted = shared.red.tint20;
	tokens.colorPaletteGreenForegroundInverted = shared.green.tint20;
	tokens.colorPaletteYellowForegroundInverted = shared.yellow.tint40;

	return tokens;
}

function applyPersonaColorPalettePatches(tokens: PersonaColorPaletteTokens, shared: PersonaSharedColors) {
	// one-off patches
	// No patches

	return tokens;
}
