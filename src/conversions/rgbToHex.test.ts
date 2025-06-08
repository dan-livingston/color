import { describe, expect, it } from 'vitest';
import { rgbToHex } from './rgbToHex';
import { colors } from '../__fixtures__/colors';

describe('rgbToHex', () => {
	it('converts rgb to Hex', () => {
		for (const color of colors) {
			const { r, g, b } = color.rgb;
			expect(rgbToHex(r, g, b)).toEqual(color.hex);
		}
	});
});
