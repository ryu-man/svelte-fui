<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Text, App, Icon } from 'svelte-fluentui';
	import { MicRegular, PersonRegular } from 'svelte-fluentui/icons';
</script>

<Meta title="Components/Text" component={Text} />

<Story id="fui_text" name="Text" args={{}} let:args>
	<App>
		<Text {...args} >This is an example of the Text component's usage.</Text>
	</App>
</Story>
