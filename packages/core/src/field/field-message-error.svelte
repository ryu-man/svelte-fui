<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import ErrorCircleFilled from 'virtual:icons/fluent/error-circle-24-filled';
	import FieldMessage from './field-message.svelte';
</script>

<FieldMessage {...$$restProps}>
	<Icon class="h-full">
		<ErrorCircleFilled />
	</Icon>
	<slot />
</FieldMessage>
