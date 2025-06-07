import type { Color, HexString, Rgb } from '../types';
import { formatHex } from '../utils';

export function hex(value: HexString): Color;
export function hex(value: number): Color;
export function hex(value: unknown): Color {
	switch (typeof value) {
		case 'number':
			return parseHex(value);
		case 'string': {
			switch (value.length) {
				case 4:
					return parseShortHexString(value as HexString);
				case 7:
					return parseLongHexString(value as HexString);
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

	return {
		rawHex: hex,
		hex: formatHex(hex),
		rgb: { r, g, b },
		r,
		g,
		b
	};
}

function parseShortHexString(value: HexString): Color {
	return parseLongHexString(value.replace(/([0-9a-fA-F])/g, '$1$1') as HexString);
}

function parseLongHexString(value: HexString): Color {
	return parseHex(Number.parseInt(value.replace('#', ''), 16));
}

function hexToRgb(value: number): Rgb {
	return { r: (value & 0xff0000) >> 16, g: (value & 0x00ff00) >> 8, b: value & 0x0000ff };
}
