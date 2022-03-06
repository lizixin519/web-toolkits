import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import common from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'
import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
const getPath = (_path) => path.resolve(__dirname, _path)
console.log(getPath('./tsconfig.json'))
export default {
  input: './index.ts',
  output: [
    {
      file: './dist/index.esm.js',
      format: 'esm',
      name: 'index',
    },
    {
      file: './dist/index.cjs.js',
      format: 'cjs',
      name: 'index',
    },
  ],
  plugins: [
    resolve(),
    del({
      targets: './dist',
    }),
    cleanup(),
    json(),
    common(),
    typescript({
      tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
      extensions: ['.ts'],
    }),

    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
}
