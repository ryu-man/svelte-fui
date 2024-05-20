<script lang="ts">
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { getAccordionContext, setAccordionItemContext } from './context';
	import { classnames } from '../internal';

	export let value: string = crypto.randomUUID();
	export let data: unknown | undefined = undefined;
	let klass = '';
	export { klass as class };

	const { items$, selectedValue$, selectedData$, collapsible$, multiple$ } = getAccordionContext();
	const { active$ } = setAccordionItemContext({
		active$: derived(selectedValue$, (selectedValue) => {
			if (Array.isArray(selectedValue)) {
				return selectedValue.includes(value);
			} else {
				return selectedValue === value;
			}
		})
	});

	onMount(() => {
		items$.update((val) => {
			val[value] = {
				value,
				selected: false,
				data
			};

			return { ...val };
		});
	});

	function setup(node: HTMLDivElement) {
		node.addEventListener('accordion-header-click', onclick, { capture: true });

		return {
			destroy() {
				node.removeEventListener('accordion-header-click', onclick);
			}
		};
	}

	function onclick() {
		if ($multiple$) {
			if ((($selectedValue$ as any[]).length > 1 || $collapsible$) && $active$) {
				selectedValue$.update((v) => {
					const _v = Array.isArray(v) ? v : [v];
					const set = new Set([...(_v as any[]), value]);
					set.delete(value);

					return [...set];
				});
				selectedData$.set((v) => {
					const _v = Array.isArray(v) ? v : [v];
					const set = new Set([...(_v as any[]), data]);
					set.delete(data);

					return [...set];
				});
			} else {
				selectedValue$.update((v) => {
					const _v = Array.isArray(v) ? v : [v];
					return [...new Set([...(_v as any[]), value])];
				});
				selectedData$.set((v) => {
					const _v = Array.isArray(v) ? v : [v];
					return [...new Set([...(_v as any[]), data])];
				});
			}
		} else {
			if ($collapsible$ && $active$) {
				selectedValue$.set('');
				selectedData$.set(undefined);
				return;
			}

			selectedValue$.set(value);
			selectedData$.set(data);
		}
	}
</script>

<div class={classnames("fui-accordion-item", klass)} use:setup>
	<slot />
</div>

<style lang="postcss">
	.fui-accordion-item {
	}
</style>
