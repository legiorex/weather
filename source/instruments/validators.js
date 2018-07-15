// Core
import { object, string, boolean } from 'yup';

export const validateLength = (text, minLength, maxLength) =>
    !text || text.length < minLength || text.length > maxLength;

export const loginSchema = object().shape({
    email: string()
        .email()
        .required(),
    password: string()
        .min(5)
        .required(),
    remember: boolean(),
});

export const signupSchema = object().shape({
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
});

export const newPasswordSchema = object().shape({
    oldPassword: string()
        .required()
        .min(5),
    newPassword: string()
        .required()
        .min(5),
});

export const composerSchema = object().shape({
    comment: string()
        .required()
        .min(1),
});
