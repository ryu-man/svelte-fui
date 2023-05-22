export function tailwindColorify(name, colors) {
    return Object.entries(colors).reduce((acc, [key, value]) => {
        acc[[name, key].join('-')] = value;
        return acc;
    }, {});
}
