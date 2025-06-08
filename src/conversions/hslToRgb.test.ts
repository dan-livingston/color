import { describe, expect, it } from 'vitest';
import { hslToRgb } from './hslToRgb';
import { colors } from '../__fixtures__/colors';

describe('hslToRgb', () => {
	it('converts hsl to rgb', () => {
		for (const color of colors) {
			expect(hslToRgb(color.h, color.s, color.l)).toEqual(color.rgb);
		}
	});
});
