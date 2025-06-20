import { hslToHsv } from '../conversions/hslToHsv';
import { rgbToHex } from '../conversions/rgbToHex';
import { rgbToHsl } from '../conversions/rgbToHsl';
import type { Color } from '../types';
import { createColor } from '../utils';

export function rgb(r: number, g: number, b: number): Color {
	if (
		r < 0 ||
		r > 255 ||
		g < 0 ||
		g > 255 ||
		b < 0 ||
		b > 255 ||
		!Number.isInteger(r) ||
		!Number.isInteger(g) ||
		!Number.isInteger(b)
	)
		throw new TypeError('Not a valid rgb value');

	const { h, s, l } = rgbToHsl(r, g, b);

	return createColor({
		hex: rgbToHex(r, g, b),
		rgb: { r, g, b },
		hsl: { h, s, l },
		hsv: hslToHsv(h, s, l)
	});
}
