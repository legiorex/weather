// Core
import { createStore, combineReducers } from 'redux';

// Reducers
import { weatherReducer as weather } from '../../bus/weather/reducer';

// Store
import { store } from '../store';

const referenceRootReducer = combineReducers({
    weather,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
