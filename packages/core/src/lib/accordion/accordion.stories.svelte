<script module lang="ts">
	import { onMount } from 'svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Accorion as AccordionComponent } from '.';

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

	const { Story } = defineMeta({
		title: 'Components/Accordion',
		component: AccordionComponent.Root
	});
</script>

<script lang="ts">
	let theme = $state(webLightTheme);

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

	let values: string[] = $state([]);

	$effect(() => {
		console.log(values);
	});
</script>

<Story name="Accordion" args={defaultArgs}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center">
				<AccordionComponent.Root
					class="w-full"
					{...args}
					bind:values
					multiple={args.multiple}
					collapsible={args.collapsible}
				>
					<AccordionComponent.Item.Root value="item-1" disabled>
						<AccordionComponent.Item.Header class="gap-2" as="h1">
							<div>Accordion Header 1</div>

							<AccordionComponent.Item.Indicator />
						</AccordionComponent.Item.Header>
						<AccordionComponent.Item.Body>Accordion Body 1</AccordionComponent.Item.Body>
					</AccordionComponent.Item.Root>

					<AccordionComponent.Item.Root value="item-2">
						<AccordionComponent.Item.Header class="gap-2" as="h1">
							<div>Accordion Header 2</div>
							<AccordionComponent.Item.Indicator />
						</AccordionComponent.Item.Header>

						<AccordionComponent.Item.Body>Accordion Body 2</AccordionComponent.Item.Body>
					</AccordionComponent.Item.Root>

					<AccordionComponent.Item.Root value="item-3">
						<AccordionComponent.Item.Header class="gap-2" as="h1">
							<div>Accordion Header 3</div>
							<AccordionComponent.Item.Indicator />
						</AccordionComponent.Item.Header>

						<AccordionComponent.Item.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh leo, sollicitudin
							euismod nibh ac, fermentum congue neque. Nullam consequat porttitor leo in
							condimentum. Proin at neque sit amet felis luctus faucibus eu id neque. Quisque ligula
							diam, tristique vel tempus nec, laoreet quis nunc. Cras placerat dolor nec purus
							pellentesque cursus. Nunc vulputate lectus in dui pharetra ornare. Donec gravida ac
							velit eu auctor. In sollicitudin, diam in elementum ultrices, dolor arcu pretium nisi,
							ac rhoncus velit mi sit amet nisi. Etiam iaculis pretium erat, vitae scelerisque nibh
							sodales vitae.
						</AccordionComponent.Item.Body>
					</AccordionComponent.Item.Root>
				</AccordionComponent.Root>

				<div class="mt-8">
					<div>Selected item is: {values}</div>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
