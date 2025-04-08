<script lang="ts">
	import { classnames } from '../internal';
	import { Label } from '../label';
	import { getFieldContext } from './context';

	const contextField = getFieldContext();

	let { class: klass = '', children, ...restProps } = $props();
</script>

<Label class={classnames('fui-field-label', klass)} {...restProps}>
	{@render children?.({ context: contextField })}
</Label>
