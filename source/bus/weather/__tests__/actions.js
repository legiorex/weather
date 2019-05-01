// Actions
import { weatherActions } from '../actions';

// Types
import { types } from '../types';

describe('weather actions:', () => {
    test('fillWeather', () => {
        expect(weatherActions.fillWeather(__.weatherMock)).toEqual({
            type:    types.FILL_WEATHER,
            payload: __.weatherMock,
        });
    });
    test('getWeather', () => {
        expect(weatherActions.getWeather(__.idCities)).toEqual({
            type:    types.GET_WEATHER,
            payload: __.idCities,
        });
    });
});
