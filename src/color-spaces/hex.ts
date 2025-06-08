import { hexToRgb } from '../conversions/hexToRgb';
import { hslToHsv } from '../conversions/hslToHsv';
import { rgbToHsl } from '../conversions/rgbToHsl';
import type { Color, Hex, HexString } from '../types';
import { createColor } from '../utils';

export function hex(value: HexString): Color;
export function hex(value: number): Color;
export function hex(value: Hex): Color {
	switch (typeof value) {
		case 'number':
			return parseHex(value);
		case 'string': {
			switch (value.length) {
				case 4:
					return parseShortHexString(value);
				case 7:
					return parseLongHexString(value);
				default:
					throw new TypeError('Not a valid hex');
			}
		}
		default:
			throw new TypeError('Not a valid hex');
	}
}

function parseHex(hex: number): Color {
	if (Number.isNaN(hex) || hex < 0 || hex > 0xffffff || !Number.isInteger(hex))
		throw new TypeError('Not a valid hex');

	const { r, g, b } = hexToRgb(hex);
	const { h, s, l } = rgbToHsl(r, g, b);

	return createColor({
		hex,
		rgb: { r, g, b },
		hsl: { h, s, l },
		hsv: hslToHsv(h, s, l)
	});
}

function parseShortHexString(value: HexString): Color {
	return parseLongHexString(value.replace(/([0-9a-fA-F])/g, '$1$1') as HexString);
}

function parseLongHexString(value: HexString): Color {
	return parseHex(Number.parseInt(value.replace('#', ''), 16));
}
