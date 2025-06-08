import { describe, expect, it } from 'vitest';
import { hslToHsv } from './hslToHsv';
import { colors } from '../__fixtures__/colors';

describe('hslToHsv', () => {
	it('converts hsl to hsv', () => {
		for (const color of colors) {
			expect(hslToHsv(color.h, color.s, color.l)).toEqual(color.hsv);
		}
	});
});
