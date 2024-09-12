<script lang="ts" generics="T">
	import { classnames } from '../internal';
	import { nanoid } from 'nanoid';
	import { setTabsContext, type MountPayload, type TabsHolder } from './context';
	import { derived, writable } from 'svelte/store';

	const id = nanoid();

	let klass = '';
	export { klass as class };
	export let value: string | undefined = undefined;

	const items = writable<TabsHolder<T>>({});

	const value_store = writable<string | undefined>(value);
	$: value_store.set(value);
	$: value = $value_store;

	const active_tab = derived([items, value_store], ([tabs, value]) =>
		value ? tabs[value] : undefined
	);

	const context_context = setTabsContext<T>({
		body: {
			element: writable(undefined)
		},
		header: {
			element: writable(undefined)
		},
		height: writable(0),
		id,
		value: value_store,
		context: {},
		tabs: {
			items: items,
			active: active_tab
		},
		mount,
		select,
		unselect
	});

	function mount(value: string, payload: MountPayload<T>) {
		const tab = {
			value: value,
			...payload,
			get active() {
				return $value_store === value;
			},
			set active(val: boolean) {
				if (val) {
					value_store.set(value);
				} else if ($value_store === value) {
					value_store.set(undefined);
				}
			}
		};

		$items[value] = tab;

		if (!$value_store) {
			select(value);
		}

		return () => {
			unselect(value);
			delete $items[value];

			$items = { ...$items };
		};
	}

	function select(value: string) {
		$value_store = value;
	}

	function unselect(value: string) {
		if (value === value) {
			$value_store = undefined;
		}

		return select;
	}
</script>

<div
	class={classnames('fui-tabs flex flex-col w-full overflow-x-hidden relative', klass)}
	data-id={id}
>
	<slot />
</div>

<style lang="postcss">
	.fui-tabs::-webkit-scrollbar {
		width: 0;
	}
</style>
