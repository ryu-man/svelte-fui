import { brandWeb } from '@svelte-fui/theme/global/brandColors';
import type { Theme } from '@svelte-fui/theme/types';
import { createLightTheme } from '@svelte-fui/theme/utils';

export const webLightTheme = createLightTheme(brandWeb) satisfies Theme;
