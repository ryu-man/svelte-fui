<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import {
		AlertRegular,
		ArrowDownRegular,
		ArrowUpRegular,
		BrightnessLowRegular,
		ChevronRightRegular,
		ColumnEditRegular,
		DeleteRegular,
		EditRegular,
		LaptopRegular,
		ScreenshotRegular,
		TableInsertColumnRegular
	} from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Menu } from '.';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

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
							<Icon src={EditRegular} />
							<div>Edit</div>
						</Menu.Item>
						<Menu.Item>
							<Icon src={ColumnEditRegular} />
							<div>Change column type</div>
						</Menu.Item>
						<Menu.Item>
							<Icon src={TableInsertColumnRegular} />
							<div>Insert</div>
						</Menu.Item>
					</Menu.Group>

					<Menu.Divider />

					<Menu.Group>
						<Menu.Item>
							<Icon src={ArrowUpRegular} />
							<div>Sort ascending</div>
						</Menu.Item>
						<Menu.Item>
							<Icon src={ArrowDownRegular} />
							<div>Sort descending</div>
						</Menu.Item>
					</Menu.Group>

					<Menu.Divider />

					<Menu.Group>
						<Menu.Item>
							<Icon src={DeleteRegular} />
							<div>Delete</div>
						</Menu.Item>
					</Menu.Group>

					<Menu.Divider />

					<Menu.Group>
						<Menu.Item>
							<Icon src={ScreenshotRegular} />
							<div>Display</div>

							<Icon class="ml-auto" src={ChevronRightRegular} />

							<Menu.Root placements={['right-start']}>
								<Menu.Item>
									<Icon src={LaptopRegular} />
									<div>Resolution</div>

									<Icon class="ml-auto" src={ChevronRightRegular} />

									<Menu.Root placements={['right-start']}>
										<Menu.Item>1024 x 768</Menu.Item>
										<Menu.Item>1440 x 900</Menu.Item>
										<Menu.Item>1920 x 1080</Menu.Item>
									</Menu.Root>
								</Menu.Item>
								<Menu.Item>
									<Icon src={BrightnessLowRegular} />
									<div>Brightness</div>
								</Menu.Item>
								<Menu.Item>
									<Icon src={AlertRegular} />
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
