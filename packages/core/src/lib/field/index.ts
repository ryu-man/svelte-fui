import FieldRoot from './field-root.svelte';
import FieldMessage from './field-message.svelte';
import FieldLabel from './field-label.svelte';
import FieldIconError from './field-icon-error.svelte';
import FieldIconInfo from './field-icon-info.svelte';
import FieldIconSuccess from './field-icon-success.svelte';
import FieldIconWarning from './field-icon-warning.svelte';
import FieldIcon from './field-icon.svelte';

export const Field = {
	Root: FieldRoot,
	Label: FieldLabel,
	Message: FieldMessage,
	Icon: FieldIcon,
	IconError: FieldIconError,
	IconInfo: FieldIconInfo,
	IconSuccess: FieldIconSuccess,
	IconWarning: FieldIconWarning
};
