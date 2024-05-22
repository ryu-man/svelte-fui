<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { Button, FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Dialog } from '.';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const arg_types = {
		open: {
			type: 'boolean'
		},
		type: {
			type: 'string',
			options: ['modal', 'non-modal', 'alert'],
			control: {
				type: 'select'
			}
		}
	} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {
		open: false,
		type: 'modal'
	};

	export const meta = {
		title: 'Components/Dialog',
		component: Dialog,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	let theme = webLightTheme;
	let openDialog = false;

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

	function onclick_open_dialog() {
		openDialog = !openDialog;
	}

	function onclick_cancel() {
		openDialog = false;
	}
</script>

<Story id="dialog" name="Dialog" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<Button on:click={onclick_open_dialog}>Open Dialog</Button>
		</div>

		<Dialog.Root bind:open={openDialog} {...args}>
			<Dialog.Header>Hello World</Dialog.Header>

			<Dialog.Body>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae dapibus purus, ac dictum ipsum. Vestibulum tristique facilisis porta.
				Donec ullamcorper feugiat lectus, sit amet efficitur elit blandit ullamcorper. Ut vel gravida ex. Suspendisse nisl felis, commodo sit amet
				sodales non, posuere ac odio. Vestibulum sed neque sagittis, tincidunt est ut, aliquet ante. Nullam rhoncus mauris in libero imperdiet, id
				ullamcorper ex varius. Duis euismod quis enim vitae posuere. Nulla lacus magna, mollis ac sapien vel, maximus ornare nulla.
			</Dialog.Body>

			<Dialog.Actions>
				<Button on:click={onclick_cancel}>Cancel</Button>
				<Button>Ok</Button>
			</Dialog.Actions>
		</Dialog.Root>
	</FluentRoot>
</Story>

<Story id="dialog_long_content" name="Scrolling Long Content" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<Button on:click={onclick_open_dialog}>Open Dialog</Button>
		</div>

		<Dialog.Root bind:open={openDialog} {...args}>
			<Dialog.Header>Hello World</Dialog.Header>

			<Dialog.Body>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium
				fusce id velit ut tortor. Leo vel fringilla est ullamcorper. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. In mollis nunc
				sed id semper risus in hendrerit gravida. Ullamcorper sit amet risus nullam eget felis eget. Dolor sed viverra ipsum nunc aliquet bibendum.
				Facilisi morbi tempus iaculis urna id volutpat. Porta non pulvinar neque laoreet suspendisse. Nunc id cursus metus aliquam eleifend mi in. A
				iaculis at erat pellentesque adipiscing commodo. Proin nibh nisl condimentum id. In hac habitasse platea dictumst vestibulum rhoncus est.
				Non tellus orci ac auctor augue mauris augue neque. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Nascetur ridiculus mus mauris
				vitae ultricies leo integer. Ullamcorper eget nulla facilisi etiam dignissim. Leo in vitae turpis massa sed elementum tempus egestas sed. Ut
				enim blandit volutpat maecenas volutpat. Venenatis urna cursus eget nunc scelerisque viverra mauris. Neque aliquam vestibulum morbi blandit.
				Porttitor eget dolor morbi non. Nisi quis eleifend quam adipiscing vitae. Aliquam ultrices sagittis orci a scelerisque purus semper.
				Interdum varius sit amet mattis vulputate enim nulla aliquet. Ut sem viverra aliquet eget sit amet tellus cras. Sit amet tellus cras
				adipiscing enim eu turpis egestas. Amet cursus sit amet dictum sit amet justo donec enim. Neque gravida in fermentum et sollicitudin ac.
				Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ultrices eros in cursus turpis massa tincidunt dui. Nisl rhoncus mattis
				rhoncus urna neque viverra justo. Odio pellentesque diam volutpat commodo sed egestas. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
				Ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed nisi lacus sed. Sapien nec sagittis aliquam malesuada bibendum arcu vitae
				elementum. Metus vulputate eu scelerisque felis imperdiet. Consequat interdum varius sit amet mattis vulputate enim. Amet cursus sit amet
				dictum sit amet justo. Eget aliquet nibh praesent tristique magna sit. Ut consequat semper viverra nam libero justo. Pharetra massa massa
				ultricies mi. Sem viverra aliquet eget sit amet. Pulvinar mattis nunc sed blandit libero volutpat sed. Pharetra diam sit amet nisl suscipit
				adipiscing bibendum. Consectetur adipiscing elit ut aliquam. Volutpat diam ut venenatis tellus in metus vulputate. Scelerisque in dictum non
				consectetur a erat. Venenatis lectus magna fringilla urna porttitor rhoncus. Vitae congue mauris rhoncus aenean vel elit. Neque laoreet
				suspendisse interdum consectetur. Ultrices gravida dictum fusce ut placerat orci. Bibendum ut tristique et egestas quis ipsum suspendisse.
				Mattis rhoncus urna neque viverra justo nec ultrices dui. Elit duis tristique sollicitudin nibh sit amet. At risus viverra adipiscing at.
				Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas. Sit amet est placerat in
				egestas erat imperdiet sed euismod. Turpis egestas maecenas pharetra convallis posuere. Egestas tellus rutrum tellus pellentesque eu
				tincidunt tortor aliquam. Dolor sit amet consectetur adipiscing elit. Aliquam purus sit amet luctus venenatis lectus magna fringilla.
				Scelerisque fermentum dui faucibus in ornare quam viverra. Egestas maecenas pharetra convallis posuere morbi leo urna. A diam sollicitudin
				tempor id eu nisl nunc. Lectus sit amet est placerat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. At tellus
				at urna condimentum mattis pellentesque id nibh. Dui faucibus in ornare quam. Tincidunt id aliquet risus feugiat in ante metus dictum.
				Adipiscing commodo elit at imperdiet dui. Dolor sed viverra ipsum nunc. Sodales neque sodales ut etiam sit amet nisl. Hendrerit dolor magna
				eget est lorem ipsum dolor sit amet. Mattis molestie a iaculis at erat pellentesque adipiscing. Adipiscing elit duis tristique sollicitudin
				nibh sit amet commodo nulla. Fringilla urna porttitor rhoncus dolor purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Leo vel fringilla est ullamcorper. Eget
				est lorem ipsum dolor sit amet consectetur adipiscing elit. In mollis nunc sed id semper risus in hendrerit gravida. Ullamcorper sit amet
				risus nullam eget felis eget. Dolor sed viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus iaculis urna id volutpat. Porta non
				pulvinar neque laoreet suspendisse. Nunc id cursus metus aliquam eleifend mi in. A iaculis at erat pellentesque adipiscing commodo. Proin
				nibh nisl condimentum id. In hac habitasse platea dictumst vestibulum rhoncus est. Non tellus orci ac auctor augue mauris augue neque. Enim
				nulla aliquet porttitor lacus luctus accumsan tortor. Nascetur ridiculus mus mauris vitae ultricies leo integer. Ullamcorper eget nulla
				facilisi etiam dignissim. Leo in vitae turpis massa sed elementum tempus egestas sed. Ut enim blandit volutpat maecenas volutpat. Venenatis
				urna cursus eget nunc scelerisque viverra mauris. Neque aliquam vestibulum morbi blandit. Porttitor eget dolor morbi non. Nisi quis eleifend
				quam adipiscing vitae. Aliquam ultrices sagittis orci a scelerisque purus semper. Interdum varius sit amet mattis vulputate enim nulla
				aliquet. Ut sem viverra aliquet eget sit amet tellus cras. Sit amet tellus cras adipiscing enim eu turpis egestas. Amet cursus sit amet
				dictum sit amet justo donec enim. Neque gravida in fermentum et sollicitudin ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis
				nunc. Ultrices eros in cursus turpis massa tincidunt dui. Nisl rhoncus mattis rhoncus urna neque viverra justo. Odio pellentesque diam
				volutpat commodo sed egestas. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ipsum nunc aliquet bibendum enim. Faucibus ornare
				suspendisse sed nisi lacus sed. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Metus vulputate eu scelerisque felis
				imperdiet. Consequat interdum varius sit amet mattis vulputate enim. Amet cursus sit amet dictum sit amet justo. Eget aliquet nibh praesent
				tristique magna sit. Ut consequat semper viverra nam libero justo. Pharetra massa massa ultricies mi. Sem viverra aliquet eget sit amet.
				Pulvinar mattis nunc sed blandit libero volutpat sed. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Consectetur adipiscing elit
				ut aliquam. Volutpat diam ut venenatis tellus in metus vulputate. Scelerisque in dictum non consectetur a erat. Venenatis lectus magna
				fringilla urna porttitor rhoncus. Vitae congue mauris rhoncus aenean vel elit. Neque laoreet suspendisse interdum consectetur. Ultrices
				gravida dictum fusce ut placerat orci. Bibendum ut tristique et egestas quis ipsum suspendisse. Mattis rhoncus urna neque viverra justo nec
				ultrices dui. Elit duis tristique sollicitudin nibh sit amet. At risus viverra adipiscing at. Interdum posuere lorem ipsum dolor sit amet
				consectetur adipiscing elit. Nunc vel risus commodo viverra maecenas. Sit amet est placerat in egestas erat imperdiet sed euismod. Turpis
				egestas maecenas pharetra convallis posuere. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Dolor sit amet
				consectetur adipiscing elit. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Scelerisque fermentum dui faucibus in ornare
				quam viverra. Egestas maecenas pharetra convallis posuere morbi leo urna. A diam sollicitudin tempor id eu nisl nunc. Lectus sit amet est
				placerat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. At tellus at urna condimentum mattis pellentesque id
				nibh. Dui faucibus in ornare quam. Tincidunt id aliquet risus feugiat in ante metus dictum. Adipiscing commodo elit at imperdiet dui. Dolor
				sed viverra ipsum nunc. Sodales neque sodales ut etiam sit amet nisl. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Mattis
				molestie a iaculis at erat pellentesque adipiscing. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Fringilla urna
				porttitor rhoncus dolor purus.
			</Dialog.Body>

			<Dialog.Actions>
				<Button on:click={onclick_cancel}>Cancel</Button>
				<Button>Ok</Button>
			</Dialog.Actions>
		</Dialog.Root>
	</FluentRoot>
</Story>
