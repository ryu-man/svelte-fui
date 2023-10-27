<script lang="ts">
	import { onMount } from 'svelte';
	import { App, Icon } from '@svelte-fui/core';
	import { DocumentPdfRegular, DocumentRegular, EditRegular, FolderRegular, OpenRegular, PeopleRegular, VideoRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import Table from './Table.svelte';
	import Td from './Td.svelte';
	import TdSelection from './TdSelection.svelte';
	import Th from './Th.svelte';
	import Tr from './Tr.svelte';

	const defaultValues = {
		size: 'md',
		appearance: 'none',
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
		appearance: {
			type: 'string',
			options: ['none', 'none', 'none'],
			control: {
				type: 'select'
			}
		},
		sortable: {
			type: 'boolean'
		}
	} satisfies ArgTypes;

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
</script>

<Meta title="Components/Table" component={Table} {argTypes} />

<Story id="table" name="Table" args={defaultValues} let:args>
	<App {theme}>
		<Table sortable>
			<thead>
				<Tr header>
					<TdSelection />
					<Th>File</Th>
					<Th>Author</Th>
					<Th>Last updated</Th>
					<Th>Last update</Th>
				</Tr>
			</thead>
			<tbody>
				<Tr appearance="none">
					<TdSelection />
					<Td class="flex items-center gap-2">
						<Icon src={DocumentRegular} />
						<span>Meeting notes</span>
					</Td>
					<Td>Max mustermann</Td>
					<Td>7h ago</Td>
					<Td class="flex items-center gap-2">
						<Icon src={EditRegular} />
						You edited this
					</Td>
				</Tr>

				<Tr appearance="none">
					<TdSelection />
					<Td class="flex items-center gap-2">
						<Icon src={FolderRegular} />
						<span>Thursday presentation</span>
					</Td>
					<Td>Erika Mustermann</Td>
					<Td>Yesterday at 1:45 PM</Td>
					<Td class="flex items-center gap-2">
						<Icon src={EditRegular} />
						You recently opened this
					</Td>
				</Tr>

				<Tr appearance="none">
					<TdSelection />
					<Td class="flex items-center gap-2">
						<Icon src={VideoRegular} />
						<span>Training recording</span>
					</Td>
					<Td>John Doe</Td>
					<Td>Yesterday at 1:45 PM</Td>
					<Td class="flex items-center gap-2">
						<Icon src={EditRegular} />
						You recently opened this
					</Td>
				</Tr>

				<Tr appearance="none">
					<TdSelection />
					<Td class="flex items-center gap-2">
						<Icon src={DocumentPdfRegular} />
						<span>Purchase order</span>
					</Td>
					<Td>Jane Doe</Td>
					<Td>Tue at 9:30 AM</Td>
					<Td class="flex items-center gap-2">
						<Icon src={EditRegular} />
						You shared this in a Teams chat
					</Td>
				</Tr>
			</tbody>
		</Table>
	</App>
</Story>
