// Paths
import { build } from '../paths';

// Plugins
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { DefinePlugin, ContextReplacementPlugin } from 'webpack';
import { HotModuleReplacementPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import StylishReporter from 'webpack-stylish';

export const initializeEnvVariables = (variables) => ({
    plugins: [new DefinePlugin(variables)],
});

export const setupContextReplacement = () => ({
    plugins: [new ContextReplacementPlugin(/moment\/locale$/, /ru/)],
});

export const setupHotModuleReplacement = () => ({
    plugins: [new HotModuleReplacementPlugin()],
});

export const setupBuildAnalysis = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            generateStatsFile: true,
            statsFilename:     'build-stats.json',
            openAnalyzer:      false,
        })
    ],
});

export const cleanBuildDirectory = () => ({
    plugins: [
        new CleanWebpackPlugin(build, {
            allowExternal: true,
        })
    ],
});

export const setupStyledReporting = () => ({
    stats:   'none',
    plugins: [new StylishReporter()],
});
