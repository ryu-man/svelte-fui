import type { IconProps } from '@svelte-fui/core/components/icon';
import type { ButtonProps } from '../types';
import type { HTMLAttributes } from 'svelte/elements';

export type CompoundButtonRootProps = ButtonProps & {};

export type CompoundButtonIconProps = IconProps;

export type CompoundButtonHeaderProps = HTMLAttributes<HTMLDivElement>;

export type CompoundButtonBodyProps = HTMLAttributes<HTMLParagraphElement>;
