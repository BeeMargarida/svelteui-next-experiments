<script lang="ts">
	import { mapSizeVariable, variantVariables } from '$lib/style/index.js';
	import type { ButtonProps } from './Button.js';

    let {
        variant = 'filled',
        color = 'blue',
        size = 'sm',
        radius = 'sm',
        compact = false,
        fullSize = false,
        gradient = { from: 'indigo', to: 'cyan', deg: 45 },
        children,
        leftIcon,
        rightIcon,
        ...props
    }: ButtonProps = $props()

    let componentStyle = $derived([
        ...variantVariables(variant, color, gradient),
		`--height: ${mapSizeVariable(size, compact ? 'height-compact' : 'height')}`,
		`--padding-x: ${mapSizeVariable(size, compact ? 'padding-x-compact' : 'padding-x')}`,
		`--fontSize: ${mapSizeVariable(size, 'fontSize')}`,
		`--radius: ${mapSizeVariable(radius, 'radius')}`,
		`--width: ${fullSize ? '100%' : 'fit-content'}`,
		'display: contents'
    ].join(';'))
</script>

<div style={componentStyle}>
    <button class="root" {...props}>
        {#if leftIcon}
            <span class="left-section">
                {@render leftIcon()}
            </span>
        {/if}
    
        {#if children}
            {@render children()}
        {/if}
    
        {#if rightIcon}
            <span class="right-section">
                {@render rightIcon()}
            </span>
        {/if}
    </button>
</div>

<style>
    @import '$lib/style/theme.css';

    * {
		/* @TODO(migration): use rem */
		--height-xs: 30px;
		--height-sm: 36px;
		--height-md: 42px;
		--height-lg: 50px;
		--height-xl: 60px;

		--height-compact-xs: 22px;
		--height-compact-sm: 26px;
		--height-compact-md: 30px;
		--height-compact-lg: 34px;
		--height-compact-xl: 40px;

		--padding-x-xs: 14px;
		--padding-x-sm: 18px;
		--padding-x-md: 22px;
		--padding-x-lg: 26px;
		--padding-x-xl: 32px;

		--padding-x-compact-xs: 7px;
		--padding-x-compact-sm: 8px;
		--padding-x-compact-md: 10px;
		--padding-x-compact-lg: 12px;
		--padding-x-compact-xl: 14px;
	}

	.root {
		cursor: pointer;
		position: relative;
		box-sizing: border-box;
		text-decoration: none;
		outline: none;
		user-select: none;
		appearance: none;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		background-color: var(--variant-background);
		color: var(--variant-color);
		border: var(--variant-border);
		border-radius: var(--radius);
		padding: 0px var(--padding-x);
		height: var(--height);
		font-family: var(--fontFamily-standard);
		font-weight: var(--fontWeight-bold);
		font-size: var(--fontSize);
		line-height: 1;
		flex-grow: 0;
		width: var(--width);
	}

	.root:hover {
		background-color: var(--variant-hover);
	}

	.root:disabled,
	.root.disabled {
		pointer-events: 'none';
		border-color: 'transparent';
		background-color: var(--gray200);
		color: var(--gray500);
		cursor: 'not-allowed';
	}

	.root:active {
		transform: 'translateY(1px)';
	}

	.root.loading {
		pointer-events: none;
	}

	.root.loading::before {
		content: '';
		position: absolute;
		inset: -1;
		background-color: var(--white05);
		border-radius: var(--radius);
		cursor: 'not-allowed';
	}

	.root.uppercase {
		text-transform: uppercase;
	}

	.left-section {
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right-section {
		margin-left: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>