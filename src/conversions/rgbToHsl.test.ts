import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { rgbToHsl } from './rgbToHsl';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('rgbToHsl', () => {
	it('converts rgb to hsl', () => {
		for (const color of colors) {
			expect(rgbToHsl(color.r, color.g, color.b)).toEqual(color.hsl);
		}
	});
});
