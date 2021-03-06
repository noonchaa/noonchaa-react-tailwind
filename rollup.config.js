import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import image from '@rollup/plugin-image'

const packageJson = require('./package.json');

export default {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'noonchaa-react-tailwind'
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        commonjs(),
        postcss(),
        image(),
        terser()
    ]
}
