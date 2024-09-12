import TabBody from './tab-body.svelte';
import TabHeader from './tab-header.svelte';
import TabRoot from './tab-root.svelte';

import TabsBody from './tabs-body.svelte';
import TabsHeader from './tabs-header.svelte';
import TabsRoot from './tabs-root.svelte';

export const Tabs = {
	Root: TabsRoot,
	Header: TabsHeader,
	Body: TabsBody
};

export const Tab = {
	Root: TabRoot,
	Header: TabHeader,
	Body: TabBody
};
