import type { Color } from '../types';
import { createColor } from '../utils';

export const WHITE: Color = createColor({
	hex: 0xffffff,
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
