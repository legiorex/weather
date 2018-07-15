// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner, Nav, NewPasswordForm, Notification } from '../components';

export default class NewPassword extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <NewPasswordForm />
                <Notification />
            </Catcher>
        );
    }
}
