<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { Button as ButtonComponent, FluentRoot, Icon } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import CalendarMonthFilled from 'virtual:icons/fluent/calendar-month-24-filled';
	import CalendarMonthRegular from 'virtual:icons/fluent/calendar-month-24-regular';

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
		component: ButtonComponent,
		argTypes
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

<Story id="button" name="Button" args={default_args}>
	{#snippet children({ args })}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex w-fit gap-4">
					<ButtonComponent {...args} class="whitespace-nowrap">Fluent UI for Svelte</ButtonComponent
					>

					<ButtonComponent {...args} class="whitespace-nowrap">
						{#snippet children({ hover })}
							Fluent UI for Svelte
							<Icon class="h-full">
								{#if hover}
									<CalendarMonthFilled />
								{:else}
									<CalendarMonthRegular />
								{/if}
							</Icon>
						{/snippet}
					</ButtonComponent>

					<ButtonComponent {...args} icon>
						{#snippet children({ hover })}
							<Icon class="h-full">
								{#if hover}
									<CalendarMonthFilled />
								{:else}
									<CalendarMonthRegular />
								{/if}
							</Icon>
						{/snippet}
					</ButtonComponent>
				</div>

				<ButtonComponent {...args} class="w-[280px]"
					>Long text wraps after it hits the max width of the component</ButtonComponent
				>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
