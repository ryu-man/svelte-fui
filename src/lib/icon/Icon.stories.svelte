<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Icon, App } from 'svelte-fui';
	import { AccessibilityCheckmarkFilled } from 'svelte-fui/icons'
</script>

<Meta title="Components/Icon" component={Icon} />

<Story id="icon" name="Icon" args={{}} let:args>
	<App>
		<Icon {...args} src={AccessibilityCheckmarkFilled} size="24em" fill="red" />
	</App>
</Story>
