import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';

export function hslToHex(h: number, s: number, l: number): number {
	const { r, g, b } = hslToRgb(h, s, l);
	return rgbToHex(r, g, b);
}
