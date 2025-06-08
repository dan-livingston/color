import { describe, expect, it } from 'vitest';
import { hslToRgb } from './hslToRgb';
import { colors } from '../__fixtures__/colors';

describe('hslToRgb', () => {
	it('converts hsl to rgb', () => {
		for (const color of colors) {
			const { h, s, l } = color.hsl;
			const { r, g, b } = hslToRgb(h, s, l);

			expect(r).toBeCloseTo(color.rgb.r, 0);
			expect(g).toBeCloseTo(color.rgb.g, 0);
			expect(b).toBeCloseTo(color.rgb.b, 0);
		}
	});
});
