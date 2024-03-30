export type SvelteUIColor = 
    | 'dark'
    | 'gray'
    | 'red'
    | 'pink'
    | 'grape'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'orange'
    | string;


type SvelteUISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SvelteUINumberSize = SvelteUISize | number;

export type SvelteUIGradient = { to: string; from: string; deg?: number }

export type Theme = {
	colors: Record<SvelteUIColor, string[]>;
	primary: string;
	white: string;
	sizes: Record<SvelteUISize, number>;
};