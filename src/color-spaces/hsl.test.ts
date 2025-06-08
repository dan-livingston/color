import { describe, expect, it } from 'vitest';
import { hsl } from './hsl';
import { colors } from '../__fixtures__/colors';

describe('hsl', () => {
	it('initializes a color from a valid hsl', () => {
		for (const color of colors) {
			expect(() => hsl(color.h, color.s, color.l)).not.toThrow();
		}
	});

	it("doesn't initialize a color from an invalid hsl", () => {
		expect(() => hsl(-1, 0, 0)).toThrow();
		expect(() => hsl(361, 0, 0)).toThrow();
		expect(() => hsl(0, -1, 0)).toThrow();
		expect(() => hsl(0, 2, 0)).toThrow();
		expect(() => hsl(0, 0, -1)).toThrow();
		expect(() => hsl(0, 0, 2)).toThrow();
	});
});
