import { describe, expect, it } from 'vitest';
import { rgbToHex } from './rgbToHex';
import { colors } from '../__fixtures__/colors';

describe('rgbToHex', () => {
	it('converts rgb to Hex', () => {
		for (const color of colors) {
			expect(rgbToHex(color.r, color.g, color.b)).toEqual(color.hex);
		}
	});
});
