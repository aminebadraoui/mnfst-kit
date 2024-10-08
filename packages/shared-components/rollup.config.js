import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        postcss({
            config: {
                path: './postcss.config.js',
            },
            extensions: ['.css'],
            minimize: true,
            inject: {
                insertAt: 'top',
            },
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
    ],
    external: ['react', 'react-dom'],
};