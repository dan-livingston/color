import { describe, expect, it } from 'vitest';
import { hex } from './hex';
import { colors } from '../__fixtures__/colors';

describe('hex', () => {
	it('initializes a color from a valid hex', () => {
		for (const color of colors) {
			expect(() => hex(color.hex)).not.toThrow();
			expect(() => hex(color.hexString)).not.toThrow();
		}
	});

	it("doesn't initialize a color from an invalid hex", () => {
		expect(() => hex('#')).toThrow();
		expect(() => hex('#0')).toThrow();
		expect(() => hex('#00')).toThrow();
		expect(() => hex('#0000')).toThrow();
		expect(() => hex('#00000')).toThrow();
		expect(() => hex('#0000000')).toThrow();

		expect(() => hex('#ggg')).toThrow();
	});
});
