import { getFluentContext, setFluentContext, type FluentContext } from '../internal/context';

export const dialogNamespace = 'dropdown';

export type DialogContext = FluentContext & {
	readonly state: {
		data: {};
		elements: {
			root?: HTMLElement;
			header?: HTMLElement;
			body?: HTMLElement;
			footer?: HTMLElement;
		};
	};

	readonly derived: {
		data: {
			open: boolean;
		};
		elements: {
			root?: HTMLElement;
			header?: HTMLElement;
			body?: HTMLElement;
			footer?: HTMLElement;
		};
	};

	methods: {
		open: () => void;
		close: () => void;
		toggle: () => void;
	};
};

export function getDialogContext() {
	return getFluentContext<DialogContext>(dialogNamespace);
}

export function setDialogContext(context: DialogContext) {
	return setFluentContext(context, dialogNamespace);
}
