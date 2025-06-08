import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { hslToHex } from './hslToHex';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('hslToHex', () => {
	it('converts hsl to hex', () => {
		for (const color of colors) {
			expect(hslToHex(color.h, color.s, color.l)).toEqual(color.rawHex);
		}
	});
});
