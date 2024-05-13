<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Icon } from '@svelte-fui/core';
	import { CalendarMonthFilled, CalendarMonthRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';
	import Dropdown from './dropdown-root.svelte';
	import Option from './combobox-option.svelte';

	const defaultValues = {
		size: 'md',
		appearance: 'outline',
		shape: 'rounded'
	};

	const argTypes = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'select'
			}
		},
		shape: {
			type: 'string',
			options: ['circular', 'square', 'rounded'],
			control: {
				type: 'select'
			}
		},
		appearance: {
			type: 'string',
			options: ['outline', 'underline', 'filled-darker', 'filled-lighter'],
			control: {
				type: 'select'
			}
		}
	} satisfies ArgTypes;

	let theme = webLightTheme;
	let language = '';

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

<Meta title="Components/Dropdown" component={Dropdown} {argTypes} />

<Story id="dropodown" name="Dropdown" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex flex-col gap-4">
				<Dropdown bind:value={language} {...args}>
					<div class="flex items-center gap-2" slot="placeholder">
						<Icon src={CalendarMonthFilled} />
						<span>Hello World !</span>
					</div>

					<Option id="ar">Arabic</Option>
					<Option id="en">English</Option>
					<Option id="fr">French</Option>
				</Dropdown>
				<div class="flex justify-between">
					<span>Selected language:</span>
					<span>{language}</span>
				</div>
			</div>
		</div>
	</App>
</Story>
