import type { Theme } from '@svelte-fui/theme';
import type { Snippet } from 'svelte';
import type { FluentRootContext } from './root-context';

export type RootProps = {
	theme: Theme;
	screens: Record<string, string>;
	children?: Snippet<
		[
			{
				context: FluentRootContext;
			}
		]
	>;
};
