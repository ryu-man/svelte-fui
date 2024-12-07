<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import {
		Button,
		Card as CardFui,
		FluentRoot,
		Icon
	} from '@svelte-fui/core';
	import ArrowReplyRegular from 'virtual:icons/fluent/arrow-reply-24-regular';
	import ShareRegular from 'virtual:icons/fluent/share-24-regular';

	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {
		selected: false,
		interactive: false,
		alternative: false,
		size: 'md',
		weight: 'regular',
		appearance: 'filled'
	};

	const arg_types = {
		appearance: {
			type: 'string',
			defaultValue: 'filled',
			options: ['filled', 'subtle', 'outline', 'filled-alternative'],
			control: {
				type: 'select'
			}
		},
		interactive: {
			type: 'boolean',
			defaultValue: false,
			control: {
				type: 'boolean'
			}
		},
		alternative: {
			type: 'boolean',
			defaultValue: false,
			control: {
				type: 'boolean'
			}
		},
		size: {
			type: 'string',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'select'
			}
		},
		orientation: {
			type: 'string',
			defaultValue: 'vertical',
			options: ['vertical', 'horizontal'],
			control: {
				type: 'select'
			}
		}
	} satisfies ArgTypes;

	const { Story } = defineMeta({
		title: 'Components/Card',
		component: CardFui.Root,
		argTypes: arg_types
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
</script>

<Story id="fui_card" name="Card" args={default_args} argTypes={arg_types}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<CardFui.Root {...args} class="w-[720px] max-w-[100%]">
					<CardFui.Header>
						<img
							class="image"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/avatar_elvia.svg"
							alt="Elvia Atkins avatar picture"
						/>

						<span class="header">
							<span class="font-bold">Elvia Atkins</span>
							<span class="caption-1">mentioned you</span>
						</span>

						<span class="description caption-1"> 5h ago · About us - Overview </span>
					</CardFui.Header>

					<CardFui.Preview
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/doc_template.png"
						alt="Preview of a Word document: About Us - Overview"
					>
						<img
							class="logo"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/word_logo.svg"
							alt="Microsoft Word document"
						/>
					</CardFui.Preview>
					<CardFui.Footer>
						<Button>
							<Icon>
								<ArrowReplyRegular />
							</Icon>
							Reply
						</Button>
						<Button>
							<Icon>
								<ShareRegular />
							</Icon>
							Share
						</Button>
					</CardFui.Footer>
				</CardFui.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
