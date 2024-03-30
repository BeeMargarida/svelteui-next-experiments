import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

import type { SvelteUIColor, SvelteUIGradient, SvelteUINumberSize } from "$lib/style/index.js";

export type ButtonVariant =
    | 'filled'
    | 'light'
    | 'outline'
    | 'default'
    | 'white'
    | 'gradient'
    | 'subtle';

interface ButtonPropsInternal {
    variant?: ButtonVariant;
    color?: SvelteUIColor;
    size?: SvelteUINumberSize;
    radius?: SvelteUINumberSize;
    gradient?: SvelteUIGradient;
    leftIcon?: Snippet
    rightIcon?: Snippet
    compact?: boolean;
    fullSize?: boolean;
    // loaderPosition?: 'left' | 'right';
    // loaderProps?: LoaderProps;
    // href?: string;
    // external?: boolean;
    // disabled?: boolean;
    // loading?: boolean;
    // uppercase?: boolean;
    // ripple?: boolean;
}

export type ButtonProps = ButtonPropsInternal & HTMLButtonAttributes & HTMLAnchorAttributes;