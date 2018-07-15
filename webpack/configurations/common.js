// Core
import getRepositoryName from 'git-repo-name';

// Paths
import { source, build } from '../paths';

// Webpack modules
import {
    loadJavaScript,
    loadFonts,
    loadImages,
    setupHtml,
    setupFavicon,
    setupContextReplacement,
    setupStyledReporting,
    initializeEnvVariables
} from '../modules';

// Instruments
import merge from 'webpack-merge';

export const generateCommonConfiguration = () => {
    const BUILD_ENV = process.env.BUILD_ENV;
    const IS_DEPLOYING_TO_GITHUB_PAGES =
        process.env.DEPLOY_TARGET === 'github-pages';
    const REPOSITORY_NAME = getRepositoryName.sync();

    return merge(
        // Loaders
        loadJavaScript(),
        loadFonts(),
        loadImages(),

        // Plugins
        setupHtml(),
        setupContextReplacement(),
        setupFavicon(),
        setupStyledReporting(),
        initializeEnvVariables({
            __ENV__:  JSON.stringify(BUILD_ENV),
            __DEV__:  BUILD_ENV === 'development',
            __PROD__: BUILD_ENV === 'production',
        }),
        {
            entry: {
                source,
            },
            output: {
                path:       build,
                publicPath: IS_DEPLOYING_TO_GITHUB_PAGES
                    ? `/${REPOSITORY_NAME}/`
                    : '/',
            },
            resolve: {
                extensions: [
                    '.mjs',
                    '.js',
                    '.json',
                    '.css',
                    '.m.css',
                    '.png',
                    '.jpg'
                ],
                modules: [source, 'node_modules'],
            },
            optimization: {
                nodeEnv: process.env.NODE_ENV,
            },
        },
    );
};
