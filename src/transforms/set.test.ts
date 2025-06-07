import { describe, expect, it } from 'vitest';
import * as Color from '../colors';
import { set } from './set';

describe('set', () => {
	it('sets rgb values', () => {
		expect(set(Color.BLACK, { r: 255, g: 255, b: 255 })).toEqual(Color.WHITE);
	});

	it('creates a callback to set rgb values', () => {
		const setter = set({ r: 255, g: 255, b: 255 });
		expect(setter(Color.BLACK)).toEqual(Color.WHITE);
	});
});
