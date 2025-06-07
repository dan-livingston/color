import { describe, expect, it } from 'vitest';
import { pipe } from './pipe';
import * as Color from '../colors';
import { set } from '../transforms/set';

describe('pipe', () => {
	it('pipes a color through multiple transform functions', () => {
		expect(pipe(Color.WHITE, set({ r: 0 }), set({ g: 0 }), set({ b: 0 }))).toEqual(Color.BLACK);
	});
});
