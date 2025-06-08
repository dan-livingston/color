import type { Rgb } from '../types';

export function hexToRgb(value: number): Rgb {
	return { r: (value & 0xff0000) >> 16, g: (value & 0x00ff00) >> 8, b: value & 0x0000ff };
}
