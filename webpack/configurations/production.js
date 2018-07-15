// Configurations
import { generateCommonConfiguration } from './common';

// Webpack modules
import {
    loadProductionCss,
    setupBuildAnalysis,
    setupFavicon,
    cleanBuildDirectory
} from '../modules';

// Instruments
import merge from 'webpack-merge';

export const generateProductionConfiguration = () =>
    merge(
        // Generator
        generateCommonConfiguration(),

        // Loaders
        loadProductionCss(),
        setupFavicon(),

        // Plugins
        cleanBuildDirectory(),
        setupBuildAnalysis(),
        {
            mode:   'production',
            output: {
                filename: 'js/[name].[chunkhash:5].js',
            },
            devtool:      'source-map',
            optimization: {
                minimize: false,
            },
        },
    );
