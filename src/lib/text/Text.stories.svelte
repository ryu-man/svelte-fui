<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Text, App, Icon } from 'svelte-fui';
	import { MicRegular, PersonRegular } from '@svelte-fui/icons';
</script>

<Meta title="Components/Text" component={Text} />

<Story id="fui_text" name="Text" args={{}} let:args>
	<App>
		<div class="flex items-center justify-center w-full h-full">
			<Text {...args} >This is an example of the Text component's usage.</Text>
		</div>
	</App>
</Story>
