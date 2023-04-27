<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Avatar, App } from 'svelte-fluentui';
  import { PersonRegular } from 'svelte-fluentui/icons'
</script>

<Meta title="Components/Avatar" component={Avatar} />

<Story id="avatar" name="Avatar" let:args>
  <App>
    <Avatar {...args} src={PersonRegular} />
  </App>
</Story>
