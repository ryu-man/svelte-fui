import { brandWeb } from '../../global/brandColors';
import type { Theme } from '../../types';
import { createDarkTheme } from '../../utils';

export const webDarkTheme = createDarkTheme(brandWeb) satisfies Theme;
