import type { Color } from '../types';
import { createColor } from '../utils';

export const BLACK: Color = createColor({
	rawHex: 0x000000,
	hex: '#000000',
	rgb: {
		r: 0,
		g: 0,
		b: 0
	},
	hsl: {
		h: 0,
		s: 0,
		l: 0
	}
});
