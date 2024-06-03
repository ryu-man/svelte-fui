<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import { ErrorCircleFilled } from '@svelte-fui/icons';
	import FieldMessage from './field-message.svelte';
</script>

<FieldMessage {...$$restProps}>
	<Icon src={ErrorCircleFilled} />
	<slot />
</FieldMessage>
