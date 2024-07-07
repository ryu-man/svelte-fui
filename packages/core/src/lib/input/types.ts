import type { HTMLInputTypeAttribute } from 'svelte/elements';

export type InputType = HTMLInputTypeAttribute;
export type InputSize = 'sm' | 'md' | 'lg'

export type ExternalContext = { invalid: boolean; size: InputSize }