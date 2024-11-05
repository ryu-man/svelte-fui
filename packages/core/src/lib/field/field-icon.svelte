<script lang="ts">
	import { Icon } from '../icon';
	import { classnames } from '../internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('field-icon h-full', klass)}>
	{@render children?.()}
</Icon>
