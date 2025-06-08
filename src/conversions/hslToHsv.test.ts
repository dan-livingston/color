import { describe, expect, it } from 'vitest';
import { hslToHsv } from './hslToHsv';
import { colors } from '../__fixtures__/colors';

describe('hslToHsv', () => {
	it('converts hsl to hsv', () => {
		for (const color of colors) {
			const { h, s, l } = color.hsl;
			const { h: h2, s: s2, v } = hslToHsv(h, s, l);
			expect(h2).toBeCloseTo(color.hsv.h);
			expect(s2).toBeCloseTo(color.hsv.s);
			expect(v).toBeCloseTo(color.hsv.v);
		}
	});
});
