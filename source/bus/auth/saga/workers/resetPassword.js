//Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../REST';
import { authActions } from '../../../auth/actions';

// const getData = () => new Promise(r => setTimeout(() => r(сюда подставляете данные), 1000));

export function* resetPassword ({ payload: login }) {
    // console.log('saga',login);

    try {

        const response = yield apply(api, api.resetPassword, [login]);

        if (response.status !== 200) {
            throw new Error();
        }

        console.log(response);

        // yield put(authActions.authenticate());

    } catch (error) {

        console.log(error);

    }

}
