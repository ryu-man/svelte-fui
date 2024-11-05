<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Menu as MenuModule } from '.';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import AlertRegularIcon from 'virtual:icons/fluent/alert-24-regular';
	import ArrowDownRegularIcon from 'virtual:icons/fluent/arrow-down-24-regular';
	import ArrowUpRegularIcon from 'virtual:icons/fluent/arrow-up-24-regular';
	import BrightnessLowRegularIcon from 'virtual:icons/fluent/brightness-low-24-regular';
	import ChevronRightRegularIcon from 'virtual:icons/fluent/chevron-right-24-regular';
	import ColumnEditRegularIcon from 'virtual:icons/fluent/column-edit-24-regular';
	import DeleteRegularIcon from 'virtual:icons/fluent/delete-24-regular';
	import EditRegularIcon from 'virtual:icons/fluent/edit-24-regular';
	import LaptopRegularIcon from 'virtual:icons/fluent/laptop-24-regular';
	import ScreenshotRegularIcon from 'virtual:icons/fluent/screenshot-24-regular';
	import TableInsertColumnRegularIcon from 'virtual:icons/fluent/table-insert-column-24-regular';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Menu',
		component: MenuModule.Root,
		argTypes: arg_types
	});
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

<Story id="menu" name="Menu" args={default_args}>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<MenuModule.Root>
				<MenuModule.Trigger>I have menu here !</MenuModule.Trigger>
				<MenuModule.Overlay offset={12}>
					<MenuModule.Group>
						<MenuModule.Item>
							<Icon class="h-4">
								<EditRegularIcon />
							</Icon>
							<div>Edit</div>
						</MenuModule.Item>
						<MenuModule.Item>
							<Icon class="h-4">
								<ColumnEditRegularIcon />
							</Icon>
							<div>Change column type</div>
						</MenuModule.Item>
						<MenuModule.Item>
							<Icon class="h-4">
								<TableInsertColumnRegularIcon />
							</Icon>
							<div>Insert</div>
						</MenuModule.Item>
					</MenuModule.Group>

					<MenuModule.Divider />

					<MenuModule.Group>
						<MenuModule.Item>
							<Icon class="h-4">
								<ArrowUpRegularIcon />
							</Icon>
							<div>Sort ascending</div>
						</MenuModule.Item>
						<MenuModule.Item>
							<Icon class="h-4">
								<ArrowDownRegularIcon />
							</Icon>
							<div>Sort descending</div>
						</MenuModule.Item>
					</MenuModule.Group>

					<MenuModule.Divider />

					<MenuModule.Group>
						<MenuModule.Item>
							<Icon class="h-4">
								<DeleteRegularIcon />
							</Icon>
							<div>Delete</div>
						</MenuModule.Item>
					</MenuModule.Group>

					<MenuModule.Divider />

					<MenuModule.Group>
						<MenuModule.Item>
							<Icon class="h-4">
								<ScreenshotRegularIcon />
							</Icon>
							<div>Display</div>

							<Icon class="ml-auto h-4">
								<ChevronRightRegularIcon />
							</Icon>

							<MenuModule.Overlay placements={['right-start']} offset={8}>
								<MenuModule.Item>
									<Icon class="h-4">
										<LaptopRegularIcon />
									</Icon>
									<div>Resolution</div>

									<Icon class="ml-auto h-4">
										<ChevronRightRegularIcon />
									</Icon>

									<MenuModule.Overlay placements={['right-start']} offset={8}>
										<MenuModule.Item>1024 x 768</MenuModule.Item>
										<MenuModule.Item>1440 x 900</MenuModule.Item>
										<MenuModule.Item>1920 x 1080</MenuModule.Item>
									</MenuModule.Overlay>
								</MenuModule.Item>
								<MenuModule.Item>
									<Icon class="h-4">
										<BrightnessLowRegularIcon />
									</Icon>
									<div>Brightness</div>
								</MenuModule.Item>
								<MenuModule.Item>
									<Icon class="h-4">
										<AlertRegularIcon />
									</Icon>
									<div>Contrast</div>
								</MenuModule.Item>
							</MenuModule.Overlay>
						</MenuModule.Item>
					</MenuModule.Group>
				</MenuModule.Overlay>
			</MenuModule.Root>
		</div>
	</FluentRoot>
</Story>
