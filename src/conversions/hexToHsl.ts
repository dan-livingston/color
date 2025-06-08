import type { Hsl } from '../types';
import { hexToRgb } from './hexToRgb';
import { rgbToHsl } from './rgbToHsl';

export function hexToHsl(value: number): Hsl {
	const { r, g, b } = hexToRgb(value);
	return rgbToHsl(r, g, b);
}
