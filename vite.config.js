import { defineConfig } from 'vite';
import path from 'path';

const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');
const PUBLIC_DIR = path.resolve(__dirname, './public');

export default defineConfig({
  base: '',
	root: SRC_DIR,
	publicDir: PUBLIC_DIR,
	build: {
		minify: 'terser',
		outDir: BUILD_DIR,
	},
	resolve: {
		alias: {
			'@': SRC_DIR,
		},
	},
	server: {
		host: true,
		open: true,
	},
});
