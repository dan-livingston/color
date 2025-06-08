import type { Color } from '../types';
import { brand as brand } from '../utils';

export const WHITE: Color = brand({
	rawHex: 0xffffff,
	hex: '#ffffff',
	rgb: {
		r: 255,
		g: 255,
		b: 255
	},
	r: 255,
	g: 255,
	b: 255,
	hsl: {
		h: 0,
		s: 0,
		l: 1
	},
	h: 0,
	s: 0,
	l: 1
});
