export function tailwindColorify(name: string, colors: Record<string, string>) {
	return Object.entries(colors).reduce((acc, [key, value]) => {
		acc[[name, key].join('-')] = value;

		return acc;
	}, {} as Record<string, string>);
}
