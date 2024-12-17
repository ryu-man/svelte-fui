<script module lang="ts">
	import { onMount } from 'svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { Button, FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';

	import { CompoundButton as CompoundButtonModule } from '.';

	import CalendarMonthFilled from 'virtual:icons/fluent/calendar-month-24-filled';
	import CalendarMonthRegular from 'virtual:icons/fluent/calendar-month-24-regular';

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

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {
		size: 'md',
		appearance: 'secondary',
		shape: 'rounded'
	};

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		argTypes: arg_types
	});
</script>

<script lang="ts">
	const defaultValues = {
		size: 'md',
		appearance: 'secondary',
		shape: 'rounded'
	};

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

<Story id="compound_button" name="Compound Button" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full items-center justify-center gap-4">
				<CompoundButtonModule.Root {...args}>
					{#snippet children({ hover })}
						<CompoundButtonModule.Icon>
							{#if hover}
								<CalendarMonthFilled />
							{:else}
								<CalendarMonthRegular />
							{/if}
						</CompoundButtonModule.Icon>

						<CompoundButtonModule.Header>Example</CompoundButtonModule.Header>

						<CompoundButtonModule.Body>Secondary content</CompoundButtonModule.Body>
					{/snippet}
				</CompoundButtonModule.Root>

				<CompoundButtonModule.Root {...args} icon>
					{#snippet children({ hover })}
						<CompoundButtonModule.Icon>
							{#if hover}
								<CalendarMonthFilled />
							{:else}
								<CalendarMonthRegular />
							{/if}
						</CompoundButtonModule.Icon>
					{/snippet}
				</CompoundButtonModule.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
