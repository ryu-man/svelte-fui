<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Menu } from '.';
	import { Story } from '@storybook/addon-svelte-csf';
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

	export const meta = {
		title: 'Components/Menu',
		component: Menu.Root,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	let menu_ref_element: HTMLButtonElement;

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
			<button
				class="shadow-8 bg-neutral-background-1 text-neutral-foreground-1 flex aspect-square h-10 items-center justify-center rounded-xl"
				bind:this={menu_ref_element}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
						fill="currentColor"
					/>

					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z"
						fill="currentColor"
					/>

					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z"
						fill="currentColor"
					/>
				</svg>

				<Menu.Root>
					<Menu.Group>
						<Menu.Item>
							<Icon class="h-4">
								<EditRegularIcon />
							</Icon>
							<div>Edit</div>
						</Menu.Item>
						<Menu.Item>
							<Icon class="h-4">
								<ColumnEditRegularIcon />
							</Icon>
							<div>Change column type</div>
						</Menu.Item>
						<Menu.Item>
							<Icon class="h-4">
								<TableInsertColumnRegularIcon />
							</Icon>
							<div>Insert</div>
						</Menu.Item>
					</Menu.Group>

					<Menu.Divider />

					<Menu.Group>
						<Menu.Item>
							<Icon class="h-4">
								<ArrowUpRegularIcon />
							</Icon>
							<div>Sort ascending</div>
						</Menu.Item>
						<Menu.Item>
							<Icon class="h-4">
								<ArrowDownRegularIcon />
							</Icon>
							<div>Sort descending</div>
						</Menu.Item>
					</Menu.Group>

					<Menu.Divider />

					<Menu.Group>
						<Menu.Item>
							<Icon class="h-4">
								<DeleteRegularIcon />
							</Icon>
							<div>Delete</div>
						</Menu.Item>
					</Menu.Group>

					<Menu.Divider />

					<Menu.Group>
						<Menu.Item>
							<Icon class="h-4">
								<ScreenshotRegularIcon />
							</Icon>
							<div>Display</div>

							<Icon class="ml-auto h-4">
								<ChevronRightRegularIcon />
							</Icon>

							<Menu.Root placements={['right-start']}>
								<Menu.Item>
									<Icon class="h-4">
										<LaptopRegularIcon />
									</Icon>
									<div>Resolution</div>

									<Icon class="ml-auto h-4">
										<ChevronRightRegularIcon />
									</Icon>

									<Menu.Root placements={['right-start']}>
										<Menu.Item>1024 x 768</Menu.Item>
										<Menu.Item>1440 x 900</Menu.Item>
										<Menu.Item>1920 x 1080</Menu.Item>
									</Menu.Root>
								</Menu.Item>
								<Menu.Item>
									<Icon class="h-4">
										<BrightnessLowRegularIcon />
									</Icon>
									<div>Brightness</div>
								</Menu.Item>
								<Menu.Item>
									<Icon class="h-4">
										<AlertRegularIcon />
									</Icon>
									<div>Contrast</div>
								</Menu.Item>
							</Menu.Root>
						</Menu.Item>
					</Menu.Group>
				</Menu.Root>
			</button>
		</div>
	</FluentRoot>
</Story>
