// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Control } from 'react-redux-form';
import cx from 'classnames';
import { Map } from 'immutable';

// Instruments
import Styles from './styles.m.css';
import { validateLength } from '../../instruments/validators';
import { book } from '../../navigation/book';

// Components
import { Input } from '../../components';

export default class Profile extends Component {
    static defaultProps = {
        // State
        isFetching: false,
        profile:    Map(),

        // Actions
        updateNameAsync:   () => {},
        updateAvatarAsync: () => {},
    };

    _submitUserInfo = (userInfo) => {
        const { updateNameAsync, updateAvatarAsync } = this.props;

        if (userInfo.avatar.length) {
            const { avatar } = userInfo;

            updateAvatarAsync(avatar);
        }

        const { firstName, lastName } = userInfo;

        updateNameAsync({ firstName, lastName });
    };

    render () {
        const { profile, isFetching } = this.props;

        const buttonStyle = cx(Styles.loginSubmit, {
            [Styles.disabledButton]: isFetching,
        });
        const buttonMessage = isFetching ? 'Загрузка...' : 'Обновить профиль';

        return (
            <Form className = { Styles.form } model = 'forms.user.profile' onSubmit = { this._submitUserInfo }>
                <div className = { Styles.wrapper }>
                    <div>
                        <h1>Привет, {profile.get('firstName')}</h1>
                        <img src = { profile.get('avatar') } />
                        <Control.file
                            className = { Styles.fileInput }
                            disabled = { isFetching }
                            id = 'file'
                            model = 'forms.user.profile.avatar'
                            name = 'file'
                        />
                        <label htmlFor = 'file'>Выбери новый аватар</label>
                        <Input
                            disabled = { isFetching }
                            disabledStyle = { Styles.disabledInputRedux }
                            id = 'forms.user.profile.firstName'
                            invalidStyle = { Styles.invalidInput }
                            model = 'forms.user.profile.firstName'
                            placeholder = 'Имя'
                            validators = { {
                                valid: (name) => !validateLength(name, 1),
                            } }
                        />
                        <Input
                            disabled = { isFetching }
                            disabledStyle = { Styles.disabledInputRedux }
                            id = 'forms.user.profile.lastName'
                            invalidStyle = { Styles.invalidInput }
                            model = 'forms.user.profile.lastName'
                            placeholder = 'Фамилия'
                            validators = { {
                                valid: (lastName) => !validateLength(lastName, 1),
                            } }
                        />
                        <button className = { buttonStyle } disabled = { isFetching } type = 'submit'>
                            {buttonMessage}
                        </button>
                    </div>
                    <Link to = { book.newPassword }>сменить пароль →</Link>
                </div>
            </Form>
        );
    }
}
