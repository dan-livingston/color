import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { rgbToHex } from './rgbToHex';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('rgbToHex', () => {
	it('converts rgb to Hex', () => {
		for (const color of colors) {
			expect(rgbToHex(color.r, color.g, color.b)).toEqual(color.rawHex);
		}
	});
});
