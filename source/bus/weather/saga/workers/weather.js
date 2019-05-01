//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { weatherActions } from '../../actions';

export function* weather ({ payload: idCities }) {
    try {
        const response = yield apply(api, api.fetchWeather, [idCities]);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error();
        }

        yield put(weatherActions.fillWeather(result.list));
    } catch (error) {
        console.log(error);
    }
}
