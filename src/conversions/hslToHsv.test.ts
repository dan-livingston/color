import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { hslToHsv } from './hslToHsv';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('hslTohsv', () => {
	it('converts hsl to hsv', () => {
		for (const color of colors) {
			expect(hslToHsv(color.h, color.s, color.l)).toEqual(color.hsv);
		}
	});
});
