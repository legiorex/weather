// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchWeather } from '../bus/weather/saga/watchers';

export function* rootSaga () {
    yield all([call(watchWeather)]);
}
