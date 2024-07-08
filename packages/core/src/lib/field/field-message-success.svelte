<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import CheckmarkCircleFilled from 'virtual:icons/fluent/checkmark-circle-24-filled';
	import FieldMessage from './field-message.svelte';

	let klass = '';
	export { klass as class };
</script>

<FieldMessage {...$$restProps}>
	<Icon class="h-full">
		<CheckmarkCircleFilled />
	</Icon>
	<slot />
</FieldMessage>
