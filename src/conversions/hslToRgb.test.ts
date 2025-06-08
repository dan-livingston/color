import { describe, expect, it } from 'vitest';
import { hslToRgb } from './hslToRgb';
import { colors } from '../__fixtures__/colors';

describe('hslToRgb', () => {
	it('converts hsl to rgb', () => {
		for (const color of colors) {
			const { h, s, l } = color.hsl;
			expect(hslToRgb(h, s, l)).toEqual(color.rgb);
		}
	});
});
