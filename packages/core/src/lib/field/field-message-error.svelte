<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import ErrorCircleFilled from '@svelte-fui/core/icons/error-circle-filled.svelte';
	import FieldMessage from './field-message.svelte';
</script>

<FieldMessage {...$$restProps}>
	<Icon class="h-full">
		<ErrorCircleFilled />
	</Icon>
	<slot />
</FieldMessage>
