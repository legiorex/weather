// Core
import { Map } from 'immutable';

// Types
import { types } from './types';
const initialState = Map({
    isAuthenticated: false,
});

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.AUTHENTICATE:

            return state.set("isAuthenticated", true);

        default:
            return state;
    }
};
