<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Checkbox, App, Icon } from 'svelte-fui';
	import { MicRegular, PersonRegular } from 'svelte-fui/icons';
</script>

<Meta title="Components/Checkbox" component={Checkbox} />

<Story id="input" name="Checkbox" args={{}} let:args>
	<App>
		<div class="flex items-center justify-center w-full h-full">
			<Checkbox {...args} />
		</div>
	</App>
</Story>
