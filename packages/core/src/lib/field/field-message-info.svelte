<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import InfoFilled from '@svelte-fui/core/icons/info-filled.svelte';
	import FieldMessage from './field-message.svelte';
</script>

<FieldMessage {...$$restProps}>
	<Icon class="h-full">
		<InfoFilled />
	</Icon>
	<slot />
</FieldMessage>
