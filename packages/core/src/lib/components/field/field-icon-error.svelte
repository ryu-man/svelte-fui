<script lang="ts">
	import { Icon } from '../icon';
	import ErrorCircleFilled from '@svelte-fui/core/components/icons/error-circle-filled.svelte';
	import { classnames } from '@svelte-fui/core/internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full',klass)}>
	<ErrorCircleFilled />
</Icon>
