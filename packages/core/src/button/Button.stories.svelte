<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Button, Icon } from '@svelte-fui/core';
	import { CalendarMonthFilled, CalendarMonthRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/theme/src/themes/web';
	import { onMount } from 'svelte';

	const defaultValues = {
		size: 'md',
		appearance: 'secondary',
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
			options: ['subtle', 'outline', 'secondary', 'primary', 'transparent'],
			control: {
				type: 'select'
			}
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

<Meta title="Components/Button" component={Button} {argTypes} />

<Story id="button" name="Button" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex flex-col gap-4 items-center justify-center w-full h-full">
			<div class="flex gap-4">
				<Button {...args}>Fluent UI for Svelte</Button>

				<Button {...args} let:hover>
					Fluent UI for Svelte
					<Icon src={hover ? CalendarMonthFilled : CalendarMonthRegular} />
				</Button>

				<Button {...args} icon let:hover>
					<Icon src={hover ? CalendarMonthFilled : CalendarMonthRegular} />
				</Button>
			</div>

			<Button {...args} class="w-[280px]">Long text wraps after it hits the max width of the component</Button>
		</div>
	</App>
</Story>
