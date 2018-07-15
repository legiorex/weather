// Core
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { signup } from '../../bus/forms/shapes';

export default class SignupForm extends Component {
    static defaultProps = {
        // State
        isFetching: false,

        // Actions
        signupAsync: () => {},
    };

    _submitSignupForm = (user) => {
        this.props.signupAsync(user);
    };

    render () {
        const { isFetching } = this.props;

        return (
            <Formik
                initialValues = { signup.shape }
                render = { (props) => {
                    const { isValid, touched, errors } = props;

                    const centeredWrapperStyle = cx(Styles.wrapper, Styles.centered, {
                        [Styles.disabledInput]: isFetching,
                    });
                    const firstNameStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.firstName && errors.firstName,
                    });
                    const lastNameStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.lastName && errors.lastName,
                    });
                    const emailStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.email && errors.email,
                    });
                    const passwordStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.password && errors.password,
                    });
                    const inviteStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.invite && errors.invite,
                    });
                    const buttonStyle = cx(Styles.signupSubmit, {
                        [Styles.disabledButton]: isFetching,
                    });
                    const buttonMessage = isFetching ? 'Загрузка...' : 'Создать аккаунт ✓';

                    return (
                        <Form className = { Styles.form }>
                            <div className = { centeredWrapperStyle }>
                                <div>
                                    <Field
                                        className = { firstNameStyle }
                                        disabled = { isFetching }
                                        name = 'firstName'
                                        placeholder = 'Имя'
                                        type = 'text'
                                    />
                                    <Field
                                        className = { lastNameStyle }
                                        disabled = { isFetching }
                                        name = 'lastName'
                                        placeholder = 'Фамилия'
                                        type = 'text'
                                    />
                                    <Field
                                        className = { emailStyle }
                                        disabled = { isFetching }
                                        name = 'email'
                                        placeholder = 'Почта'
                                        type = 'email'
                                    />
                                    <Field
                                        className = { passwordStyle }
                                        disabled = { isFetching }
                                        name = 'password'
                                        placeholder = 'Пароль'
                                        type = 'password'
                                    />
                                    <Field
                                        className = { inviteStyle }
                                        disabled = { isFetching }
                                        name = 'invite'
                                        placeholder = 'Секретное слово'
                                        type = 'password'
                                    />
                                    <button className = { buttonStyle } disabled = { isFetching } type = 'submit'>
                                        {buttonMessage}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    );
                } }
                validationSchema = { signup.schema }
                onSubmit = { this._submitSignupForm }
            />
        );
    }
}
