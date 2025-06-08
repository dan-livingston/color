import { colorSymbol } from './constants';
import type { Color, Hsl, Rgb } from './types';

export function isColor(value: unknown): value is Color {
	return (
		typeof value === 'object' &&
		value !== null &&
		'__colorSymbol' in value &&
		value.__colorSymbol === colorSymbol
	);
}

interface BaseColor {
	hex: number;
	hsl: Hsl;
	rgb: Rgb;
}

export function createColor(base: BaseColor): Color {
	return {
		__colorSymbol: colorSymbol,
		...base,
		...base.rgb,
		...base.hsl,
		hexString: `#${base.hex.toString(16).padStart(6, '0')}`
	};
}
