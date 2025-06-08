import type { Color } from '../types';
import { createColor } from '../utils';

export const GREEN: Color = createColor({
	hex: 0x00ff00,
	rgb: {
		r: 0,
		g: 255,
		b: 0
	},
	hsl: {
		h: 120,
		s: 1,
		l: 0.5
	}
});
