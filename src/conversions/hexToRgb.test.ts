import { describe, expect, it } from 'vitest';
import { hexToRgb } from './hexToRgb';
import { colors } from '../__fixtures__/colors';

describe('hexToRgb', () => {
	it('converts hex to rgb', () => {
		for (const color of colors) {
			expect(hexToRgb(color.hex)).toEqual(color.rgb);
		}
	});
});
