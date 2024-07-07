type Builder = () => any;

export function buildContext<T>(context: Partial<T> = {}, builders: Record<keyof T, Builder>) {
	const keys = new Set(Object.keys(builders)) as Set<keyof T>;

	Object.keys(context).forEach((key) => keys.delete(key));

	for (const key of keys) {
		context[key] = builders[key]();
	}

	return context as T;
}
