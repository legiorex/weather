// Core
import { combineReducers } from 'redux';

// Reducers
import { weatherReducer as weather } from '../bus/weather/reducer';

export const rootReducer = combineReducers({
    weather,
});
