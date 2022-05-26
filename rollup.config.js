import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-typescript2'
import path from 'path'
const getPath = _path => path.resolve(__dirname, _path)
const extensions = [
  '.js',
  '.ts',
  '.tsx'
]

console.log(getPath('./tsconfig.json'))

const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions
})

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'index.ts',
	output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      name: 'index',
      exports: 'named'
    },
    {
      file: 'dist/index.m.js',
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      name: 'index.m'
    }
  ],
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		// commonjs(), // converts date-fns to ES modules
		// production && terser(), // minify, but only in production
    tsPlugin
	]
};