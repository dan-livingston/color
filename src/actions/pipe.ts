import type { Transform } from '../types';
import type { Color } from '../types';

export function pipe(color: Color, ...args: Transform[]): Color {
	return args.reduce((c, fn) => {
		return fn(c);
	}, color);
}
