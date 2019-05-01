// Types
import { types } from './types';
const initialState = {
    cities: [
        {
            name: 'Владивосток',
            link: 'vladivostok',
            id:   2013348,
        },
        {
            name: 'Сочи',
            link: 'sochi',
            id:   491422,
        },
        {
            name: 'Ярославль',
            link: 'yaroslavl',
            id:   468902,
        }
    ],
    weatherData: [],
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_WEATHER:
            state.weatherData = action.payload;

            return {
                ...state,
            };

        default:
            return state;
    }
};
