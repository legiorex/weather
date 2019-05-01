// Types
import { types } from './types';

export const weatherActions = {
    // Sync
    fillWeather: (weatherData) => {
        return {
            type:    types.FILL_WEATHER,
            payload: weatherData,
        };
    },

    // Async

    getWeather: (idCities) => {
        return {
            type:    types.GET_WEATHER,
            payload: idCities,
        };
    },
};
