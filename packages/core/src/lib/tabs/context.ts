import type { Readable, Writable } from 'svelte/store';
import { getFluentContext, setFluentContext } from '@svelte-fui/core/internal/context';

export const FUI_CONTEXT_KEY = 'fui-context/root';

export type UnmoutTab = () => void;
export type MountPayload<T = unknown> = { data: T; active: boolean };

export type TabsHolder<T = unknown> = Record<string, Tab<T>>;

export type Tab<T = unknown> = {
	value: string;
	data: T;
	active: boolean;
};

export type TabItemContext = {
	value: string;
	active: Readable<boolean>;
};

export type TabsContext<T = unknown> = {
	id: string;
	value: Readable<string | undefined>;
	header: {
		element: Writable<HTMLDivElement | undefined>;
	};

	body: {
		element: Writable<HTMLDivElement | undefined>;
	};

	height: Writable<number>;

	context: Record<string, TabItemContext>;
	tabs: {
		items: Readable<Record<string, Tab<T>>>;
		active: Readable<Tab<T> | undefined>;
	};

	mount: (id: string, payload: MountPayload<T>) => UnmoutTab;
	select: (id: string) => void;
	unselect: (id: string) => void;
};

export function getTabsContext<T>(...segments: string[]) {
	return getFluentContext<TabsContext<T>>('tabs', ...segments);
}

export function setTabsContext<T>(context: TabsContext<T>, ...segments: string[]) {
	return setFluentContext(context, 'tabs', ...segments);
}
