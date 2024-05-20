<script lang="ts">
	import { onMount } from 'svelte';
	import { App, Button, Icon } from '@svelte-fui/core';
	import { CalendarMonthFilled, CalendarMonthRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { CompoundButton } from '.';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

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

<Meta title="Components/Button" component={CompoundButton.Root} {argTypes} />

<Story id="compound_button" name="Compound Button" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex h-full w-full items-center justify-center gap-4">
			<CompoundButton.Root {...args}>
				<Icon src={CalendarMonthFilled} />
				<CompoundButton.Body>
					<div>Example</div>
					<CompoundButton.SecondaryContent>Secondary content</CompoundButton.SecondaryContent>
				</CompoundButton.Body>
			</CompoundButton.Root>

			<CompoundButton.Root {...args} icon>
				<Icon src={CalendarMonthFilled} />	
			</CompoundButton.Root>
		</div>
	</App>
</Story>
