<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import AddRegularIcon from 'virtual:icons/fluent/add-24-regular';
	import AccordionHeader from './accordion-header.svelte';
	import AccordionItem from './accordion-item.svelte';
	import AccordionPanel from './accordion-panel.svelte';
	import Accordion from './accordion-root.svelte';

	const arg_types = {
		collapsible: {
			control: 'boolean'
		},
		multiple: {
			control: 'boolean'
		},
		value: {
			type: 'string'
		}
	} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {
		collapsible: false,
		multiple: false
	};

	export const meta = {
		title: 'Components/Accordion',
		component: Accordion,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	let theme = webLightTheme;

	onMount(() => {
		function handler(e: MediaQueryListEvent) {
			theme = e.matches ? webLightTheme : webDarkTheme;
		}

		const schemeMedia = matchMedia('(prefers-color-scheme: light)');

		schemeMedia.addEventListener('change', handler);

		theme = schemeMedia.matches ? webLightTheme : webDarkTheme;

		return () => {
			schemeMedia.removeEventListener('change', handler);
		};
	});

	let value = '';
</script>

<Story id="accordion" name="Accordion" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center">
			<Accordion class="w-full" {...args} bind:value>
				<AccordionItem value="item-1">
					<AccordionHeader class="items-center gap-2" position="start" as="h1">
						<div>Accordion Header 1</div>
						<Icon class="h-5">
							<AddRegularIcon />
						</Icon>
					</AccordionHeader>
					<AccordionPanel>Accordion Header 1</AccordionPanel>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionHeader size="lg" as="h1">Accordion Header 2</AccordionHeader>
					<AccordionPanel>Accordion Header 2</AccordionPanel>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionHeader size="xl" as="h1">Accordion Header 3</AccordionHeader>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh leo, sollicitudin euismod nibh ac, fermentum congue neque. Nullam
						consequat porttitor leo in condimentum. Proin at neque sit amet felis luctus faucibus eu id neque. Quisque ligula diam, tristique vel
						tempus nec, laoreet quis nunc. Cras placerat dolor nec purus pellentesque cursus. Nunc vulputate lectus in dui pharetra ornare. Donec
						gravida ac velit eu auctor. In sollicitudin, diam in elementum ultrices, dolor arcu pretium nisi, ac rhoncus velit mi sit amet nisi. Etiam
						iaculis pretium erat, vitae scelerisque nibh sodales vitae.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<div class="mt-8">
				<div>Selected item is: {value}</div>
			</div>
		</div>
	</FluentRoot>
</Story>
