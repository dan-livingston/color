import type { HexString } from './types';

export function formatHex(hex: number): HexString {
	return `#${hex.toString(16).padStart(6, '0')}`;
}
