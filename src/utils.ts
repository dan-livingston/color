import { colorSymbol } from './constants';
import type { Color, Hsl, Hsv, Rgb } from './types';

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
	hsv: Hsv;
	rgb: Rgb;
}

export function createColor({ hex, hsl, hsv, rgb }: BaseColor): Color {
	return {
		__colorSymbol: colorSymbol,
		hex,
		hsl,
		hsv,
		rgb,
		hexString: `#${hex.toString(16).padStart(6, '0')}`
	};
}
