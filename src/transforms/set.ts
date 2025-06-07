import { rgb } from '../color-spaces/rgb';
import type { Color } from '../types';
import { isColor } from '../utils';
import type { Transform } from '../types';

interface SetRgbOptions {
	r?: number;
	g?: number;
	b?: number;
}

export type SetOptions = SetRgbOptions;

export function set(color: Color, options: SetOptions): Color;
export function set(options: SetOptions): Transform;
export function set(param1: unknown, param2?: unknown) {
	if (isColor(param1)) {
		return _set(param1, param2 as SetOptions);
	}

	return (color: Color) => _set(color, param1 as SetOptions);
}

function _set(color: Color, options: SetOptions): Color {
	return rgb(options.r ?? color.r, options.g ?? color.g, options.b ?? color.b);
}
