<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { Button, FluentRoot, Icon } from '@svelte-fui/core';
	import { CalendarMonthFilled, CalendarMonthRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { MenuButton } from '.';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

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
			options: ['subtle', 'outline', 'secondary', 'primary', 'transparent'],
			control: {
				type: 'select'
			}
		}
	} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof argTypes, any>> = { size: 'md', appearance: 'secondary', shape: 'rounded' };

	export const meta = {
		title: 'Components/Button',
		component: MenuButton,
		argTypes,
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
</script>

<Story id="menu_button" name="Menu Button" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex gap-4">
				<MenuButton.Root>
					<MenuButton.Button let:hover>
						<Icon src={hover ? CalendarMonthFilled : CalendarMonthRegular} />
						<div>New</div>
					</MenuButton.Button>

					<MenuButton.Menu>
						<MenuButton.Item>Item 1</MenuButton.Item>
						<MenuButton.Item>Item 2</MenuButton.Item>
						<MenuButton.Item>Item 3</MenuButton.Item>
					</MenuButton.Menu>
				</MenuButton.Root>
			</div>
		</div>
	</FluentRoot>
</Story>
