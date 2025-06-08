import type { colorSymbol } from './constants';

export interface Color {
	readonly __colorSymbol: typeof colorSymbol;
	readonly hex: number;
	readonly hexString: HexString;
	readonly rgb: Rgb;
	readonly hsl: Hsl;
	readonly hsv: Hsv;
	readonly r: number;
	readonly g: number;
	readonly b: number;
	readonly h: number;
	readonly s: number;
	readonly l: number;
}

// Color spaces
export type HexString = `#${string}`;
export type Hex = HexString | number;
export type Rgb = Readonly<{ r: number; g: number; b: number }>;
export type Hsl = Readonly<{ h: number; s: number; l: number }>;
export type Hsv = Readonly<{ h: number; s: number; v: number }>;

// Transforms
export type Transform = (color: Color) => Color;
