import type { Color } from '../types';
import { brand as brand } from '../utils';

export const WHITE: Color = brand({
	rawHex: 0xffffff,
	hex: '#ffffff',
	r: 255,
	g: 255,
	b: 255,
	rgb: {
		r: 255,
		g: 255,
		b: 255
	}
});
