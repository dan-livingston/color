import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { hslToRgb } from './hslToRgb';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('hslToRgb', () => {
	it('converts hsl to rgb', () => {
		for (const color of colors) {
			expect(hslToRgb(color.h, color.s, color.l)).toEqual(color.rgb);
		}
	});
});
