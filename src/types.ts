export type HexString = `#${string}`;
export type Rgb = { r: number; g: number; b: number };

export interface Color {
	readonly rawHex: number;
	readonly hex: HexString;
	readonly rgb: { r: number; g: number; b: number };
	readonly r: number;
	readonly g: number;
	readonly b: number;
}
