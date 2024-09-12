<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import TabsRoot from './tabs-root.svelte';
	import TabsBody from './tabs-body.svelte';
	import TabsHeader from './tabs-header.svelte';
	import TabRoot from './tab-root.svelte';
	import TabHeader from './tab-header.svelte';
	import TabBody from './tab-body.svelte';

	const default_args = {
		size: 'md',
		sortable: false
	};

	const arg_types = {
		size: {
			type: 'string',
			options: ['xs', 'sm', 'md'],
			control: {
				type: 'select'
			}
		},
		sortable: {
			type: 'boolean'
		}
	} satisfies ArgTypes;

	export const meta = {
		title: 'Components/Tabs',
		component: TabsRoot,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	let theme = webLightTheme;

	onMount(() => {
		function handler(schemeMedia: MediaQueryListEvent) {
			theme = schemeMedia.matches ? webLightTheme : webDarkTheme;
		}

		const schemeMedia = matchMedia('(prefers-color-scheme: light)');

		schemeMedia.addEventListener('change', handler);

		theme = schemeMedia.matches ? webLightTheme : webDarkTheme;

		return () => {
			schemeMedia.removeEventListener('change', handler);
		};
	});

	let selectedItems = [];
</script>

<Story id="tabs" name="Tabs" args={default_args} let:args>
	<FluentRoot {theme}>
		<TabsRoot class="" value="tab-3">
			<TabsHeader />
			<TabsBody>
				<TabRoot value="tab-1">
					<TabHeader class="px-4">Tab 1</TabHeader>
					<TabBody>
						<div>
							Dapibus tincidunt si velit ex ultricies augue interdum rutrum quam elit tempus sodales
							molestie auctor lectus libero cubilia leo praesent ridiculus efficitur convallis
							ligula porttitor duis conubia inceptos per adipiscing viverra amet
						</div>
					</TabBody>
				</TabRoot>

				<!--  -->
				<TabRoot value="tab-2">
					<TabHeader class="px-4">Tab 2</TabHeader>
					<TabBody
						>efficitur morbi senectus quisque curae arcu ipsum hendrerit diam dictumst inceptos
						bibendum</TabBody
					>
				</TabRoot>

				<!--  -->
				<TabRoot value="tab-3">
					<TabHeader class="px-4">Tab 3</TabHeader>
					<TabBody>taciti blandit sed ligula rhoncus ante quis amet</TabBody>
				</TabRoot>

				<!--  -->
				<TabRoot value="tab-4">
					<TabHeader class="px-4">Tab 4</TabHeader>
					<TabBody>CSS</TabBody>
				</TabRoot>
				<!--  -->
			</TabsBody>
		</TabsRoot>
	</FluentRoot>
</Story>
