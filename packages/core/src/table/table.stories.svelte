<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import { DocumentPdfRegular, DocumentRegular, EditRegular, FolderRegular, OpenRegular, PeopleRegular, VideoRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import Table from './table-root.svelte';
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

	export const meta = {
		title: 'Components/Table',
		component: Table,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	let theme = webLightTheme;

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

	let selectedItems = [];
</script>

<Story id="table" name="Table" args={default_args} let:args>
	<FluentRoot {theme}>
		<Table {...args} {data} bind:selectedItems let:data>
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
							<Icon src={item.file.icon} />
							<span>{item.file.desc}</span>
						</Td>
						<Td>{item.author}</Td>
						<Td>{item.last_updated}</Td>
						<Td class="flex items-center gap-2">
							<Icon src={item.last_update.icon} />
							{item.last_update.desc}
						</Td>
					</Tr>
				{/each}
			</tbody>
		</Table>
	</FluentRoot>
</Story>
