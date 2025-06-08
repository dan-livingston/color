import { colorSymbol } from './constants';
import type { Color, HexString } from './types';

export function formatHex(hex: number): HexString {
	return `#${hex.toString(16).padStart(6, '0')}`;
}

export function isColor(value: unknown): value is Color {
	return (
		typeof value === 'object' &&
		value !== null &&
		'__colorSymbol' in value &&
		value.__colorSymbol === colorSymbol
	);
}

export function createColor(
	base: Omit<Color, '__colorSymbol' | 'r' | 'g' | 'b' | 'h' | 's' | 'l'>
): Color {
	return {
		...base,
		...base.rgb,
		...base.hsl,
		__colorSymbol: colorSymbol
	};
}
