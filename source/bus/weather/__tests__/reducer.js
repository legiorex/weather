// Reducer
import { weatherReducer } from '../reducer';

// Actions
import { weatherActions } from '../actions';

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

describe('weather reducer:', () => {
    test('should return initial state by default', () => {
        expect(weatherReducer(void 0, {})).toEqual(initialState);
    });
    test('should handle FILL_WEATHER action', () => {
        expect(
            weatherReducer(void 0, weatherActions.fillWeather(__.weatherMock))
        ).toMatchSnapshot();
    });
});
