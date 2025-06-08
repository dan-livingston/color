import { rgbToHsl } from '../conversions/rgbToHsl';
import type { Color } from '../types';
import { createColor, formatHex } from '../utils';

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

	const rawHex = (r << 16) + (g << 8) + b;
	const { h, s, l } = rgbToHsl(r, g, b);

	return createColor({
		rawHex,
		hex: formatHex(rawHex),
		rgb: { r, g, b },
		hsl: { h, s, l }
	});
}
