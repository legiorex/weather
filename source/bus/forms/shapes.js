// Core
import { object, string, boolean } from 'yup';

const phoneRegExp = /^ ((8 |\+7)[\- ] ?)?(\(?\d{ 3 } \)?[\- ] ?)?[\d\- ]{ 7, 10 } $/;

export const login = {
    shape: {
        login:    'test@test.ru',
        password: '123123q',
    },
    schema: object().shape({
        login: string()
            .email()
            .required(),
        password: string()
            .min(5)
            .required(),
        remember: boolean(),
    }),
};

export const signup = {
    shape: {
        login:    '',
        password: '',
    },
    schema: object().shape({
        firstName: string().required(),
        lastName:  string().required(),
        email:     string()
            .required()
            .email(),
        password: string()
            .required()
            .min(5),
        invite: string()
            .required()
            .min(12)
            .max(12),
    }),
};

export const newPassword = {
    shape: {
        oldPassword: '',
        newPassword: '',
    },
    schema: object().shape({
        oldPassword: string()
            .required()
            .min(5),
        newPassword: string()
            .required()
            .min(5),
    }),
};

export const composer = {
    shape: {
        comment: '',
    },
    schema: object().shape({
        comment: string()
            .required()
            .min(1),
    }),
};
