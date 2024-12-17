<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import DocumentRegular from 'virtual:icons/fluent/document-24-regular';
	import DocumentPdfRegular from 'virtual:icons/fluent/document-pdf-24-regular';
	import EditRegular from 'virtual:icons/fluent/edit-24-regular';
	import FolderRegular from 'virtual:icons/fluent/folder-24-regular';
	import OpenRegular from 'virtual:icons/fluent/open-24-regular';
	import PeopleRegular from 'virtual:icons/fluent/people-24-regular';
	import VideoRegular from 'virtual:icons/fluent/video-24-regular';
	import TableFui from './table-root.svelte';
	import TdSelection from './td-selection.svelte';
	import Td from './td.svelte';
	import Th from './th.svelte';
	import Tr from './tr/tr.svelte';

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

	const { Story } = defineMeta({
		title: 'Components/Table',
		component: TableFui,
		argTypes: arg_types
	});
</script>

<script lang="ts">
	let theme = $state(webLightTheme);

	const data = [
		{
			file: {
				desc: 'Meeting notes',
				icon: DocumentRegular
			},
			author: 'Max mustermann',
			last_updated: '7h ago',
			last_update: {
				desc: '7h ago',
				icon: EditRegular
			}
		},
		{
			file: {
				desc: 'Thursday presentation',
				icon: FolderRegular
			},
			author: 'Thursday presentation',
			last_updated: 'Yesterday at 1:45 PM',
			last_update: {
				desc: 'You recently opened this',
				icon: OpenRegular
			}
		},
		{
			file: {
				desc: 'Training recording',
				icon: VideoRegular
			},
			author: 'John Doe',
			last_updated: 'Yesterday at 1:45 PM',
			last_update: {
				desc: 'You recently opened this',
				icon: OpenRegular
			}
		},
		{
			file: {
				desc: 'Purchase order',
				icon: DocumentPdfRegular
			},
			author: 'Jane Doe',
			last_updated: 'Tue at 9:30 AM',
			last_update: {
				desc: 'You shared this in a Teams chat',
				icon: PeopleRegular
			}
		}
	];

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

	let selectedItems = $state([]);
</script>

<Story id="table" name="Table" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<TableFui {...args} {data}>
				<thead>
					<Tr header>
						<TdSelection type="radio" />
						<Th sortBy={(d) => d.file.desc}>File</Th>
						<Th sortBy={(d) => d.author}>Author</Th>
						<Th sortBy={(d) => d.last_updated}>Last updated</Th>
						<Th sortBy={(d) => d.last_update}>Last update</Th>
					</Tr>
				</thead>
				<tbody>
					{#each data as item (JSON.stringify(item))}
						<Tr appearance="none" data={item}>
							<TdSelection type="radio" />
							<Td class="flex items-center gap-2">
								<Icon>
									<svelte:component this={item.file.icon} />
								</Icon>

								<span>{item.file.desc}</span>
							</Td>
							<Td>{item.author}</Td>
							<Td>{item.last_updated}</Td>
							<Td class="flex items-center gap-2">
								<Icon>
									<svelte:component this={item.file.icon} />
								</Icon>

								{item.last_update.desc}
							</Td>
						</Tr>
					{/each}
				</tbody>
			</TableFui>
		</FluentRoot>
	{/snippet}
</Story>
