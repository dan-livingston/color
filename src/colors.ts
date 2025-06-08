import { createColor } from './utils';

export const RED = createColor({
	hex: 0xff0000,
	rgb: { r: 255, g: 0, b: 0 },
	hsl: { h: 0, s: 1, l: 0.5 },
	hsv: { h: 0, s: 1, v: 1 }
});

export const GREEN = createColor({
	hex: 0x00ff00,
	rgb: { r: 0, g: 255, b: 0 },
	hsl: { h: 120, s: 1, l: 0.5 },
	hsv: { h: 120, s: 1, v: 1 }
});

export const BLUE = createColor({
	hex: 0x0000ff,
	rgb: { r: 0, g: 0, b: 255 },
	hsl: { h: 240, s: 1, l: 0.5 },
	hsv: { h: 240, s: 1, v: 1 }
});

export const BLACK = createColor({
	hex: 0x000000,
	rgb: { r: 0, g: 0, b: 0 },
	hsl: { h: 0, s: 0, l: 0 },
	hsv: { h: 0, s: 0, v: 0 }
});

export const WHITE = createColor({
	hex: 0xffffff,
	rgb: { r: 255, g: 255, b: 255 },
	hsl: { h: 0, s: 0, l: 1 },
	hsv: { h: 0, s: 0, v: 1 }
});
