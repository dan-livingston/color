import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { hexToRgb } from './hexToRgb';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('hexToRgb', () => {
	it('converts hex to rgb', () => {
		for (const color of colors) {
			expect(hexToRgb(color.hex)).toEqual(color.rgb);
		}
	});
});
