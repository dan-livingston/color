import { describe, expect, it } from 'vitest';
import { rgbToHsl } from './rgbToHsl';
import { colors } from '../__fixtures__/colors';

describe('rgbToHsl', () => {
	it('converts rgb to hsl', () => {
		for (const color of colors) {
			const { r, g, b } = color.rgb;
			expect(rgbToHsl(r, g, b)).toEqual(color.hsl);
		}
	});
});
