import type { IconProps } from '@svelte-fui/core/icon';
import type { ButtonProps } from '../types';
import type { HTMLAttributes } from 'svelte/elements';

export type CompoundButtonRoot = ButtonProps & {};

export type CompoundButtonIcon = IconProps;

export type CompoundButtonHeader = HTMLAttributes<HTMLDivElement>;

export type CompoundButtonBody = HTMLAttributes<HTMLParagraphElement>;
