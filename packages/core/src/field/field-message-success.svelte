<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import { CheckmarkCircleFilled } from '@svelte-fui/icons';
	import FieldMessage from './field-message.svelte';

	let klass = '';
	export { klass as class };
</script>

<FieldMessage {...$$restProps}>
	<Icon src={CheckmarkCircleFilled} />
	<slot />
</FieldMessage>
