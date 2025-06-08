import type { Hsv } from '../types';

export function hslToHsv(h: number, s: number, l: number): Hsv {
	const v = l + s * Math.min(l, 1 - l);

	return {
		h,
		s: v === 0 ? 0 : 2 * (1 - l / v),
		v
	};
}
