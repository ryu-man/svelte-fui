<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Icon, App } from '@svelte-fui/core';
	import { AccessibilityCheckmarkFilled } from '@svelte-fui/icons';
</script>

<Meta title="Components/Icon" component={Icon} />

<Story id="icon" name="Icon" args={{}} let:args>
	<App>
		<div class="flex items-center justify-center w-full h-full">
			<Icon {...args} src={AccessibilityCheckmarkFilled} size="24em" fill="red" />
		</div>
	</App>
</Story>
