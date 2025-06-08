import { describe, expect, it } from 'vitest';
import { hslToHsv } from './hslToHsv';
import { colors } from '../__fixtures__/colors';

describe('hslToHsv', () => {
	it('converts hsl to hsv', () => {
		for (const color of colors) {
			const { h, s, l } = color.hsl;
			expect(hslToHsv(h, s, l)).toEqual(color.hsv);
		}
	});
});
