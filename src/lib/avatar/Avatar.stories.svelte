<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Avatar, App } from 'svelte-fui';
	import { PersonRegular } from 'svelte-fui/icons'
</script>

<Meta title="Components/Avatar" component={Avatar} />

<Story id="avatar" name="Avatar" let:args>
	<App>
		<Avatar {...args} src={PersonRegular} />
	</App>
</Story>
