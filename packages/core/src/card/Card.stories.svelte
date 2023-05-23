<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Button, Card, CardFooter, CardHeader, CardPreview, Icon } from '@svelte-fui/core';
	import { ArrowReplyRegular, ShareRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';

	const argDefaults = {
		disabled: false,
		required: false,
		size: 'md',
		weight: 'regular'
	};

	const argTypes = {
		appearance: {
			type: 'string',
			defaultValue: 'filled',
			options: ['filled', 'subtle', 'outline', 'filled-alternative'],
			control: {
				type: 'select'
			}
		},
		required: {
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
		weight: {
			type: 'string',
			defaultValue: 'regular',
			options: ['regular', 'semibold'],
			control: {
				type: 'select'
			}
		}
	} satisfies ArgTypes;

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
</script>

<Meta title="Components/Card" component={Card} />

<Story id="fui_card" name="Card" let:args>
	<App {theme}>
		<div class="flex flex-col gap-4 justify-center items-center w-full h-full">
			<Card {...args} class="w-[720px] max-w-[100%]">
				<CardHeader>
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
				</CardHeader>

				<CardPreview
					src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/doc_template.png"
					alt="Preview of a Word document: About Us - Overview"
				>
					<img
						class="logo"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/word_logo.svg"
						alt="Microsoft Word document"
					/>
				</CardPreview>
				<CardFooter>
					<Button>
						<Icon src={ArrowReplyRegular} />
						Reply
					</Button>
					<Button>
						<Icon src={ShareRegular} />
						Share
					</Button>
				</CardFooter>
			</Card>

			<!-- <Card {...args} class="w-[400px]">
				<CardPreview
					src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/sales_template.png"
					alt="Sales Presentation Preview"
				/>

				<CardHeader>
					<img
						class="image"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/powerpoint_logo.svg"
						alt="Microsoft PowerPoint logo"
					/>

					<span class="header body-1"><b>App Name</b></span>

					<span class="description caption-1">Developer</span>

					<Icon class="action" src={MoreHorizontalFilled} />
				</CardHeader>

				<p class="body-1">Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.</p>
				<CardFooter>
					<Button appearance="primary">
						<Icon src={OpenRegular} />
						Open
					</Button>
					<Button>
						<Icon src={ShareRegular} />
						Share
					</Button>
				</CardFooter>
			</Card> -->
		</div>
	</App>
</Story>
