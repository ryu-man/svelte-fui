import { type Updater, type Writable, writable } from 'svelte/store';

export type RowStore<T = any> = {
	id: string;
	data: T;
	selected$: Writable<boolean> & { value: boolean };
};

export function rowStore<T>(id: string, data: T) {
	let selected = false;

	const selected$ = writable(selected);

	return {
		id,
		data,
		selected$: {
			subscribe: selected$.subscribe,
			set(value: boolean) {
				return selected$.set((selected = value));
			},
			update(updater: Updater<boolean>) {
				return selected$.update((val) => {
					return (selected = updater(val));
				});
			},

			get value() {
				return selected;
			},
			set value(value: boolean) {
				this.set(value);
			}
		}
	};
}

