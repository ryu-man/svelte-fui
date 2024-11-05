<script lang="ts">
	import { getPopoverContext, setPopoverContext, type PopoverContext } from './context';
	import type { PopoverRootProps } from './types';
	import { nanoid } from 'nanoid';

	let { id, context, open = $bindable(false), children }: PopoverRootProps = $props();

	const context_parent = getPopoverContext();

	const popover_context = (() => {
		if (context) {
			return setPopoverContext(context);
		}

		const context_state: PopoverContext['state'] = $state({
			data: {},
			elements: {}
		});

		const context_derived: PopoverContext['derived'] = $derived({
			data: {
				open
			},
			elements: {
				overlay: context_state.elements.overlay,
				trigger: context_state.elements.trigger,
				indicator: context_state.elements.indicator
			}
		});

		return setPopoverContext({
			id: nanoid(),
			type: 'popover',
			parent() {
				return context_parent;
			},
			controller() {
				return context;
			},
			get derived() {
				return context_derived;
			},
			get state() {
				return context_state;
			},
			events: {
				onchange: (params) => {}
			},
			methods: {
				open: () => {
					open = true;
				},
				close: () => {
					open = false;
				},
				toggle: () => {
					open = !open;
				}
			}
		});
	})();
</script>

{@render children?.({ context: popover_context })}
