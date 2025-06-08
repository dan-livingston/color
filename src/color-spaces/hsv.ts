import { hslToRgb } from '../conversions/hslToRgb';
import { hsvToHsl } from '../conversions/hsvToHsl';
import { rgbToHex } from '../conversions/rgbToHex';
import type { Color } from '../types';
import { createColor } from '../utils';

export function hsv(h: number, s: number, v: number): Color {
	if (h < 0 || h > 360 || s < 0 || s > 1 || v < 0 || v > 1)
		throw new TypeError('Not a valid hsl value');

	const { s: sHsl, l } = hsvToHsl(h, s, v);
	const { r, g, b } = hslToRgb(h, sHsl, l);

	return createColor({
		hex: rgbToHex(r, g, b),
		rgb: { r, g, b },
		hsl: { h, s: sHsl, l },
		hsv: { h, s, v }
	});
}
