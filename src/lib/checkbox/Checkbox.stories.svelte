<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Checkbox, App, Icon } from 'svelte-fluentui';
	import { MicRegular, PersonRegular } from 'svelte-fluentui/icons';
</script>

<Meta title="Components/Checkbox" component={Checkbox} />

<Story id="input" name="Checkbox" args={{}} let:args>
	<App>
		<Checkbox {...args} />
	</App>
</Story>
