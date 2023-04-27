<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button, App } from 'svelte-fluentui';
</script>

<Meta title="Components/Button" component={Button} />

<Story id="button" name="Button" let:args>
  <App>
    <Button {...args}>Fluent for svelte</Button>
    <Button {...args} />
  </App>
</Story>
