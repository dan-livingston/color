import type { Hsl } from '../types';

export function hsvToHsl(h: number, s: number, v: number): Hsl {
	const l = v * (1 - s / 2);

	return {
		h,
		s: l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l),
		l
	};
}
