<script lang="ts">
	import { onMount } from 'svelte';
	import { App, Icon } from '@svelte-fui/core';
	import { AddRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import AccordionHeader from './accordion-header.svelte';
	import AccordionItem from './accordion-item.svelte';
	import AccordionPanel from './accordion-panel.svelte';
	import Accordion from './accordion-root.svelte';

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

	const argTypes = {
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

	const defaultArgs: Partial<Record<keyof typeof argTypes, any>> = {
		collapsible: false,
		multiple: false
	};

	let value = '';
</script>

<Meta title="Components/Accordion" component={Accordion} {argTypes} />

<Story id="accordion" name="Accordion" args={defaultArgs} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center">
			<Accordion class="w-full" {...args} bind:value>
				<AccordionItem value="item-1">
					<AccordionHeader position="start" as="h1">
						Accordion Header 1
						<span class="icon pl-2">
							<Icon src={AddRegular} />
						</span>
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
	</App>
</Story>
