import { describe, expect, it } from 'vitest';
import { hex } from './hex';
import * as Color from '../colors';

const colors = [Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.BLACK];

describe('hex', () => {
	it('initializes a color from a valid hex', () => {
		for (const color of colors) {
			expect(() => hex(color.rawHex)).not.toThrow();
			expect(() => hex(color.hex)).not.toThrow();
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
