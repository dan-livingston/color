import type { colorSymbol } from './constants';

export interface Color {
	__colorSymbol: typeof colorSymbol;
	readonly rawHex: number;
	readonly hex: HexString;
	readonly rgb: Rgb;
	readonly hsl: Hsl;
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
export type Rgb = { r: number; g: number; b: number };
export type Hsl = { h: number; s: number; l: number };

// Transforms
export type Transform = (color: Color) => Color;
