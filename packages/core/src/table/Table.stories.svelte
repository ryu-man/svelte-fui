<script lang="ts">
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { App, Icon } from '@svelte-fui/core';
	import { DocumentPdfRegular, DocumentRegular, EditRegular, FolderRegular, OpenRegular, PeopleRegular, VideoRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import Table from './Table.svelte';
	import Td from './Td.svelte';
	import TdSelection from './TdSelection.svelte';
	import Th from './Th.svelte';
	import Tr from './Tr/Tr.svelte';

	const defaultValues = {
		size: 'md',
		sortable: false
	};

	const argTypes = {
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
	$: console.log(selectedItems);
</script>

<Meta title="Components/Table" component={Table} {argTypes} />

<Story id="table" name="Table" args={defaultValues} let:args>
	<App {theme}>
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
	</App>
</Story>
