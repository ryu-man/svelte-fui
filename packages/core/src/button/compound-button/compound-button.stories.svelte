<script context="module" lang="ts">
	import { Button, FluentRoot, Icon } from '@svelte-fui/core';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const arg_types = {
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

	const default_args: Partial<Record<keyof typeof arg_types, any>> = { size: 'md', appearance: 'secondary', shape: 'rounded' };

	export const meta = {
		title: 'Components/Button',
		component: Button,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { CalendarMonthFilled, CalendarMonthRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { CompoundButton } from '.';

	const defaultValues = {
		size: 'md',
		appearance: 'secondary',
		shape: 'rounded'
	};

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

<Story id="compound_button" name="Compound Button" args={default_args} let:args>
	<FluentRoot {theme}>
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
	</FluentRoot>
</Story>
