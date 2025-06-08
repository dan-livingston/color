import { describe, expect, it } from 'vitest';
import { rgbToHsl } from './rgbToHsl';
import { colors } from '../__fixtures__/colors';

describe('rgbToHsl', () => {
	it('converts rgb to hsl', () => {
		for (const color of colors) {
			expect(rgbToHsl(color.r, color.g, color.b)).toEqual(color.hsl);
		}
	});
});
