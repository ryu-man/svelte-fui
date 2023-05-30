import { brandWeb } from '@svelte-fui/theme/global/brandColors';
import type { Theme } from '@svelte-fui/theme/types';
import { createDarkTheme } from '@svelte-fui/theme/utils';

export const webDarkTheme = createDarkTheme(brandWeb) satisfies Theme;
