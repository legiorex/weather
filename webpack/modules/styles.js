// Paths
import { source } from '../paths';

// PostCSS plugins
import imports from 'postcss-import';
import mqpacker from 'css-mqpacker';
import smootheFonts from 'postcss-font-smoothing';
import modules from 'postcss-icss-selectors';
import reporter from 'postcss-reporter';
import postcssPresetEnv from 'postcss-preset-env';
import gradients from 'postcss-easing-gradients';
import cssnano from 'cssnano';

// Plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const loadPostCSS = () => ({
    loader:  'postcss-loader',
    options: {
        ident:   'postcss',
        plugins: (loader) => {
            return [
                imports({
                    getPath:        source,
                    skipDuplicates: true,
                }),
                modules({
                    mode: loader.resourcePath.includes('.m.css')
                        ? 'local'
                        : 'global',
                }),
                gradients(),
                smootheFonts(),
                postcssPresetEnv({
                    stage: 0,
                }),
                mqpacker(),
                reporter(),
                cssnano()
            ];
        },
        sourceMap: true,
    },
});

export const loadDevelopmentCss = () => ({
    module: {
        rules: [
            {
                test:    /\.css$/,
                include: [source, /node_modules/],
                use:     [
                    {
                        loader:  'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader:  'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    loadPostCSS()
                ],
            }
        ],
    },
});

export const loadProductionCss = () => ({
    module: {
        rules: [
            {
                test:    /\.css$/,
                include: [source, /node_modules/],
                use:     [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:  'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    loadPostCSS()
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      'css/[contenthash].[hash:5].css',
            chunkFilename: 'css/[contenthash].[hash:5].css',
        })
    ],
});
