<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Layout from './layout.svelte';
	import { App } from '../app';

	const { Story } = defineMeta({
		title: 'UI/Layout'
	});
</script>

<script>
	
</script>

<Story>
	{#snippet children()}
		<App>
			<Layout />
		</App>
	{/snippet}
</Story>
