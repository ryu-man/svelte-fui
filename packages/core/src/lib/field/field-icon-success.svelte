<script lang="ts">
	import { Icon } from '../icon';
	import CheckmarkCircleFilled from '@svelte-fui/core/icons/checkmark-circle-filled.svelte';
	import { classnames } from '../internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full', klass)}>
	<CheckmarkCircleFilled />
</Icon>
