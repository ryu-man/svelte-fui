<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import { WarningFilled } from '@svelte-fui/icons';
	import FieldMessage from './field-message.svelte';

	let klass = '';
	export { klass as class };
</script>

<FieldMessage {...$$restProps}>
	<Icon src={WarningFilled} />
	<slot />
</FieldMessage>
