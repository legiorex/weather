// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { weather } from './workers';

function* watchGetWeather () {
    yield takeEvery(types.GET_WEATHER, weather);
}

export function* watchWeather () {
    yield all([call(watchGetWeather)]);
}
