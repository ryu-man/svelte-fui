import { nanoid } from 'nanoid';

export function safe<R, S, T>(value: R, resolve: () => S, reject: () => T) {
	if (!value) {
		return reject();
	}

	return resolve();
}

export function fid(namespace = '') {
	return ['f', '-', namespace, namespace ? '-' : '', nanoid(8)].join('');
}
