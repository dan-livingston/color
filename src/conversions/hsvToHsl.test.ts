import { describe, expect, it } from 'vitest';
import { hsvToHsl } from './hsvToHsl';
import { colors } from '../__fixtures__/colors';

describe('hsvToHsl', () => {
	it('converts hsv to hsl', () => {
		for (const color of colors) {
			const { h, s, v } = color.hsv;
			expect(hsvToHsl(h, s, v)).toEqual(color.hsl);
		}
	});
});
