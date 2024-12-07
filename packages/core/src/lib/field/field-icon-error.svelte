<script lang="ts">
	import { Icon } from '../icon';
	import ErrorCircleFilled from '@svelte-fui/core/icons/error-circle-filled.svelte';
	import { classnames } from '../internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full',klass)}>
	<ErrorCircleFilled />
</Icon>
