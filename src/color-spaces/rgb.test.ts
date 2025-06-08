import { describe, expect, it } from 'vitest';
import { rgb } from './rgb';
import { colors } from '../__fixtures__/colors';

describe('rgb', () => {
	it('initializes a color from a valid rgb', () => {
		for (const color of colors) {
			expect(() => rgb(color.r, color.g, color.b)).not.toThrow();
		}
	});

	it("doesn't initialize a color from an invalid rgb", () => {
		expect(() => rgb(-1, 0, 0)).toThrow();
		expect(() => rgb(256, 0, 0)).toThrow();
		expect(() => rgb(0.5, 0, 0)).toThrow();
	});
});
