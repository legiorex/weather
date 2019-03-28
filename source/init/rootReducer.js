// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth } from "../bus/auth/reducer";
import { formsReducer as forms } from "../bus/forms/reducer";

export const rootReducer = combineReducers({
    auth,
    forms,
});
