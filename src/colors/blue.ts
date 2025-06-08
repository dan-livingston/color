import type { Color } from '../types';
import { createColor } from '../utils';

export const BLUE: Color = createColor({
	rawHex: 0x0000ff,
	hex: '#0000ff',
	rgb: {
		r: 0,
		g: 0,
		b: 255
	},
	hsl: {
		h: 240,
		s: 1,
		l: 0.5
	}
});
