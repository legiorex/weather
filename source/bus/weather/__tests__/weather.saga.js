//Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

// Instruments
import { api } from '../../../REST';
import { weatherActions } from '../../weather/actions';
import { weather } from '../saga/workers';

describe('weather saga:', () => {
    test('should complete a 200 status response scenario', async () => {
        await expectSaga(weather, weatherActions.fillWeather(__.idCities))
            .provide([
                [
                    apply(api, api.fetchWeather, [__.idCities]),
                    __.fetchResponseSuccess
                ]
            ])
            .put(weatherActions.fillWeather(__.weatherMock))
            .run();
    });
    test('should complete a 400 status response scenario', async () => {
        await expectSaga(weather, weatherActions.fillWeather(__.idCities))
            .provide([
                [
                    apply(api, api.fetchWeather, [__.idCities]),
                    __.fetchResponseFail400
                ]
            ])
            .run();
    });
});
