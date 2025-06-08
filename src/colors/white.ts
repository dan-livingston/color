import type { Color } from '../types';
import { createColor } from '../utils';

export const WHITE: Color = createColor({
	rawHex: 0xffffff,
	hex: '#ffffff',
	rgb: {
		r: 255,
		g: 255,
		b: 255
	},
	hsl: {
		h: 0,
		s: 0,
		l: 1
	}
});
