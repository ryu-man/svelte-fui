import { brandWeb } from '../../global/brandColors';
import type { Theme } from '../../types';
import { createLightTheme } from '../../utils';

export const webLightTheme = createLightTheme(brandWeb) satisfies Theme;
