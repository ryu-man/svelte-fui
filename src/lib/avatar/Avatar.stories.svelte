<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Avatar, App } from 'svelte-fui';
	import { PersonRegular } from 'svelte-fui/icons'
</script>

<Meta title="Components/Avatar" component={Avatar} />

<Story id="avatar" name="Avatar" let:args>
	<App>
		<div class="flex items-center justify-center w-full h-full">
			<Avatar {...args} src={PersonRegular} />
		</div>
	</App>
</Story>
