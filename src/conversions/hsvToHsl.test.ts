import { describe, expect, it } from 'vitest';
import { hsvToHsl } from './hsvToHsl';
import { colors } from '../__fixtures__/colors';

describe('hsvToHsl', () => {
	it('converts hsv to hsl', () => {
		for (const color of colors) {
			const { h, s, v } = color.hsv;
			const { h: h2, s: s2, l } = hsvToHsl(h, s, v);
			expect(h2).toBeCloseTo(color.hsl.h);
			expect(s2).toBeCloseTo(color.hsl.s);
			expect(l).toBeCloseTo(color.hsl.l);
		}
	});
});
