// Core
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "react-redux-form";
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

// Actions
import { authActions } from "../../bus/auth/actions";

// Components
import { Input } from '../../components';

const mapStateToProps = (state) => {

    return { profile: state.forms.user.profile };
};

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            { ...authActions },
            dispatch
        ),
    };

};

@connect(mapStateToProps, mapDispatchToProps)

export default class LoginForm extends Component {
    static defaultProps = {
        // State
        isFetching: false,

    };

    taskInput = createRef();

    _submitLoginForm = (userData) => {

        this.props.actions.loginAsync(userData);
    };

    _resetPassword = () => {
        const { profile, actions } = this.props;

        actions.resetPasswordAsync({ login: profile.login });
    }

    render () {
        const { isFetching } = this.props;
        const centeredWrapperStyle = cx(Styles.wrapper, Styles.centered, {
            [Styles.disabledInput]: isFetching,
        });
        const buttonStyle = cx(Styles.disabledButton, {
            [Styles.loginSubmit]: true,
        });

        return (
            <Form
                className = { Styles.form }
                onSubmit = { this._submitLoginForm }

                model = 'forms.user.profile'>

                <div className = { centeredWrapperStyle }>
                    <div >
                        <div className = { Styles.headerForm }>
                            <h2>Вход</h2>
                            <a href = ''>Регистрация</a>
                        </div>

                        <div>
                            <div className = { Styles.inputWrapper } >
                                <span className = { Styles.inputLabel }>Эл. почта или телефон</span>
                                <Input
                                    disabled = { isFetching }
                                    disabledStyle = { Styles.disabledInputRedux }
                                    id = 'forms.user.profile.login'
                                    invalidStyle = { Styles.invalidInput }
                                    label = 'Email'
                                    model = 'forms.user.profile.login'
                                    placeholder = 'Эл. почта или телефон'

                                />
                            </div>

                            <div className = { Styles.inputWrapper } >
                                <span className = { Styles.inputLabel }>Пароль</span>
                                <div className = { Styles.inputPasswordWrapper } >
                                    <div className = { Styles.inputPassword } >
                                        <Input
                                            disabled = { isFetching }
                                            disabledStyle = { Styles.disabledInputRedux }
                                            id = 'forms.user.profile.password'
                                            invalidStyle = { Styles.invalidInput }
                                            model = 'forms.user.profile.password'
                                            placeholder = 'Пароль'
                                        />
                                    </div>

                                    <a
                                        className = { Styles.resetPassword }
                                        onClick = { this._resetPassword }>
                                                Напомнить
                                    </a>

                                </div>

                            </div>

                            <button
                                className = { buttonStyle }
                                disabled = { isFetching }
                                type = 'submit'>
                                        Войти на площадку
                            </button>
                        </div>
                    </div>
                </div>

            </Form>
        );
    }
}
