<script module lang="ts">
	import { onMount } from 'svelte';
	import { Button, FluentRoot, Icon, Menu } from '@svelte-fui/core';
	import CalendarMonthFilled from 'virtual:icons/fluent/calendar-month-24-filled';
	import CalendarMonthRegular from 'virtual:icons/fluent/calendar-month-24-regular';

	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	import SplitButtonCmp from './split-button.svelte';

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

	const default_args: Partial<Record<keyof typeof argTypes, any>> = {
		size: 'md',
		appearance: 'secondary',
		shape: 'rounded'
	};

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: SplitButtonCmp,
		argTypes
	});
</script>

<script lang="ts">
	let theme = $state(webLightTheme);

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

<Story name="Split Button" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex gap-4">
					<Menu.Root placement="bottom-end">
						<Menu.Trigger shell={SplitButtonCmp} {...args}>
							{#snippet children({ hover })}
								<Icon class="h-full">
									{#if hover}
										<CalendarMonthFilled />
									{:else}
										<CalendarMonthRegular />
									{/if}
								</Icon>
								<div>New</div>
							{/snippet}
						</Menu.Trigger>

						<Menu.List>
							<Menu.Item>Item 1</Menu.Item>
							<Menu.Item>Item 2</Menu.Item>
							<Menu.Item>Item 3</Menu.Item>
						</Menu.List>
					</Menu.Root>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
