// Types
import { types } from './types';

export const authActions = {

    // Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },

    // Async

    loginAsync: (userData) => {

        return {
            type:    types.LOGIN_ASYNC,
            payload: userData,
        };
    },

    resetPasswordAsync: (login) => {
        return {
            type:    types.RESET_PASSWORD_ASYNC,
            payload: login,

        };
    },

};
