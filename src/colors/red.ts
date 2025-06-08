import type { Color } from '../types';
import { brand } from '../utils';

export const RED: Color = brand({
	rawHex: 0xff0000,
	hex: '#ff0000',
	rgb: {
		r: 255,
		g: 0,
		b: 0
	},
	r: 255,
	g: 0,
	b: 0,
	hsl: {
		h: 0,
		s: 1,
		l: 0.5
	},
	h: 0,
	s: 1,
	l: 0.5
});
