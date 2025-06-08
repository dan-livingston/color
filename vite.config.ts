import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		dts({
			exclude: ['./src/**/*.test.ts', './src/**/*.test.js', './vite.config.ts']
		})
	],
	build: {
		lib: {
			entry: {
				index: resolve(__dirname, 'src/index.ts'),
				colors: resolve(__dirname, 'src/colors.ts')
			},
			name: 'Color'
		}
	}
});
