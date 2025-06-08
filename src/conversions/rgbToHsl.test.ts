import { describe, expect, it } from 'vitest';
import { rgbToHsl } from './rgbToHsl';
import { colors } from '../__fixtures__/colors';

describe('rgbToHsl', () => {
	it('converts rgb to hsl', () => {
		for (const color of colors) {
			const { r, g, b } = color.rgb;
			const { h, s, l } = rgbToHsl(r, g, b);
			expect(h).toBeCloseTo(color.hsl.h, 0);
			expect(s).toBeCloseTo(color.hsl.s);
			expect(l).toBeCloseTo(color.hsl.l);
		}
	});
});
