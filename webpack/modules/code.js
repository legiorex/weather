// Paths
import { source } from '../paths';

export const loadJavaScript = () => ({
    module: {
        rules: [
            {
                test:    /\.m?js$/,
                include: source,
                use:     'babel-loader',
            }
        ],
    },
});
