import { describe, expect, it } from 'vitest';
import { hsv } from './hsv';
import { colors } from '../__fixtures__/colors';

describe('hsv', () => {
	it('initializes a color from a valid hsv', () => {
		for (const color of colors) {
			const { h, s, v } = color.hsv;
			expect(() => hsv(h, s, v)).not.toThrow();
		}
	});

	it("doesn't initialize a color from an invalid hsv", () => {
		expect(() => hsv(-1, 0, 0)).toThrow();
		expect(() => hsv(361, 0, 0)).toThrow();
		expect(() => hsv(0, -1, 0)).toThrow();
		expect(() => hsv(0, 2, 0)).toThrow();
		expect(() => hsv(0, 0, -1)).toThrow();
		expect(() => hsv(0, 0, 2)).toThrow();
	});
});
