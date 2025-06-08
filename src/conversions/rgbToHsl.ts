import type { Hsl } from '../types';

export function rgbToHsl(r: number, g: number, b: number): Hsl {
	const red = r / 255,
		green = g / 255,
		blue = b / 255;

	const vMax = Math.max(red, green, blue),
		vMin = Math.min(red, green, blue);

	const lightness = (vMax + vMin) / 2;
	if (vMax === vMin) {
		return {
			h: 0,
			s: 0,
			l: lightness
		};
	}

	const difference = vMax - vMin;
	const saturation = lightness > 0.5 ? difference / (2 - vMax - vMin) : difference / (vMax + vMin);

	let hue = 0;
	if (vMax === red) hue = (green - blue) / difference + (green < blue ? 6 : 0);
	if (vMax === green) hue = (blue - red) / difference + 2;
	if (vMax === blue) hue = (red - green) / difference + 4;

	return {
		h: (hue * 360) / 6,
		s: saturation,
		l: lightness
	};
}
