// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { loginForm, resetPassword } from "./workers";

function* watchLoginUser () {
    yield takeEvery(types.LOGIN_ASYNC, loginForm);
}
function* watchResetPassword () {
    yield takeEvery(types.RESET_PASSWORD_ASYNC, resetPassword);
}

export function* watchAuth () {
    yield all([call(watchLoginUser), call(watchResetPassword)]);
}
