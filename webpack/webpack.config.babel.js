// Presets
import {
    generateDevelopmentConfiguration,
    generateProductionConfiguration
} from './configurations';

// Instruments
import openBrowser from 'react-dev-utils/openBrowser';

export default (env) => {
    const dev = env === 'development';

    if (dev) {
        setImmediate(() => openBrowser('http://localhost:3000'));
    }

    return dev
        ? generateDevelopmentConfiguration()
        : generateProductionConfiguration();
};
