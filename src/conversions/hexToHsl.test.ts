import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { hexToHsl } from './hexToHsl';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('hexTohsl', () => {
	it('converts hex to hsl', () => {
		for (const color of colors) {
			expect(hexToHsl(color.hex)).toEqual(color.hsl);
		}
	});
});
