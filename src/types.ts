import type { colorSymbol } from './constants';

export interface Color {
	__colorSymbol: typeof colorSymbol;
	readonly rawHex: number;
	readonly hex: HexString;
	readonly rgb: { r: number; g: number; b: number };
	readonly r: number;
	readonly g: number;
	readonly b: number;
}

// Color spaces
export type HexString = `#${string}`;
export type Hex = HexString | number;
export type Rgb = { r: number; g: number; b: number };

// Transforms
export type Transform = (color: Color) => Color;
