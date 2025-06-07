import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [dts({ exclude: ['./src/**/*.test.ts', './src/**/*.test.js', './vite.config.ts'] })],
	build: {
		lib: {
			entry: {
				index: resolve(__dirname, 'src/index.ts'),
				'constants/index': resolve(__dirname, 'src/constants/index.ts'),
				hex: resolve(__dirname, 'src/hex.ts'),
				rgb: resolve(__dirname, 'src/rgb.ts')
			},
			name: 'Color'
		}
	}
});
