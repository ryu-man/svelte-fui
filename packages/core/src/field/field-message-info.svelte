<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import InfoFilled from 'virtual:icons/fluent/info-24-filled';
	import FieldMessage from './field-message.svelte';
</script>

<FieldMessage {...$$restProps}>
	<Icon class="h-full">
		<InfoFilled />
	</Icon>
	<slot />
</FieldMessage>
