import type { Rgb } from '../types';

export function hslToRgb(h: number, s: number, l: number): Rgb {
	const a = s * Math.min(l, 1 - l);

	function computeK(n: number) {
		return (n + h / 30) % 12;
	}

	function computeRgbPart(n: number) {
		const k = computeK(n);
		return 255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)));
	}

	return {
		r: computeRgbPart(0),
		g: computeRgbPart(8),
		b: computeRgbPart(4)
	};
}
