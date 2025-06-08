import { hslToRgb } from '../conversions/hslToRgb';
import { rgbToHex } from '../conversions/rgbToHex';
import type { Color } from '../types';
import { createColor, formatHex } from '../utils';

export function hsl(h: number, s: number, l: number): Color {
	if (h < 0 || h > 360 || s < 0 || s > 1 || l < 0 || l > 1)
		throw new TypeError('Not a valid hsl value');

	const { r, g, b } = hslToRgb(h, s, l);
	const rawHex = rgbToHex(r, g, b);

	return createColor({
		rawHex,
		hex: formatHex(rawHex),
		rgb: { r, g, b },
		hsl: { h, s, l }
	});
}
