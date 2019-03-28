//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { authActions } from '../../../auth/actions';

export function* loginForm ({ payload: userData }) {

    try {

        const response = yield apply(api, api.login, [userData]);

        if (response.status !== 200) {
            throw new Error();
        }

        yield put(authActions.authenticate());

    } catch (error) {

        console.log(error);

    }

}
