import type { Theme } from '@svelte-fui/theme';
import type { Snippet } from 'svelte';
import type { FluentRootContext } from './context';

export type RootProps = {
	class?: string;
	theme?: Theme;
	screens?: Record<string, string>;
	children?: Snippet<
		[
			{
				context: FluentRootContext;
			}
		]
	>;
};
