import { colorSymbol } from './constants';
import type { Color, HexString } from './types';

export function formatHex(hex: number): HexString {
	return `#${hex.toString(16).padStart(6, '0')}`;
}

export function brand(color: Omit<Color, '__colorSymbol'>): Color {
	return {
		__colorSymbol: colorSymbol,
		...color
	};
}

export function isColor(value: unknown): value is Color {
	return (
		typeof value === 'object' &&
		value !== null &&
		'__colorSymbol' in value &&
		value.__colorSymbol === colorSymbol
	);
}
