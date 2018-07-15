// Presets
import { generateCommonConfiguration } from './common';

// Webpack modules
import { loadDevelopmentCss, setupHotModuleReplacement } from '../modules';

// Instruments
import merge from 'webpack-merge';

export const generateDevelopmentConfiguration = () =>
    merge(
        // Generator
        generateCommonConfiguration(),

        // Loaders
        loadDevelopmentCss(),

        // Plugins
        setupHotModuleReplacement(),
        {
            mode:  'development',
            entry: {
                // ? Фикс периодического дисконнекта devserver. Убрать после перехода на webpack-serve
                client: 'webpack-dev-server/client?http://localhost:3000',
            },
            output: {
                filename: 'js/[name].[hash:5].js',
            },
            devtool:   'cheap-module-eval-source-map',
            devServer: {
                hot:                true,
                historyApiFallback: true,
                host:               '0.0.0.0',
                overlay:            true,
                port:               3000,
                stats:              'errors-only',
                useLocalIp:         true,
            },
        },
    );
